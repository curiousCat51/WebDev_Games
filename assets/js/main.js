/**
 * Portal Wiki – zentrale Website-Steuerung
 * Erstellt Header/Footer, Navigation, Suche und Sprachumschaltung.
 */
document.addEventListener('DOMContentLoaded', () => {
  const path = decodeURIComponent(window.location.pathname);
  const inPageFolder = path.includes('/pages/');
  const root = inPageFolder ? '../../' : '';
  const language = localStorage.getItem('portalWikiLanguage') || 'de';

  const navigation = [
    { category: { de: 'Spiele', en: 'Games' }, links: [
      ['Portal', 'pages/games/portal.html'], ['Portal 2', 'pages/games/portal-2.html']
    ]},
    { category: { de: 'Charaktere', en: 'Characters' }, links: [
      ['Chell', 'pages/characters/chell.html'], ['GLaDOS', 'pages/characters/glados.html'],
      ['Cave Johnson', 'pages/characters/cave-johnson.html'], ['Wheatley', 'pages/characters/wheatley.html'],
      ['ATLAS', 'pages/characters/atlas.html'], ['P-body', 'pages/characters/p-body.html'],
      ['Caroline', 'pages/characters/caroline.html'], ['Hoopy the Hoop', 'pages/characters/hoopy-the-hoop.html']
    ]},
    { category: { de: 'Spielmechaniken', en: 'Game mechanics' }, links: [
      ['Test Chambers', 'pages/mechanics/test-chambers.html'], ['Cubes', 'pages/mechanics/cubes.html'],
      ['Turrets', 'pages/mechanics/turrets.html'], ['Handheld Portal Device', 'pages/mechanics/handheld-portal-device.html'],
      ['Material Emancipation Grill', 'pages/mechanics/material-emancipation-grill.html'],
      ['High Energy Pellet', 'pages/mechanics/high-energy-pellet.html'], ['Gels', 'pages/mechanics/gels.html'],
      ['Portals', 'pages/mechanics/portals.html']
    ]},
    { category: { de: 'Spielmodi', en: 'Game modes' }, links: [['Game Modes', 'pages/game-modes/game-modes.html']]},
    { category: { de: 'Weitere Inhalte', en: 'More' }, links: [['Quiz', 'quiz.html']]}
  ];

  const header = `
    <header>
      <div class="navbar">
        <div class="nav-left">
          <button id="menuToggle" aria-label="${language === 'de' ? 'Menü öffnen' : 'Open menu'}" aria-expanded="false" aria-controls="sideMenu">
            <span class="line"></span><span class="line"></span><span class="line"></span>
          </button>
          <a href="${root}index.html" class="logo" aria-label="Portal Wiki home">
            <img src="${root}assets/images/portal-logo.png" alt="Portal Wiki Logo">
          </a>
        </div>
        <div class="header-tools">
          <div class="search-box">
            <input type="search" id="wikiSearch" placeholder="${language === 'de' ? 'Wiki durchsuchen...' : 'Search the wiki...'}" aria-label="${language === 'de' ? 'Wiki durchsuchen' : 'Search the wiki'}">
            <button type="button" id="searchBtn" aria-label="${language === 'de' ? 'Suchen' : 'Search'}">🔍</button>
          </div>
          <label class="language-control" for="languageSelect">
            <span aria-hidden="true">🌐</span>
            <select id="languageSelect" aria-label="${language === 'de' ? 'Sprache auswählen' : 'Select language'}">
              <option value="de" ${language === 'de' ? 'selected' : ''}>DE</option>
              <option value="en" ${language === 'en' ? 'selected' : ''}>EN</option>
            </select>
          </label>
        </div>
        <nav id="sideMenu" class="sideMenu"><ul>
          ${navigation.map(group => `<li class="menu-category">${group.category[language]}</li>` +
            group.links.map(([label, href]) => `<li><a href="${root}${href}">${label}</a></li>`).join('')).join('')}
        </ul></nav>
        <div class="menu-overlay"></div>
      </div>
    </header>`;
  const footer = `<footer class="wiki-footer"><p>${language === 'de' ? 'Aperture Science Computer-Aided Enrichment Center // Fan-Wiki-Projekt' : 'Aperture Science Computer-Aided Enrichment Center // Fan wiki project'}</p></footer>`;

  const headerSlot = document.getElementById('header-placeholder');
  const footerSlot = document.getElementById('footer-placeholder');
  if (headerSlot) headerSlot.innerHTML = header;
  if (footerSlot) footerSlot.innerHTML = footer;

  const languageSelect = document.getElementById('languageSelect');
  languageSelect?.addEventListener('change', event => {
    localStorage.setItem('portalWikiLanguage', event.target.value);
    window.location.reload();
  });

  const menu = document.getElementById('sideMenu');
  const toggle = document.getElementById('menuToggle');
  const overlay = document.querySelector('.menu-overlay');
  const closeMenu = () => {
    menu?.classList.remove('is-open');
    toggle?.classList.remove('is-active');
    overlay?.classList.remove('is-open');
    toggle?.setAttribute('aria-expanded', 'false');
  };
  toggle?.addEventListener('click', () => {
    const open = !menu.classList.contains('is-open');
    menu.classList.toggle('is-open', open);
    toggle.classList.toggle('is-active', open);
    overlay?.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });
  overlay?.addEventListener('click', closeMenu);
  menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

  const currentFile = path.split('/').pop();
  menu?.querySelectorAll('a').forEach(link => {
    if (link.getAttribute('href').split('/').pop() === currentFile) link.classList.add('active-page');
  });
  const search = document.getElementById('wikiSearch');
  search?.addEventListener('input', () => {
    const query = search.value.toLocaleLowerCase();
    menu?.querySelectorAll('li:not(.menu-category)').forEach(item => {
      item.hidden = !item.textContent.toLocaleLowerCase().includes(query);
    });
    if (query && menu && !menu.classList.contains('is-open')) toggle?.click();
  });
});

