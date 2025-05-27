let currentPosition = 0;
const slider = document.getElementById("slider");
const slider2 = document.getElementById("slider2");
const slideWidth = 210; // image width + gap
const imagesVisible = 5;
const totalImages = slider.children.length;

function slideRight() {
  if (currentPosition < totalImages - imagesVisible) {
    currentPosition += imagesVisible;
    slider.style.transform = `translateX(-${currentPosition * slideWidth}px)`;
  }
}

function slideLeft() {
  if (currentPosition >= imagesVisible) {
    currentPosition -= imagesVisible;
    slider.style.transform = `translateX(-${currentPosition * slideWidth}px)`;
  }
}

function slideRight1() {
  if (currentPosition < totalImages - imagesVisible) {
    currentPosition += imagesVisible;
    slider2.style.transform = `translateX(-${currentPosition * slideWidth}px)`;
  }
}

function slideLeft1() {
  if (currentPosition >= imagesVisible) {
    currentPosition -= imagesVisible;
    slider2.style.transform = `translateX(-${currentPosition * slideWidth}px)`;
  }
}

// document.getElementById("ResumeButton").onclick = function() {
//   location.href = "https://www.hotstar.com/in/movies/aavesham/1271320425/watch";
// }

// function goToPage() {
//   window.location.href = "/video.html"; // replace with your target URL
// }