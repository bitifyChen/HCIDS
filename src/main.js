import './main.scss';
//lucide
import { createIcons, icons } from 'lucide';
createIcons({ icons });

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

window.addEventListener('load', () => {
  AOS.init({
    offset: 200,
  });
});

//SessionStorage
const headerInit = () => {
  let key = sessionStorage.getItem('headerAOS');
  if (!key) {
    sessionStorage.setItem('headerAOS', true);
    //Logo
    const _domHLogo = document.querySelector('header .logo');
    _domHLogo.setAttribute('data-aos', 'fade-down');
    //Menu
    const _domMenu = document.querySelector('header ul.menu');
    _domMenu.setAttribute('data-aos', 'fade-down');
    _domMenu.setAttribute('data-aos-delay', 300);
  }
};
headerInit();

//Header
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 200) {
    header.classList.add('is-sticky');
  }
  if (window.scrollY < 150) {
    header.classList.remove('is-sticky');
  }
});
