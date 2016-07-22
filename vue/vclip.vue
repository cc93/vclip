<style>
    .vclip-container {
        overflow: hidden;
    }

    .vclip-container-size {
        position: relative;
        width: 180px;
        height: 300px;
        margin: 0 auto;
    }

    .vclip-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
    }

    .vclip-frame {
        position: relative;
        width: 100%;
        height: 100%;
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

</style>
<template>
    <div :class="['vclip-container',class == ''? 'vclip-container-size': class]" v-el:container>
        <div class="vclip-wrapper"
             v-el:wrapper
             :style="{transform: 'translate3d(' + translateX + 'px, 0, 0)'}"
             >
            <slot></slot>
        </div>
    </div>
</template>
<script>
    //播放窗口大小containerSize由样式类自行设定;
    //帧的大小继承父元素100%, 默认scale=false,内容自动居中,小图完全显示,大图显示部分,不会缩放
    //scale=true,开启自动缩放,保持长宽比的缩放,即不论帧内容的长或宽 大于还是小于 容器,都会被缩放,缩放后总会有长或宽等于容器
    //广播事件

    //改进:
    //1.自动检测最大帧尺寸,设定容器大小containerSize
    //2.插入帧,删除帧
    module.exports = {
        props: {
            class: {
                type: String,
                default: ''
            },
            play: {
                type: Boolean,
                default: true
            },
            fps: {        //3fps = 333ms/f
                type: Number,
                default: 3      //fps
            },
            loop: {
                type: Boolean,
                default: true
            },
            resize: {
                type: Boolean,
                default: false
            },
            playSection: {
                type: Array,
                default: function () {
                    return [];
                }
            },
            //API
            api: {
                type: Object,
                default: function () {
                    return {};
                }
            }

        },
        data: function () {
            return {
                speed: 300,
                eles: [],
                frameWidth: 0,
                frameHeight: 0,
                totalFrames: 0,
                currentFrame: 0,
                lastFrame: 0,
                frames: [],
                playFrames: [],
                playIndex: 0,   //从播放列表playFrames[]数组中的第一项index0开始播
                translateX: 0
            }
        },
        methods: {
            initData: function () {
                //fps to speed(ms/f)
                this.speed = 1000/this.fps;
                //totalFrames
                this.eles = this.$els.wrapper.children;
                this.totalFrames = this.eles.length;
                //frameSize
                this.frameWidth = this.$els.container.clientWidth;
                this.frameHeight = this.$els.container.clientHeight;
                //playFrames
                if (this.playSection.length == 0) { //如果未设置palySection,则默认play所有Frames
                    this.playSection = [1, this.totalFrames];
                }
                this.setPlayFrames(this.playSection);
            },
            setPlayFrames: function (playSection) {
                if (playSection.length == 1) {
                    //[2]
                    this.playFrames[0] = playSection[0];
                }
                if (playSection.length == 2) {
                    //[2,3] ->  2,3
                    //[2,5] -> 2,4,5
                    for (var i = playSection[0]; i <= playSection[1]; i++) {
                        this.playFrames.push(i);
                    }
                }
                if (playSection.length > 2) {
                    //[2,3,5]
                    //[2,3,4,8,10]
                    this.playFrames = playSection;
                }

            },
            goFrame: function (framePage) {
                if (framePage >= 1 && framePage <= this.totalFrames) {
                    this.currentFrame = framePage;
                    this.translateX = -(framePage - 1) * this.frameWidth;
                    this.$emit('on-frame-changed', this.currentFrame);
                } else {
                    throw new Error('out of range!');
                }
            },
            nextFrame: function () {
                if (this.currentFrame >= this.totalFrames) {
                    this.goFrame(1);
                } else {
                    this.goFrame(this.currentFrame + 1);
                }
            },
            prevFrame: function () {
                if (this.currentFrame <= 1) {
                    this.goFrame(this.totalFrames);
                } else {
                    this.goFrame(this.currentFrame - 1);
                }
            },
            startPlay: function () {
                var me = this;
                if (me.loop) {
                    me.intervalId = setInterval(function () {
                        if (me.playIndex >= me.playFrames.length) {
                            me.playIndex = 0;
                        }
                        me.goFrame(me.playFrames[me.playIndex]);
                        me.playIndex++;
                    }, me.speed);
                } else {
                    me.intervalId = setInterval(function () {
                        if (me.playIndex >= me.playFrames.length) {
                            clearInterval(me.intervalId);
                            me.play = false;
                            return;
                        }
                        me.goFrame(me.playFrames[me.playIndex]);
                        me.playIndex++;
                    }, me.speed);
                }
                this.$emit('on-play-start', this.currentFrame);
                console.log('on-play-start');
                return true;
            },
            stopPlay: function () {
                if (this.intervalId) {
                    clearInterval(this.intervalId);

                }
                this.$emit('on-play-stop', this.currentFrame);
                console.log('on-play-stop');
                return true;
            },
            resizeContent: function () {
                var frameEles = null;
                var maxWidth = 0, maxHeight = 0, ratio = 0;
                var frameRatio = this.frameHeight / this.frameWidth;
                var scale = 0, newWidth = 0, newHeight = 0;
                for (var i = 0; i < this.totalFrames; i++) {
                    frameEles = this.eles[i].children;
                    maxWidth = 0;
                    maxHeight = 0;
                    ratio = 0;
                    for (var j = 0; j < frameEles.length; j++) {
                        if (frameEles[j].clientWidth > maxWidth) {
                            maxWidth = frameEles[j].clientWidth;
                        }
                        if (frameEles[j].clientHeight > maxHeight) {
                            maxHeight = frameEles[j].clientHeight;
                        }
                    }
                    ratio = maxHeight / maxWidth;
                    newWidth = this.frameWidth;
                    if (ratio > frameRatio) {       // height is bigger, then decided by frameHeight
                        newHeight = this.frameHeight;
                        newWidth = newHeight / ratio;
                    } else {
                        newWidth = this.frameWidth;
                        newHeight = newWidth * ratio;
                    }
                    scale = newWidth / maxWidth;
                    this.eles[i].style.transform  = 'scale(' + scale + ')';
                }
            },
            exposeAPI: function () {          //暴露出想给父组件使用的属性和方法
                this.api.goFrame = this.goFrame;
                this.api.nextFrame = this.nextFrame;
                this.api.prevFrame = this.prevFrame;
            }

        },
        ready: function () {
            this.initData();
            this.exposeAPI();
            if (this.resize) {
                var me = this;      //要等资源加载完成后才能得到正确的frame元素宽高,尤其是img加载
                setTimeout(function(){
                    me.resizeContent();
                },100);
            }
            if (this.play) {
                this.startPlay();
            }

        },
        watch: {
            'play': function (val) {
                if (val) {
                    this.startPlay();
                } else {
                    this.stopPlay();
                }
                this.$emit('on-play-changed', this.play);
            },
            'fps': function (val) {
                this.speed = 1000/val;      //更新speed, 因为interval要用到
                if (this.play) {             //如果play正在进行,则重启interval才能使新的speed生效
                    this.stopPlay();
                    this.startPlay();
                }
                this.$emit('on-fps-changed', this.fps);
            }
        }
    };
</script>