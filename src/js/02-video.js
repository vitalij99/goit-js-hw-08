import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

if (localStorage.getItem('videoplayer-current-time') === null) {
 localStorage.setItem('videoplayer-current-time', 0)  
}

player.on('timeupdate', throttle(e => {
  localStorage.setItem('videoplayer-current-time', e.seconds);
  }, 1000)
);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') )
  .catch(function (error) {
    console.log(error);
  });