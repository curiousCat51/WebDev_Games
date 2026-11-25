/**
 * Portal Wiki – Übersetzungen
 * Enthält die zentralen UI- und Überschriften-Texte.
 * Artikeltexte können später hier schrittweise ergänzt werden.
 */
(() => {
  const english = {
  "Aperture Science Eignungstest – Portal Wiki": "Aperture Science Aptitude Test – Portal Wiki",
  "Aperture Science Wissenstest": "Aperture Science Knowledge Test",
  "Testergebnis": "Test Results",
  "PROJEKT-BELOHNUNG FREIGESCHALTET": "PROJECT REWARD UNLOCKED",
  "Hier erscheint die Frage...": "Your question will appear here...",
  "Willkommen im Aperture Science Wiki": "Welcome to the Aperture Science Wiki",
  "Die Spiele-Reihe": "The Games",
  "Charaktere & KIs": "Characters & AIs",
  "Test-Elemente & Geräte": "Test Elements & Equipment",
  "Bist du bereit für die Testkammern?": "Are You Ready for the Test Chambers?",
  "Überblick": "Overview",
  "Aussehen & Ausrüstung": "Appearance & Equipment",
  "Persönlichkeit & Hintergründe": "Personality & Background",
  "Herkunft & Trivia": "Origins & Trivia",
  "Geschichte bei Aperture Science": "History at Aperture Science",
  "Verbindung zu GLaDOS": "Connection to GLaDOS",
  "Geschichte & Entstehung": "History & Creation",
  "Rolle in Portal & Portal 2": "Role in Portal & Portal 2",
  "Persönlichkeit & Funktion": "Personality & Function",
  "Entstehungsgeschichte & Meme": "Origin Story & Meme",
  "Auftritte in Portal 2 & Comics": "Appearances in Portal 2 & Comics",
  "Hintergrund & Trivia": "Background & Trivia",
  "Geschichte & Werdegang": "History & Career",
  "Krankheit & Vermächtnis": "Illness & Legacy",
  "Ursprünglicher Zweck": "Original Purpose",
  "Rolle in Portal 2": "Role in Portal 2",
  "Eigenschaften & Mechanik": "Properties & Mechanics",
  "Ablösung in Portal 2": "Replacement in Portal 2",
  "Funktionen & Auswirkungen": "Functions & Effects",
  "Trivia & Nebenwirkungen": "Trivia & Side Effects",
  "Funktionen & Fähigkeiten": "Functions & Capabilities",
  "Entwicklungsgeschichte": "Development History",
  "Sicherheitswarnungen & Trivia": "Safety Warnings & Trivia",
  "Portals (Quantentunnel-Portale)": "Portals (Quantum Tunnels)",
  "Physik & Impulserhaltung („Flinging“)": "Physics & Conservation of Momentum (“Flinging”)",
  "Oberflächen & Einschränkungen": "Surfaces & Limitations",
  "Portal-Farben": "Portal Colors",
  "Cubes (Testkuben)": "Cubes (Test Cubes)",
  "Die wichtigsten Kubus-Typen": "Main Cube Types",
  "Spezial- & Community-Kuben": "Special & Community Cubes",
  "Turrets (Aperture-Geschütztürme)": "Turrets (Aperture Sentry Turrets)",
  "Verhalten & Schwachstellen": "Behavior & Weaknesses",
  "Die verschiedenen Turret-Varianten": "Turret Variants",
  "Die drei Haupt-Gele": "The Three Main Gels",
  "Verworfene Gele & Trivia": "Cut Gels & Trivia",
  "Test Chambers (Testkammern)": "Test Chambers",
  "Aufbau & Typische Elemente": "Layout & Typical Elements",
  "Die drei historischen Epochen (Portal 2)": "The Three Historical Eras (Portal 2)",
  "Perpetual Testing Initiative (Community-Kammern)": "Perpetual Testing Initiative (Community Chambers)",
  "Game Modes (Spielmodi)": "Game Modes",
  "1. Einzelspieler-Kampagne (Singleplayer)": "1. Single-Player Campaign",
  "2. Koop-Modus (Cooperative Testing Initiative)": "2. Co-op Mode (Cooperative Testing Initiative)",
  "3. Challenge Mode (Herausforderungsmodus)": "3. Challenge Mode",
  "4. Bonus Maps (Advanced Chambers)": "4. Bonus Maps (Advanced Chambers)",
  "5. Perpetual Testing Initiative (Community-Kammern)": "5. Perpetual Testing Initiative (Community Chambers)",
  "Handlung (Einzelspieler)": "Story (Single Player)",
  "Handlung": "Story",
  "Neuerungen & Spielmechaniken": "New Features & Game Mechanics",
  "Koop-Modus & Community-Editor": "Co-op Mode & Community Editor",
  "Spielprinzip & Entwicklung": "Gameplay & Development",
  "Kultstatus & Abspann": "Cult Status & Ending",
  "Startseite": "Home",
  "Bezeichnung des Testsubjekts (für die Bestenliste):": "Test subject designation (for the leaderboard):",
  "Testkammer betreten →": "Enter Test Chamber →",
  "Frage 1 von 15": "Question 1 of 15",
  "Punkte: 0": "Score: 0",
  "Nächste Frage →": "Next Question →",
  "Test wiederholen ↻": "Retake Test ↻",
  "Zur Bestenliste auf der Startseite →": "View the leaderboard on the home page →",
  "Der Kuchen ist KEINE Lüge!": "The cake is NOT a lie!",
  "Willkommen im automatisierten Bewertungszentrum. Beantworte": "Welcome to the automated evaluation center. Answer",
  "Fragen zu den Testkammern, Charakteren und Technologien von Aperture Science.": "questions about Aperture Science test chambers, characters, and technology."
};
  const applyLanguage = () => {
    const lang = localStorage.getItem('portalWikiLanguage') || 'de';
    document.documentElement.lang = lang;
    if (lang !== 'en') return;
    document.title = english[document.title] || document.title;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      const original = node.nodeValue;
      const trimmed = original.trim();
      if (!trimmed || !english[trimmed]) return;
      node.nodeValue = original.replace(trimmed, english[trimmed]);
    });
    document.querySelectorAll('[placeholder]').forEach(element => {
      if (english[element.placeholder]) element.placeholder = english[element.placeholder];
    });
    document.querySelectorAll('[aria-label]').forEach(element => {
      if (english[element.getAttribute('aria-label')]) {
        element.setAttribute('aria-label', english[element.getAttribute('aria-label')]);
      }
    });
  };
  window.PortalWikiI18n = { applyLanguage };
  document.addEventListener('DOMContentLoaded', applyLanguage);
})();
