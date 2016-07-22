# vclip
A [Vue.js](http://cn.vuejs.org/) component for clips playing and controlling.
You can play or paused the clip, set fps and playing section, go directly to certain frame and so on.

## Demo
[vclip.html](https://cc93.github.io/ccjs/vclip/demo/vclip.html)

## Usage
* import vue.js and vclip.bundle.js, then declare the vclip component in your root vue instance:
```javascript
<script src="../js/vue.js"></script>
<script src="../js/vclip.bundle.js"></script>
<script>
        new Vue({
            el: 'body',
            components:{
                vclip:VClip
            }
        });
</script>
```
* now, you can use the vclip component in your HTML file
* a simple useage:
```html
        <vclip class="vclip-child-3" :speed="300">
            <div class="vclip-frame">
                <div class="icon-02_child_01"></div>
            </div>
            <div class="vclip-frame">
                <div class=" icon-02_child_02"></div>
            </div>
            <div class="vclip-frame">
                <div class=" icon-02_child_03"></div>
            </div>
        </vclip>
```
* a complex usage with more options:
```html
        <vclip class="vclip1" :play.sync="vclip1.play" :loop="vclip1.loop" :speed.sync="vclip1.speed"
       :resize="false" :play-section="[]" :api="vclip1.api"
       @on-frame-changed="frameChanged">

           <div class="vclip-frame">
               <img class=" child" src="../img/10_child_01.png">
           </div>
       
           <div class="vclip-frame ">
               <img class=" child" src="../img/10_child_02.png">
           </div>
       
           <div class="vclip-frame">
               <img class=" child" src="../img/10_child_03.png">
           </div>
       
           <div class="vclip-frame">
               <img class=" child" src="../img/10_child_04.png">
           </div>
       </vclip>
```
* just as the above shows, both images and sprite images can be used in the frame content,
* write your frame content in this part:```html  <div class="vclip-frame"> content </div> ```,and do not omit it! 

## API
### Properties

| Name  |   Type    |   Default |   Desciption  |
|-------|-----------|-----------|---------------|   
| **play**  |   Boolean |   true    | play or pause the clip|
| **loop**  |   Boolean |   true    | set the clip playing once or loop|
| **fps** |   Number  |    3     | frame per second |
| **resize** | Boolean |  false  | auto scale the frame content to fill in the frame container |
| **play-section** | Array | [ ]  | set certain frames to be played |
 
### Methods

| Name  | Arguments | Description | 
|-------|-----------|-------------|
| nextFrame  | null | next frame |
| prevFrame  | null | previous frame |
| goFrame | Number frame | go to Frame 'Number'|

### Events

| Name | Parameters | Description | 
|------|------------|-------------|
| on-play-start  | Number currentFrame | clip starts |
| on-play-stop   | Number currentFrame | clip stops |
| on-frame-changed | Number currentFrame | frame changed |
| on-fps-changed | Number fps | fps changed |
| on-play-changed | Boolean play | play state changed |

### Details:

* play-section

| play-section  | play-frames |
|---------------|-------------|
| null  | 1 ~ end |
| [2]   | 2 |
| [2,5] | 2 ~ 5 |
| [2,3,5]| 2,3,5 |

## Dev Guide

on the terminal link to the project directory:

* npm i    _(require Node.js and package.json)_
* webpack    _(require webpack.config.js)_

