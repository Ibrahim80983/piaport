// let slideIndex = 1;

// showSlides(slideIndex);

// let slideInterval = setInterval(() => plusSlides(1), 10000);

// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }
// function currentSlides(n) {
//   showSlides((slideIndex = n));
// }
// function showSlides(n) {
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");

//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (let i = 0; i < dots.length; i++) {
//     dots[i].classList.remove("active");
//   }
//   slides[slideIndex - 1].style.display = "flex";
//   dots[slideIndex - 1].classList.add("active");
// }

// List of words to display
const words = [
  "a Website Developer",
  "an Electrical Engineer",
  "a Crypto Enthusiast",
];
let index = 1;

// Get the text container element
const changingText = document.querySelector(".reshow");

// Function to change the word dynamically
function changeText() {
  changingText.textContent = words[index];
  index++; // Move to the next word

  // Reset index to 0 when it reaches the end of the array
  if (index >= words.length) {
    index = 0;
  }
}

// Change the word every 4 seconds
setInterval(changeText, 10000);

let indexSlide = 1;

let sliding = setInterval(() => slidePlus(1), 10000);

slideShow(indexSlide);

function slidePlus(n) {
  slideShow((indexSlide += n));
}
function slideShow(n) {
  let slideon = document.querySelectorAll(".slideon");
  if (n > slideon.length) {
    indexSlide = 1;
  }
  if (n < 1) {
    indexSlide = slideon.length;
  }

  for (let i = 0; i < slideon.length; i++) {
    slideon[i].style.display = "none";
  }
  slideon[indexSlide - 1].style.display = "block";
}

// JavaScript to handle scroll and change background color
const navbar = document.querySelector("nav");
const heroSection = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  // Get the height of the hero section
  const heroHeight = heroSection.offsetHeight;

  if (window.scrollY > heroHeight) {
    // When scrolled past the hero section
    navbar.style.backgroundColor = "#3282b8";
  } else {
    // When back at the top
    navbar.style.backgroundColor = "transparent";
  }
});
var ty = new Typed("#orange", {
  backDelay: 1000,
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
  strings: ["will be happy to hear from you", "Thanks for reaching out"],
});
let d = new Date();
let copy = (document.querySelector(".copyright").innerHTML =
  "Copyright © " + d.getFullYear() + " Piacom");

let displayMe = document.querySelector(".slideIn");
function comeOnOnline() {
  displayMe.style.width = "100%";
}
function goOffLine() {
  displayMe.style.width = "0";
}
function letOff() {
  document.querySelector(".slideIn").style.width = "0";
}
