const menu = document.getElementById('sideMenu');
const toggleBtn = document.getElementById('menuToggle');
const closeBtn = document.getElementById('closeMenu');

function setMenuOpen(isOpen) {
  menu.classList.toggle('is-open', isOpen);
  toggleBtn.setAttribute('aria-expanded', String(isOpen));
}

toggleBtn.addEventListener('click', () => {
  const isOpen = !menu.classList.contains('is-open');
  setMenuOpen(isOpen);
});

closeBtn.addEventListener('click', () => setMenuOpen(false));
