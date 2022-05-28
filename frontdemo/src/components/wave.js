var canvas;
var ctx;
var w;
var h;
var boHeight;
  var posHeight;
  //初始角度为0 
  var step;
  //定义三条不同波浪的颜色 
  var lines = []; 
function getWave(){
    canvas=document.getElementById('wave'); 
    ctx= canvas.getContext('2d'); 
    ctx.font="30px Arial";
    ctx.fillText("Hello World",10,50);
    w=canvas.width;
    h=canvas.height;
//   canvas.width = canvas.parentNode.offsetWidth; 
//   canvas.height = canvas.parentNode.offsetHeight;
  //如果浏览器支持requestAnimFrame则使用requestAnimFrame否则使用setTimeout 
  
  // 波浪大小
    boHeight = h / 15;
    posHeight = h / 1.2;
  //初始角度为0 
    step = 0; 
  //定义三条不同波浪的颜色 
    lines = ["rgba(255, 255, 255,0.6)",
       "rgba(255, 215, 0,0.5)", 
      "rgba(255,250,205,0.3"]; 
    loop();
    ctx.font="20px Georgia";
    ctx.fillText("Hello World!",10,50);
}

window.requestAnimFrame = (function(){ 
  return window.requestAnimationFrame  || 
    window.webkitRequestAnimationFrame || 
    window.mozRequestAnimationFrame || 
    function( callback ){ 
     window.setTimeout(callback, 1000 / 60); 
    }; 
  })(); 
function loop(){ 
   ctx.clearRect(0,0,canvas.width,canvas.height); 
   step++; 
   //画3个不同颜色的矩形 
   for(var j = lines.length - 1; j >= 0; j--) { 
    ctx.fillStyle = lines[j]; 
    //每个矩形的角度都不同，每个之间相差45度 
    var angle = (step+j*50)*Math.PI/180; 
    var deltaHeight = Math.sin(angle) * boHeight;
    var deltaHeightRight = Math.cos(angle) * boHeight; 
    ctx.beginPath();
    ctx.moveTo(0, posHeight+deltaHeight); 
    ctx.bezierCurveTo(canvas.width/2, posHeight+deltaHeight-boHeight, canvas.width / 2, posHeight+deltaHeightRight-boHeight, canvas.width, posHeight+deltaHeightRight); 
    ctx.lineTo(canvas.width, canvas.height); 
    ctx.lineTo(0, canvas.height); 
    ctx.lineTo(0, posHeight+deltaHeight); 
    ctx.closePath(); 
    ctx.fill(); 
   }
   requestAnimFrame(loop);
  } 
 export {
     getWave
 }