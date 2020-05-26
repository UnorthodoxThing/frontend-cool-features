let audio = new Audio('kuku.mp3');

// If there's multiple songs, this needs to be reconsidered VVV
let seekBar = document.querySelector('.seek-bar');
let playButton = document.querySelector('button.play');
let fillBar = seekBar.querySelector('.fill');

let playPauseImg = document.querySelector('img');
// TODO:
// Change play button icon

// algorithm
// create play / pause button
// create scrubbing

let mouseDown = false;

// playButton.appendChild(playPauseImg);

// CONSIDER putting it in a fragment so it does not have to
// be fetched from the server constantly
playButton.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
    playPauseImg.src = 'pause1.svg';
  } else {
    audio.pause();
    playPauseImg.src = 'play.svg';

  }
});

// audio.addEventListener('play', function() {
//   playButton.classList.add('pause-icon') ;
//   playButton.classList.remove('play-icon');
// });
//
// audio.addEventListener('pause', function() {
//   playButton.classList.add('play-icon');
//   playButton.classList.remove('pause-icon');
// });

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