/* Quiz-Bestenliste, Fun-Facts und visuelle Portal-Effekte. */
const leaderboardBody = document.getElementById('leaderboard-body');
const clearLeaderboardBtn = document.getElementById('clearLeaderboardBtn');
const STORAGE_KEY = 'portalWikiLeaderboard';

function renderLeaderboard() {
  if (!leaderboardBody) return;

  const scores = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  if (scores.length === 0) {
    leaderboardBody.innerHTML = `
      <tr>
        <td colspan="4" class="empty-board">Noch keine Testergebnisse vorhanden. Starte das Quiz!</td>
      </tr>
    `;
    return;
    }

    leaderboardBody.innerHTML = scores.map((entry, index) => `
      <tr>
        <td>#${index + 1}</td>
        <td>${entry.name}</td>
        <td><strong>${entry.score}</strong> / ${entry.total}</td>
        <td>${entry.date}</td>
      </tr>
    `).join('');
  }

  if (leaderboardBody) {
    renderLeaderboard();
  }

  if (clearLeaderboardBtn) {
    clearLeaderboardBtn.addEventListener('click', () => {
      localStorage.removeItem(STORAGE_KEY);
      renderLeaderboard();
    });
  }

    // 6. Aperture Science Fun-Facts auf der Startseite
  const funFactText = document.getElementById('funFactText');
  const nextFactBtn = document.getElementById('nextFactBtn');

  const portalFunFacts = [
    "Die Idee für Portal entstand aus dem Studentenprojekt 'Narbacular Drop' (2005). Valve war so begeistert, dass sie das gesamte Studententeam sofort einstellten.",
    "Der berühmte Kuchen am Ende von Portal ist eine echte Schwarzwälder Kirschtorte – inspiriert von einer echten Bäckerei in Redmond nahe dem Valve-Hauptquartier.",
    "Alle Geschütztürme (Turrets) sowie GLaDOS und die Turret-Oper werden im Englischen von derselben Person gesprochen: der ausgebildeten Opernsängerin Ellen McLain.",
    "Ursprünglich sollte Portal 2 ein Prequel aus den 1950er-Jahren ganz ohne Portale werden ('F-Stop'). Die Mechanik gefiel den Testern aber ohne Portale nicht – so entstand die heutige Story.",
    "Chell sagt in beiden Spielen kein einziges Wort. Laut den Entwicklern nicht, weil sie stumm ist, sondern aus purer Sturheit, um GLaDOS nicht den Triumph einer Antwort zu gönnen.",
    "Wenn man in Portal 2 zu lange in den Abspann-Credits oder in manchen Kammern verweilt, kann man im Hintergrund das leise Kratzen und Flüstern des geflüchteten Wissenschaftlers Doug Rattmann hören.",
    "Für den Koop-Modus waren ursprünglich zwei Menschen (Chell und Mel) geplant. Weil Testspieler aber ständig starben, erfand Valve die unsterblichen Roboter ATLAS und P-body.",
    "In Portal 2 wurde ein grünes 'Adhesion Gel' (Haftungs-Gel) getestet, mit dem man an Decken laufen konnte – es wurde entfernt, weil Testspielern davon schwindelig wurde."
  ];

  let currentFactIndex = Math.floor(Math.random() * portalFunFacts.length);

  function showNextFact() {
    if (!funFactText) return;
    funFactText.textContent = `„${portalFunFacts[currentFactIndex]}“`;
    currentFactIndex = (currentFactIndex + 1) % portalFunFacts.length;
  }

  if (funFactText) {
    showNextFact();
  }

  if (nextFactBtn) {
    nextFactBtn.addEventListener('click', showNextFact);
  }

    // 7. Interaktiver Portal-Effekt bei jedem Mausklick (Blau / Orange im Wechsel)
  let nextPortalIsBlue = true;

  document.addEventListener('click', (e) => {
    const portal = document.createElement('span');
    portal.className = `click-portal ${nextPortalIsBlue ? 'blue' : 'orange'}`;
    portal.style.left = `${e.clientX}px`;
    portal.style.top = `${e.clientY}px`;

    document.body.appendChild(portal);

    // Farbe für den nächsten Klick wechseln
    nextPortalIsBlue = !nextPortalIsBlue;

    // Element nach Ablauf der Animation wieder sauber entfernen
    setTimeout(() => {
      portal.remove();
    }, 600);
  });

    // 8. Custom Portal-Fadenkreuz-Cursor (funktioniert in Firefox & allen Browsern)
  const customCursor = document.createElement('div');
  customCursor.className = 'portal-cursor';
  customCursor.innerHTML = '<span class="cursor-dot"></span>';
  document.body.appendChild(customCursor);

  document.addEventListener('mousemove', (e) => {
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
  });

  // Hover-Effekt bei klickbaren Elementen
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest('a, button, input, label, .quick-tile')) {
      customCursor.classList.add('is-hovering');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest('a, button, input, label, .quick-tile')) {
      customCursor.classList.remove('is-hovering');
    }
  });

  // Cursor ausblenden, wenn die Maus das Browserfenster verlässt
  document.addEventListener('mouseleave', () => {
    customCursor.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    customCursor.style.opacity = '1';
  });

