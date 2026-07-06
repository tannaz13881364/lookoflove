// JavaScript Document
function openLetter(){

document
.querySelector(".envelope")
.classList.add("opened");

setTimeout(()=>{

document
.getElementById("letter")
.classList.add("show-letter");

},700);

}
