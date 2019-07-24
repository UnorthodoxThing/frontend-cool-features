let image = document.querySelector("#target-image");

window.addEventListener('scroll', function() {
  // Adjust speed here -> Edit the integer 3. Higher for slower, and lower for faster.
  let scroll = window.pageYOffset / 3;
  image.style.transform = `rotate(${scroll}deg)`;
});
