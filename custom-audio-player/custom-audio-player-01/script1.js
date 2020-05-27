// Checklist:
// [ ] a11y
// [ ]

// For:
// * Single Song

// TODO:
// [ ] Create Scrubbing effect like in YouTube
// UHM. See previous JS script method. Work from that.

let audio = new Audio('kuku.mp3');

// A11y; Progressive Enhancement:
// Remove fallback controls if JavaScript is working
let audioElem = document.querySelector('audio');
audioElem.removeAttribute('controls');


let playPauseBtn = document.querySelector('#play-pause-button');
let seekBar = document.querySelector('.seek-bar');
let fillBar = document.querySelector('.fill-bar');
let playPauseImg = document.querySelector('img');

// Set img height and width
playPauseImg.style.width = '80px';
playPauseImg.style.height = '80px';

playPauseBtn.addEventListener('click', function playPause() {
  if (audio.paused) {
      audio.play();
      playPauseImg.src = 'pause1.svg';
      playPauseBtn.setAttribute('aria-label', 'pause song');
    } else {
      audio.pause();
      playPauseImg.src = 'play.svg';
      playPauseBtn.setAttribute('aria-label', 'play song');
    }
});


// let mousedown = 'false';
//
// audio.addEventListener('timeupdate', function() {
//   if (mouseDown) return;
//   let percent = audio.currentTime / audio.duration;
//
//   fillBar.style.width = percent * 100 + '%';
// });
//
// audio.addEventListener('ended', funciont() {
//
// });

// Display progress

// audio.addEventListener('timeupdate', function() {
//   fillBar.style.width = parseInt(((audio.currentTime / audio.duration) + 100), 10) + '%';
// })

let mouseDown = false;

audio.addEventListener('timeupdate', function() {
  if (mouseDown) return;
  let percent = audio.currentTime / audio.duration;

  fillBar.style.width = percent * 100 + '%';
});

// Fix client x position relative to seek bar
// constraint
function clamp (min, val, max) {
  // returns the lowest value number passed into it
  return Math.min(Math.max(min, val), max);
}

function getPercent(e) {
  let percent = (e.clientX - seekBar.offsetLeft) / seekBar.clientWidth;
  percent = clamp(0, percent, 1);

  return percent;
}

seekBar.addEventListener('mousedown', function(e) {
  mouseDown = true;

  let percent = getPercent(e);

  fillBar.style.width = percent * 100 + '%';
});

window.addEventListener('mouseup', function(e) {
  if (!mouseDown) return;

  mouseDown = false;

  let percent = getPercent(e);

  fillBar.style.width = percent * 100 + '%';

  audio.currentTime = percent * audio.duration;
})


// TODO: improvement / suggestions
// scrubbing effect
// no noise while scrubbings

const skipButtons = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.player__slider');

function skip() {
  audio.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  console.log(this.value);
  // Refers to their name attribute
  audio[this.name] = this.value;
}

//  Would do if.. (WIP)
function handleProgress() {
  // Use percentage
  const percent = (audio.currentTime / audio.duration) * 100;
  // progressBar.style.flexbasis = `${percent}%`;
}

function scrub(e) {
  console.log(e);
  // Find out the offset of mouse click
  // divide that by the entire width of the progress bar
  // multiple that by the audio / video duration
  const scrubTime = (e.offsetX / seekBar.offsetWidth) * audio.duration;

  // Then updat the video / audio
  audio.currentTime = scrubTime;
}

seekBar.addEventListener('click', scrub);

// dragging and dropping
// mousedown - false

seekBar.addEventListener('mousemove', (e) => mousedown && scrub(e));
seekBar.addEventListener('mousedown', () => mousedown = true);
seekBar.addEventListener('mouseup', () => mousedown = false);

skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
// ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
