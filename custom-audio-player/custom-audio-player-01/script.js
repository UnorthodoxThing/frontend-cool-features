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

});
