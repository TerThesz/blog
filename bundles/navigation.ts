import { set_query, get_query } from '../utils';

let navigation: HTMLElement | null;
let nav_items: Array<any>;
let active_nav_item = 0;
let category_h1: HTMLElement | null;

export default () => {
  navigation = document.getElementById('navigation');
  if (!navigation) return console.log('navigation not found');

  category_h1 = document.querySelector('header #category');
  if (!category_h1) return console.log('category h1 not found');

  nav_items = Array.from(navigation.querySelectorAll('li'));

  nav_items.forEach(item => {
    item.addEventListener('click', (e: any) => {
      e.preventDefault();

      const target = e.target;

      nav_items[active_nav_item].classList.remove('active');
      target.classList.add('active');

      active_nav_item = nav_items.indexOf(item);
      
      const section = target.innerHTML.toString().toLowerCase().replace(' ', '-');

      set_query('section', section);

      (category_h1 as HTMLElement).innerHTML = section.replace('-', ' ').split(' ').map((word: string) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(' ');
    });
  });

  category_h1.addEventListener('click', (e) => {
    e.preventDefault();

    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
}