import './main.scss';
//lucide
import { createIcons, icons } from 'lucide';
createIcons({ icons });

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css'; 


window.addEventListener('load', () => {
    AOS.init({
        'offset': 200,
    });
});