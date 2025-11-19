const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const yearEl = document.getElementById('year');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
