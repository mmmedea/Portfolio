const carousels = document.querySelectorAll(".carousel");

carousels.forEach(carousel => {

const track = carousel.querySelector(".carousel-track");
const slides = carousel.querySelectorAll(".slide");

let index = 0;

carousel.querySelector(".next").addEventListener("click", () => {

index++;

if(index >= slides.length){
index = 0;
}

track.style.transform = `translateX(-${index * 100}%)`;

});

carousel.querySelector(".prev").addEventListener("click", () => {

index--;

if(index < 0){
index = slides.length - 1;
}

track.style.transform = `translateX(-${index * 100}%)`;

});

});