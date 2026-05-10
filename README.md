# Frames.io — Portfolio

A multidisciplinary creative portfolio built with React + Vite.

## Stack

- **React 18** — UI
- **Vite 5** — Dev server & bundler
- No CSS framework — all styles are injected via `GlobalStyles.jsx` using CSS variables for theming

## Project Structure

```
frames-portfolio/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx              # Entry point
    ├── App.jsx               # Root component (theme state, layout)
    ├── utils.js              # scrollTo, zeroPad
    ├── data/
    │   └── index.js          # All static content (projects, tools, services, …)
    ├── hooks/
    │   └── index.js          # useVisible, useCountUp, useScrolled
    ├── icons/
    │   └── index.jsx         # SVG icon registry + <Icon> component
    ├── styles/
    │   └── GlobalStyles.jsx  # Theme tokens + injected global CSS
    └── components/
        ├── index.js          # Barrel export
        ├── FontLoader.jsx
        ├── Cursor.jsx
        ├── Nav.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Projects.jsx
        ├── Tools.jsx
        ├── Services.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build   # outputs to dist/
npm run preview # serve the production build locally
```

## Customisation

| What                  | Where                          |
|-----------------------|--------------------------------|
| Portfolio content     | `src/data/index.js`            |
| Colour scheme / theme | `src/styles/GlobalStyles.jsx`  |
| Icons                 | `src/icons/index.jsx`          |
| Section components    | `src/components/<Section>.jsx` |
