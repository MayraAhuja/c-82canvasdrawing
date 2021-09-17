var canvas= document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var mouseEvent="empty";
var lastXPos, lastYPos;
var penColor="pink";
var penWidth=5;

canvas.addEventListener("mouseleave",LeaveF);
function LeaveF(e){
    mouseEvent="mouseleave";
} 



canvas.addEventListener("mouseup",upF);
function upF(e){
    mouseEvent="mouseup";
} 





canvas.addEventListener("mousedown",downF);
function downF(e){
    mouseEvent="mousedown";
} 





canvas.addEventListener("mousemove",moveF);
function moveF(e){
   var currentXPos=e.clientX-canvas.offsetLeft;
   var currentYPos=e.clientY-canvas.offsetLeft;
   
   
   
    if(mouseEvent=="mousedown"){
       ctx.beginPath();
       ctx.strokeStyle=penColor;
       ctx.lineWidth=penWidth;
       ctx.moveTo(lastXPos,lastYPos);
       ctx.lineTo(currentXPos,currentYPos);
       ctx.stroke();
   }
   lastXPos=currentXPos;
   lastYPos=currentYPos;
} 