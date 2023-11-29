const showBurger = document.getElementById('burger');
const closeBurger = document.getElementById('closeburger');

showBurger.addEventListener('click', function(event){
    const sidebar = document.querySelector('.nav__sidebar');
    event.preventDefault();
    sidebar.style.display = 'flex';
});

closeBurger.addEventListener('click', function(event){
    const sidebar = document.querySelector('.nav__sidebar');
    event.preventDefault();
    sidebar.style.display = 'none';
});