// mobile burger-menu
const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
const mobileNav = document.querySelector('.mobile-nav-wrapper');


mobileNavButton.addEventListener('click', () => {
  mobileNavIcon.classList.toggle('active');
  mobileNav.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
})


// video

const videoBtn = document.querySelector('#video-story-btn');
const videoFile = document.querySelector('#video-story');
const videoBtnICon = document.querySelector('#video-story-btn-icon');
const videoOverlay = document.querySelector('#video-story-overlay');

videoBtn.addEventListener('click', () => {


  function toggleOverlay(event) {
    if (event.type === 'mouseleave') {
      videoOverlay.classList.add('hidden');
    } else {
      videoOverlay.classList.remove('hidden');
    }
  }


  if (videoFile.paused) {
    videoFile.play();
    videoBtnICon.src = "img/pause.svg";
    videoOverlay.onmouseleave = toggleOverlay;
    videoOverlay.onmouseenter = toggleOverlay;

  } else {
    videoFile.pause();
    videoBtnICon.src = "img/play-video.svg";
    videoOverlay.onmouseleave = null;
    videoOverlay.onmouseenter = null;
  }
})
