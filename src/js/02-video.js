import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
console.log('допоможіть розібратись з з методом catch, і чи потрібен він тут взагалі? помилки наче нема в плеері? хочеться для розібратись, але не розумію цей метод(((');

player.on(
  'timeupdate',
    throttle(e => {
      localStorage.setItem('videoplayer-current-time', e.seconds);
  }, 1000)
  
);

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .catch(function (error) {
    console.log(error);
  });
