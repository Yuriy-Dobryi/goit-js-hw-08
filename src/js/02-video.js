import Player from '@vimeo/player';
import _throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const videoCurrentTime = localStorage.getItem('videoplayer-current-time');

if (videoCurrentTime) {
  player.setCurrentTime(videoCurrentTime);
}

player.on('timeupdate', _throttle(({ seconds }) =>
  localStorage.setItem('videoplayer-current-time', seconds), 1000));

// try {
//   player.setCurrentTime(videoCurrentTime);
// } catch (error) {
//   console.log(error);
// }