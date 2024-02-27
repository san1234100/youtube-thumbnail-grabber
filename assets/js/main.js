const youtubeLinkEl = document.getElementById('youtubeLink')
const youtubeThumbnailEl = document.getElementById('youtubeThumbnail')
const btnEl = document.querySelector('button')
console.log(youtubeLinkEl,youtubeThumbnailEl,btnEl);

btnEl.addEventListener('click',getThumbnail)

function getThumbnail() {
    let youtubeLink = youtubeLinkEl.value;
    let videoId = getYoutubeVideoId(youtubeLink);
    if (videoId) {
      let thumbnailUrl = 'https://img.youtube.com/vi/' + videoId + '/maxresdefault.jpg';
      console.log(thumbnailUrl);
      youtubeThumbnailEl.innerHTML = '<img class="w-[100%]" src="' + thumbnailUrl + '">';
    } else {
      alert('Invalid YouTube Link');
    }
  }

  function getYoutubeVideoId(url) {
    let regExp = /^.*(youtu\.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;
    let match = url.match(regExp);
    if (match && match[2].length == 11) {
      return match[2];
    } else {
      return null;
    }
  }

  youtubeThumbnailEl.addEventListener('click', () => {
    if (document.youtubeThumbnailEl) {
      exitFullscreen();
    } else {
      enterFullscreen(youtubeThumbnailEl);
    }
  });
  
  function enterFullscreen(element) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { /* Firefox */
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { /* IE/Edge */
      element.msRequestFullscreen();
    }
  }
  
  function exitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
    }
  }