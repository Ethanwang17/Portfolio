// Rotating text START
"use strict";

const secondCarouselntainer = document.getElementById("carousel1");
const carousel = secondCarouselntainer.querySelector('.carousel');
let scrollLeft = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const scrollWidth = carousel.scrollWidth;
    const containerWidth = carousel.clientWidth;

    if (scrollLeft < scrollWidth - containerWidth) {
        scrollLeft = scrollTop * 2; // Adjust the scroll speed as needed
        carousel.style.transform = `translateX(-${scrollLeft}px)`;
    }
});

const firstCarouselContainer = document.getElementById("carousel2");
const firstPhotoCarousel = firstCarouselContainer.querySelector('.carousel');
const images = firstPhotoCarousel.querySelectorAll('img');

// Calculate the total width of all images in the carousel
const totalWidth = Array.from(images).reduce((acc, img) => {
    return acc + img.clientWidth;
}, 0);

// Clone the images to create an infinite loop
images.forEach(img => {
    const clone = img.cloneNode(true);
    firstPhotoCarousel.appendChild(clone);
});

let scrollPosition = 0;

function scrollCarousel() {
    // Increment the scroll position
    scrollPosition += 1;

    // Reset the scroll position when it reaches the end
    if (scrollPosition >= totalWidth) {
        scrollPosition = 0;
    }

    // Apply the scroll position to the carousel
    firstPhotoCarousel.style.transform = `translateX(-${scrollPosition}px)`;

    // Request animation frame for smooth scrolling
    requestAnimationFrame(scrollCarousel);
}

// Start the scrolling animation
scrollCarousel();



  let words = document.querySelectorAll(".word");
  words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
      let span = document.createElement("span");
      span.textContent = letter;
      span.className = "letter";
      word.append(span);
    });
  });

  let currentWordIndex = 0;
  let maxWordIndex = words.length - 1;
  words[currentWordIndex].style.opacity = "1";

  let rotateText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord =
      currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
    // rotate out letters of current word
    Array.from(currentWord.children).forEach((letter, i) => {
      setTimeout(() => {
        letter.className = "letter out";
      }, i * 80);
    });
    // reveal and rotate in letters of next word
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
      letter.className = "letter behind";
      setTimeout(() => {
        letter.className = "letter in";
      }, 340 + i * 80); // Increase the delay from 340 + i * 80 to 500 + i * 80
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
  };

  // Add an initial delay before starting the rotation
  setTimeout(() => {
    rotateText();
    setInterval(rotateText, 4000); // Increase the interval to 5000ms (5 seconds) or any other value you prefer
  }, 4000); // Adjust the initial delay as needed (3000ms or 3 seconds in this example)
// Rotating text END

const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
	if (!menuOpen) {
		menuBtn.classList.add("open");
		menuOpen = true;
	} else {
		menuBtn.classList.remove("open");
		menuOpen = false;
	}
});

function toggleMenu() {
	const menu = document.getElementById("menu");
	menu.classList.toggle("show-menu");
}

document.getElementById("back-to-home").addEventListener("click", function () {
    window.location.href = "index.html";
  });

