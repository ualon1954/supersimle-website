import {videos} from '../data/videos.js';

let videosHTML  = '';

videos.forEach((video) => {

  videosHTML += `
    <div class="video-preview">
      <div class="thumbnail-row">
        <img class="thumbnail js-thumbnail" data-video-title ="${video.title}" src="${video.thumbnail}">
        <div class="video-time">${video.time}</div>
      </div>
      <div class="video-info-grid">
        <div class="channel-picture">
          <img class="profile-picture"
           src="${video.profile}">
        </div>
        <div class="video-info">
          <p class="video-title">
            ${video.title}
          </p>
          <p class="video-author">
           ${video.author}
          </p>
          <p class="video-stats">
            ${video.stats}
          </p>
        </div>
      </div>
  </div>
  `;
})

console.log(videosHTML);

document.querySelector('.js-video-grid').innerHTML = videosHTML;

function openTab(url,target) {
  window.open(url);
  }


  
document.querySelectorAll('.js-thumbnail').forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    const videoTitle = thumbnail.dataset.videoTitle;
    //addToCart(productId);
    //updateCartQuantity()
    openTab('https://www.youtube.com/watch?v=faPrckGlU_s','_blank');
      
    console.log(videoTitle);
  });
    //console.log(cart);
  });