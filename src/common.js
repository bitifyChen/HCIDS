//Filter
export const filter = (dom, scrollTo = null) => {
  const listItems = dom;
  const urlParams = new URLSearchParams(window.location.search);
  const currentFilter = urlParams.get('c');

  // Function to set the active class based on the URL parameter
  function setActive(currentFilter) {
    listItems.forEach((li) => {
      // Determine if the item should be active
      const filterValue = li.dataset.filter;
      if (filterValue === '*' && !currentFilter) {
        li.classList.add('active');
      } else if (filterValue === currentFilter) {
        li.classList.add('active');
      } else {
        li.classList.remove('active');
      }
    });
  }

  // Set the initial active class based on the current URL
  setActive(currentFilter);

  // Add click event listeners to all list items
  listItems.forEach((li) => {
    li.addEventListener('click', () => {
      const filterValue = li.dataset.filter;
      urlParams.delete('p');
      if (filterValue === '*') {
        urlParams.delete('c');
      } else {
        urlParams.set('c', filterValue);
      }
      window.location.href = `?${urlParams.toString()}${scrollTo ? `#${scrollTo}` : ''}`;
    });
  });
};

export const search = (dom, scrollTo = null) => {
  const _input = dom.querySelector('input');
  const _btnSubmit = dom.querySelector('button#submit');
  const _btnClear = dom.querySelector('button#clear');
  const urlParams = new URLSearchParams(window.location.search);
  const currentSearch = urlParams.get('q');
  //Input Value
  if (currentSearch) {
    _input.value = currentSearch;
    _btnClear.classList.remove('hidden');
    //Clear Click
    _btnClear.addEventListener('click', () => {
      urlParams.delete('c');
      urlParams.delete('p');
      urlParams.delete('q');
      window.location.href = `?${urlParams.toString()}${scrollTo ? `#${scrollTo}` : ''}`;
    });
  }
  //Submit Click
  _btnSubmit.addEventListener('click', () => {
    urlParams.delete('c');
    urlParams.delete('p');
    if (_input.value) {
      urlParams.set('q', _input.value);
    } else {
      urlParams.delete('q');
    }
    window.location.href = `?${urlParams.toString()}${scrollTo ? `#${scrollTo}` : ''}`;
  });
};
