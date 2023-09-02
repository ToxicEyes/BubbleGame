let min = 1
let max = 15;
var score = 0;
var timer = 60;
var hit = 0;
var startaudio = new Audio('./start.mp3')
var popaudio = new Audio('./pop.mp3');
var sucessaudio = new Audio('./sucess.mp3');



function bubblemaker() {
//We want to create multiple bubbles
var clutter = "";

for(var i = 1; i <= 65; i++){
 clutter += `<div class="bubble">${Math.floor(Math.random() * (max - min + 1)) + min}</div>`;
}
//selecting part in which bubbles should be added
document.querySelector("#pbottom").innerHTML = clutter;
}
bubblemaker();


function setTimer() {
startaudio.play();
 var interval = setInterval(function(){
  if(timer > 0){
  timer--;
  document.querySelector(".timer").textContent = timer;
  }
  else{
   document.querySelector("#pbottom").innerHTML = "";
   clearInterval(interval);
   showScore();
  }
 },1000);
}
setTimer();

function getHit() {
 hit = Math.floor(Math.random() * (max - min + 1)) + min;
 document.querySelector('.hit').textContent = hit;
}
getHit();


function gainScore() {
 popaudio.play();
 score += 10;
 document.querySelector('.score').textContent = score;
}

function showScore(){
 sucessaudio.play();
 let scoreDiv = document.createElement("div");
 scoreDiv.classList.add("textCenter");
 scoreDiv.classList.add("addGif");
 
 let para = document.createElement("para");
 let resetBtn = document.createElement("button");
 resetBtn.innerText = "RESTART";
 resetBtn.classList.add("reset-btn");

 para.innerHTML = `<h1>Your Score is ${score}</h1>`

 
 scoreDiv.appendChild(para);
 scoreDiv.appendChild(resetBtn);
 document.querySelector("#pbottom").appendChild(scoreDiv);

 resetBtn.addEventListener("click",function(){
  window.location.reload(true);
 })
}


document.querySelector('#pbottom').addEventListener("click",function(dets) {
let bubbleValue = Number(dets.target.textContent);
 if(bubbleValue === hit){
  gainScore();
  getHit();
  bubblemaker();
 }
})

