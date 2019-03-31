const windowWidth = `${String(window.innerWidth)}px`;
const windowHeight = `${String(window.innerHeight)}px`;
const $video = document.querySelector('#video');
const $videoRepeatModal = document.querySelector('.video-ended-modal');
const $videoRepeatBtn = document.querySelector('.video-ended-repeat-btn');

if ($video != null){

  $video.style.width = windowWidth;
  $video.style.height = windowHeight;

  $video.addEventListener('ended', () => {
    $videoRepeatModal.classList.add('active');
  });

  $video.addEventListener('play', () => {
    $videoRepeatModal.classList.remove('active');
  });

  $videoRepeatBtn.addEventListener('click', () => {
    
    $video.play();
  });

  window.addEventListener('resize', () => {
    $video.style.width = `${String(window.innerWidth)}px`;
    $video.style.height = `${String(window.innerHeight)}px`;
  }, false);

}
