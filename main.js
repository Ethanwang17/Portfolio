// Rotating text START
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




  
// Menut buttton Start
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
// Menut buttton END

