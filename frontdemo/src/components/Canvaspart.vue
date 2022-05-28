<template>
    <!-- <canvas id="canvas" width="800px" height="300px">
        对不起, 你的浏览器不支持画布, 请升级浏览器!
    </canvas>  -->
    <canvas id="wave" width="800px" height="600px">
        对不起, 你的浏览器不支持画布, 请升级浏览器!
    </canvas>
    
</template>

<script>

export default {
    name: 'Canvaspart'
};
import { getCanvas } from "./Canvaspart.js";
import { getWave} from "./wave";
window.onload=function(){
    getWave();
    getCanvas();
}

</script>

<style>
canvas {
     /* https://tva1.sinaimg.cn/large/9bd9b167gy1g2qme6u3cbj21hc0u0npd.jpg
     https://tva4.sinaimg.cn/large/9bd9b167gy1g2qk3vv0gvj21hc0u0nab.jpg https://tva3.sinaimg.cn/large/9bd9b167ly1fwshgdyxvaj21hc0u0npd.jpg*/
    /* background-color:white;
    background-color: lemonchiffon;
    background-color: gold; */
    background-image: url('https://tva4.sinaimg.cn/large/9bd9b167gy1g4lj2pwrifj21hc0xcx6p.jpg');
    background-size: 100%;
    background-position-x: 30%;
    display: block;
    margin:0; 
    padding:0;
}
</style>

