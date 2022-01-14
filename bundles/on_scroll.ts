let header: HTMLElement | null;

export default () => {
  header = document.querySelector('header');
  
  window.onscroll = () => {
    // get scrolled position
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 50)
      return header?.classList.add('scrolled');

    header?.classList.remove('scrolled');
  }
}