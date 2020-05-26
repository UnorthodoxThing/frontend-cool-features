// Checklist:
// [ ] a11y
// [ ]

// For:
// * Single Song

// TODO:
// [ ] Create Scrubbing effect like in YouTube

let audio = new Audio('kuku.mp3');

// A11y; Progressive Enhancement:
// Remove fallback controls if JavaScript is working
let audioElem = document.querySelector('.audio-player audio');
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

audio.addEventListener('timeupdate', function() {
  fillBar.style.width = parseInt(((audio.currentTime / audio.duration) + 100), 10) + '%';
})
