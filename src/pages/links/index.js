import { filter} from '@/common';
import '@/pages/links/index.scss';

document.addEventListener('DOMContentLoaded', () => {
    //Filter
    const _filterDom = document.querySelectorAll('.category ul li');
 
    if (_filterDom) filter(_filterDom,'main')
  });
  