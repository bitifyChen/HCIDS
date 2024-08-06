//Filter
export const filter = (dom) => { 
    const listItems = dom;
    const urlParams = new URLSearchParams(window.location.search);
    const currentFilter = urlParams.get('c');

    // Function to set the active class based on the URL parameter
    function setActive(currentFilter) {
        listItems.forEach(li => {
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
    listItems.forEach(li => {
        li.addEventListener('click', () => {
            const filterValue = li.dataset.filter;
            if (filterValue === '*') {
                urlParams.delete('c');
            } else {
                urlParams.set('c', filterValue);
            }
            window.location.href = `?${urlParams.toString()}`;
        });
    });
}

export const search = (dom) => { 
    const _input = dom.querySelector('input');
    const _btn = dom.querySelector('button');
    const urlParams = new URLSearchParams(window.location.search);
    const currentSearch = urlParams.get('q');
    //Input Value
    if(currentSearch) _input.value = currentSearch;
    //Btn Click
    _btn.addEventListener('click', () => {
        urlParams.delete('c');
        if (_input.value) {
            urlParams.set('q', _input.value);
        } else { 
            urlParams.delete('q');
        }
        window.location.href = `?${urlParams.toString()}`;
    })
};
