/* Navigation Functionality */
const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', () => {
  console.log(navbarLinks.classList.toggle('active'));
});

/* Live Date */
const date = document.getElementById('date');

date.innerHTML = new Date().getFullYear();
