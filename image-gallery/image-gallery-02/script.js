const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// Looping through images
// how many images


// (1)
// Get images and
// for each one, insert in <img> element inside the 'thum-bar' <div>,
// which embed that image in the page

let files = [
  'img/img1.jpg',
  'img/img2.jpg',
  'img/img3.jpg',
  'img/img4.jpg',
  'img/img5.jpg',
];

for (let i = 0, j = files.length; i < j; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', files[i]);
  thumbBar.appendChild(newImage);

}

// (2)
// Attach an onclick handler to the images, so
// when clicked it will show at 'display-image'
// HINT: Use "Event Delegation"
thumbBar.addEventListener('click', function(e) {
  let value = e.target.getAttribute('src')

  displayedImage.setAttribute('src', value);
})

// Wiring up the Darken/ Lighten button

// (1)
// When button is clicked
// ADD / STYLE overlay with rgb(0,0,0,0.5)
// it should darken the image
// When clicked again, revert to original

btn.addEventListener('click', function() {
  if (btn.className == 'dark') {
    overlay.style.backgroundColor = 'rgb(0,0,0,0.5)';
    btn.className = 'light';
    btn.textContent = 'original'
  } else {
    overlay.style.backgroundColor = 'rgb(0,0,0,0)';
    btn.className = 'dark';
    btn.textContent = 'darken'
  }
})
