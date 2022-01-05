/* Navigation Functionality */
const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

/* Live Date */
const date = document.getElementById('date');

date.innerHTML = new Date().getFullYear();
