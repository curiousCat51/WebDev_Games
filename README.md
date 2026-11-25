# Portal Wiki – WebDev Games

A static, responsive fan wiki about Portal and Portal 2.

## Start

Open `index.html` in a modern browser. No build step or server is required.
For local development, a simple static HTTP server is recommended.

## Languages

Use the `DE / EN` selector in the header to switch the interface language.
The selection is stored in `localStorage` (`portalWikiLanguage`) and remains
active while navigating between pages.

The language infrastructure is centralized in `assets/js/translations.js`.
Navigation labels and page titles/section headings are localized there.
The existing article body copy is currently authored in German; add its
English equivalents to the same translation dictionary to complete article
localization.

## Project structure

```text
WebDev_Games/
├── index.html                  # Home page and leaderboard
├── quiz.html                   # Interactive Aperture knowledge quiz
├── pages/
│   ├── characters/             # Character profiles
│   ├── games/                  # Portal game pages
│   ├── mechanics/              # Gameplay mechanics and equipment
│   └── game-modes/             # Game modes
├── assets/
│   ├── css/main.css            # Shared responsive design
│   ├── js/
│   │   ├── main.js             # Shared header, navigation, search, effects
│   │   ├── quiz.js             # Quiz logic
│   │   └── translations.js     # Central language dictionary
│   └── images/                 # Wiki images and icons
├── LICENSE
└── README.md
```

## Conventions

- File and folder names use lowercase kebab-case.
- Images are stored in `assets/images/`.
- Shared styling and scripts are stored in `assets/css/` and `assets/js/`.
- Important shared behavior is documented directly in the relevant source files.
- Keep navigation links in `assets/js/main.js` in sync when adding pages.

## Notes

The old `.git` repository metadata and the unused `tutorial.py` scratch file
were removed from this distributable project archive.
