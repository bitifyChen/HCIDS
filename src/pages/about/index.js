import '@/pages/about/index.scss';

document.addEventListener('DOMContentLoaded', () => { 
  //Tab
  const _tabDom = document.querySelector('#about-list');
  if (_tabDom) tab(_tabDom)
});


const tab = (dom) => {
  const listItems = dom.querySelectorAll('li');
  const contentItems = dom.querySelector('.main').querySelectorAll('div');
  const urlParams = new URLSearchParams(window.location.search);
  const currentFilter = urlParams.get('tab');

  // Function to set the active class based on the URL parameter
  function setActive(currentFilter,dom) {
    dom.forEach((li,index) => {
      // Determine if the item should be active
      const filterValue = li.dataset.filter;
      if (index===0 && !currentFilter) {
        li.classList.add('active');
      } else if (filterValue === currentFilter) {
        li.classList.add('active');
      } else {
        li.classList.remove('active');
      }
    });
  }

  // Set the initial active class based on the current URL
  setActive(currentFilter,listItems);
  setActive(currentFilter, contentItems);
  
  //如果有tab，自動抵達
  if(currentFilter) dom.scrollIntoView();
   // Add click event listeners to all list items
  listItems.forEach((li) => {
    li.addEventListener('click', () => {
      const filterValue = li.dataset.filter;
      urlParams.set('tab', filterValue);
      const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + `?${urlParams.toString()}`;
      window.history.pushState({ path: newUrl }, '', newUrl);
      setActive(filterValue,listItems);
      setActive(filterValue, contentItems);
    });
  });
};