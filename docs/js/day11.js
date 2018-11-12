const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const volumeRange = player.querySelector('[name=volume]');
const speedRange = player.querySelector('[name=playbackRate]');
const sound = player.querySelector('.sound');
const restart = player.querySelector('.restart');

function togglePlay() {
  if (video.paused){
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function skip(){
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleVolumeUpdate(e){
  video.volume = this.value;
  if (video.volume > 0){
    video.muted = false;
  } else {
    video.muted = true;
  }
  toggleSoundIcon();
}

function handleSpeedUpdate(e){
  video.playbackRate = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function toggleSound() {
  if (volumeRange.value > 0){
    video.muted = true;
    volumeRange.value = 0;
  } else {
    video.muted = false;
    volumeRange.value = video.volume;
  }
  toggleSoundIcon();
}

function toggleSoundIcon() {
  if (video.muted) {
    sound.textContent = "🔇";
  } else {
    sound.textContent = "🔉";
  }
}

function restartVideo() {
  video.currentTime = 0;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

volumeRange.addEventListener('change', handleVolumeUpdate);
volumeRange.addEventListener('mousemove', handleVolumeUpdate);

speedRange.addEventListener('change', handleSpeedUpdate);
speedRange.addEventListener('mousemove', handleSpeedUpdate);

let mousedown = false;

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

sound.addEventListener('click', toggleSound);

restart.addEventListener('click', restartVideo);