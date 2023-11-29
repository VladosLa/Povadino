document.addEventListener('DOMContentLoaded', function() {
    const showMoreButton = document.querySelector('.news__more');
    const newsItems = document.querySelectorAll('.news__item');
    const itemsPerPage = 4; 
    let visibleItemCount = itemsPerPage;

    function showMoreItems() {
        for (let i = 0; i < newsItems.length; i++) {
            if (i < visibleItemCount) {
                newsItems[i].style.display = 'flex'; 
            } else {
                newsItems[i].style.display = 'none'; 
            }
        }
        visibleItemCount += itemsPerPage; 
    }

    showMoreItems();

    showMoreButton.addEventListener('click', function(event) {
        event.preventDefault();
        showMoreItems();
    });
});
