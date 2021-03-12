

const transition = document.querySelector(".transition");
const opacity = document.querySelector(".opacity");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const fourth = document.querySelector(".fourth");
const fifth = document.querySelector(".fifth");



// Create the translate3d function
function setTranslate(xPos, yPos, el) {
	el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
}

// Add event Listenter to Window
window.addEventListener("DOMContentLoaded", scrollLoop, false);

// Define position variables
let xScrollPosition;
let yScrollPosition;

// Scroll function
function scrollLoop() {
	xScrollPosition = window.pageXOffset;
	yScrollPosition = window.pageYOffset;

	// We only change the Y variable
	setTranslate(0, yScrollPosition * -1, transition);
	setTranslate(0, yScrollPosition * -1, opacity);
	setTranslate(0, yScrollPosition * -1, first);
	setTranslate(0, yScrollPosition * -0.6, second);
	setTranslate(0, yScrollPosition * -0.4, third);
	setTranslate(0, yScrollPosition * -0.2, fourth);
	setTranslate(0, yScrollPosition * -0, fifth);

	// We use requestAnimationFrame to target the GPU instead of the CPU
	requestAnimationFrame(scrollLoop);
}


$(document).ready(function(){
	$(this).scrollTop(0);
});