'use strict';

var windowWidth = String(window.innerWidth) + 'px';
var windowHeight = String(window.innerHeight) + 'px';
var $video = document.querySelector('#video');
var $videoRepeatModal = document.querySelector('.video-ended-modal');
var $videoRepeatBtn = document.querySelector('.video-ended-repeat-btn');

if ($video != null) {

  $video.style.width = windowWidth;
  $video.style.height = windowHeight;

  $video.addEventListener('ended', function () {
    $videoRepeatModal.classList.add('active');
  });

  $video.addEventListener('play', function () {
    $videoRepeatModal.classList.remove('active');
  });

  $videoRepeatBtn.addEventListener('click', function () {

    $video.play();
  });

  window.addEventListener('resize', function () {
    $video.style.width = String(window.innerWidth) + 'px';
    $video.style.height = String(window.innerHeight) + 'px';
  }, false);
}