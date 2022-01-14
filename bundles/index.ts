import navigation from './navigation';
import on_scroll from './on_scroll';

export default () => {
  window.onload = () => {
    navigation();
    on_scroll();
  };
}