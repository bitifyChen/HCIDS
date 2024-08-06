import '@/pages/member/index.scss';
import { filter } from '@/common';

document.addEventListener('DOMContentLoaded', () => { 
    //Filter
    const _filterDom = document.querySelectorAll('.category ul li');
    if (_filterDom) filter(_filterDom)
});
