document.addEventListener("DOMContentLoaded", function() {
    let flipBtns = document.querySelectorAll('.vehicle__flip-btn');
    let closeBtns = document.querySelectorAll('.close-btn');
    let flipContainers = document.querySelectorAll('.flip');
  
    flipBtns.forEach(function(btn, index) {
      btn.addEventListener('click', function() {
        flipContainers[index].classList.toggle('flipped');
      });
    });
  
    closeBtns.forEach(function(btn, index) {
      btn.addEventListener('click', function() {
        flipContainers[index].classList.remove('flipped');
      });
    });
});

  
  