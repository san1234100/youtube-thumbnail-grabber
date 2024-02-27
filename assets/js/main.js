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
      youtubeThumbnailEl.innerHTML = '<img src="' + thumbnailUrl + '">';
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