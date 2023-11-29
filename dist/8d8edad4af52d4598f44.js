document.addEventListener('DOMContentLoaded', function () {
  var showMoreButton = document.querySelector('.news__more');
  var newsItems = document.querySelectorAll('.news__item');
  var itemsPerPage = 4;
  var visibleItemCount = itemsPerPage;
  function showMoreItems() {
    for (var i = 0; i < newsItems.length; i++) {
      if (i < visibleItemCount) {
        newsItems[i].style.display = 'flex';
      } else {
        newsItems[i].style.display = 'none';
      }
    }
    visibleItemCount += itemsPerPage;
  }
  showMoreItems();
  showMoreButton.addEventListener('click', function (event) {
    event.preventDefault();
    showMoreItems();
  });
});