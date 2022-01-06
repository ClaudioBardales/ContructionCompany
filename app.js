/* Navigation Functionality */
const toggleButton = document.querySelector('.toggle-button');
const nav = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', () => {
  nav.classList.toggle('active');
});

/* Live Date */
const date = document.getElementById('date');

date.innerHTML = new Date().getFullYear();

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: 'en',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    },
    'google_translate_element'
  );
}
