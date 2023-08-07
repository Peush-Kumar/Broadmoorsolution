// JavaScript code to handle the movable slider functionality (using Vanilla JS)
const slider = document.querySelector('.slider-inner');
const images = document.querySelectorAll('.slider img');
const imageWidth = images[0].clientWidth; // Assuming all images have the same width

let isDragging = false;
let startClientX = 0;
let transform = 0;

function moveSlider() {
  slider.style.transform = `translateX(${transform}px)`;
}

function handleMouseDown(event) {
  isDragging = true;
  startClientX = event.clientX || event.touches[0].clientX;
}

function handleMouseMove(event) {
  if (!isDragging) return;
  const currentClientX = event.clientX || event.touches[0].clientX;
  const diff = currentClientX - startClientX;
  transform += diff;
  startClientX = currentClientX;
  moveSlider();
}

function handleMouseUp() {
  isDragging = false;
  // Snap to the closest image after releasing the drag
  const snapIndex = Math.round(transform / imageWidth);
  transform = snapIndex * imageWidth;
  moveSlider();
}

// Add event listeners to make the slider movable
slider.addEventListener('mousedown', handleMouseDown);
slider.addEventListener('mousemove', handleMouseMove);
window.addEventListener('mouseup', handleMouseUp);

slider.addEventListener('touchstart', handleMouseDown);
slider.addEventListener('touchmove', handleMouseMove);
window.addEventListener('touchend', handleMouseUp);
