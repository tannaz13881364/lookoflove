// JavaScript Document
const photos = [

"images/photo1.jpeg",
"images/photo2.jpeg",
"images/photo3.jpeg",
"images/photo4.jpeg",
"images/photo5.jpeg",
"images/photo6.jpeg",
"images/photo7.jpeg",
"images/photo8.jpeg",
"images/photo9.jpeg",
"images/photo10.jpeg",
"images/photo11.jpeg",
"images/photo12.jpeg",
"images/photo13.jpeg",
"images/photo14.jpeg",
"images/photo15.jpeg",
"images/photo16.jpeg",
"images/photo17.jpeg",
"images/photo18.jpeg",
"images/photo19.jpeg",
"images/photo20.jpeg"

];

let current = 0;

const img = document.getElementById("memoryPhoto");

setInterval(() => {

    img.classList.add("slide-up");

    setTimeout(() => {

        current++;

        if(current >= photos.length){
            current = 0;
        }

        img.src = photos[current];
		const rotation =
Math.floor(Math.random() * 12) - 6;

document.querySelector(".polaroid").style.transform =
`rotate(${rotation}deg)`;

        img.classList.remove("slide-up");

    },800);

},3500);
