const navMenu = document.querySelector('.sideMenu');
const hamburger = document.querySelector('#menuToggle');
const navLinks = document.querySelectorAll('.sideMenu a');
const overlay = document.querySelector('.menu-overlay');
const searchInput = document.querySelector('#wikiSearch');
const menuItems = document.querySelectorAll('.sideMenu li:not(.menu-category)');

function toggleMenu(forceState) {
  const isOpen = typeof forceState === 'boolean' 
    ? forceState 
    : !navMenu.classList.contains('is-open');

  hamburger.classList.toggle('is-active', isOpen);
  navMenu.classList.toggle('is-open', isOpen);
  if (overlay) overlay.classList.toggle('is-open', isOpen);
  
  hamburger.setAttribute('aria-expanded', isOpen);
  hamburger.setAttribute('aria-label', isOpen ? 'Menü schließen' : 'Menü öffnen');
}

hamburger.addEventListener('click', () => toggleMenu());

if (overlay) {
  overlay.addEventListener('click', () => toggleMenu(false));
}

navLinks.forEach(link => {
  link.addEventListener('click', () => toggleMenu(false));
});

// Live-Filterung der Menü-Einträge über die Suchleiste
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    if (query.length > 0 && !navMenu.classList.contains('is-open')) {
      toggleMenu(true);
    }

    menuItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(query) ? 'block' : 'none';
    });
  });
}
