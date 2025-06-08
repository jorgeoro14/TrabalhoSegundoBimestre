let hamburger = document.getElementById('hamburger');
let sidebar = document.getElementById('menuLateral');

hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});