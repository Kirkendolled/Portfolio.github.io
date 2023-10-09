// ---------------------------------------------
// CSS Property Control for Dark Mode
// ---------------------------------------------
class CssPropControl {
  constructor(element) {
      this.element = element;
  }

  get(varName) {
      return getComputedStyle(this.element).getPropertyValue(varName);
  }

  set(varName, val) {
      return this.element.style.setProperty(varName, val);
  }
}

const bodyCssProps = new CssPropControl(document.body);
const toggle = document.querySelector('#dark-mode-toggle');
toggle.addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
  const mode = toggle.checked ? 'dark' : 'light';
  bodyCssProps.set('--background', bodyCssProps.get(`--${mode}-background`));
  bodyCssProps.set('--primary', bodyCssProps.get(`--${mode}-primary`));
  bodyCssProps.set('--link', bodyCssProps.get(`--${mode}-link`));
}

// ---------------------------------------------
// Button to Top Functionality
// ---------------------------------------------
const mybutton = document.getElementById("myBtn");

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
  } else {
      mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// ---------------------------------------------
// Slideshow Functionality
// ---------------------------------------------
let currentImage = 0;
const myPhotos = ['Chadow 1.jpg', 'Leo 1.jpg', 'Sissy 1.jpg', 'Brutie.jpg', 'The crew.jpg'];
const container = document.getElementById('content');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('previous');

nextBtn.addEventListener('click', showNextImage);
prevBtn.addEventListener('click', showPreviousImage);

function showNextImage(event) {
  event.preventDefault();
  updateImage(1);
}

function showPreviousImage(event) {
  event.preventDefault();
  updateImage(-1);
}

function updateImage(increment) {
  currentImage += increment;
  if (currentImage > myPhotos.length - 1) { currentImage = 0; }
  if (currentImage < 0) { currentImage = myPhotos.length - 1; }

  const newSlide = document.createElement('img');
  newSlide.src = `Slides/${myPhotos[currentImage]}`;
  newSlide.className = 'fadeinimg slide-image'; // Added slide-image class
  container.appendChild(newSlide);

  if (container.children.length > 1) {
    container.removeChild(container.children[0]);
}

}

// If you don't use the YouTube functionality or other specific functionalities in your website, you can safely remove them from this file.

document.querySelector('.prev').addEventListener('click', function(event) {
  event.preventDefault();
  // Your previous button code here
});

document.querySelector('.next').addEventListener('click', function(event) {
  event.preventDefault();
  // Your next button code here
});

        