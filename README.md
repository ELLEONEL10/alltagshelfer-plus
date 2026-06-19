# Alltagshelfer Plus Herz

Modern website for daily assistance services in Potsdam, Germany.

Built with **React + Vite + Tailwind CSS + Firebase**.

## Stack

- **Frontend:** React 19, React Router, Tailwind CSS, i18next (DE/EN)
- **Backend:** Firebase Auth (Google login), Firestore (appointments)
- **Build:** Vite

## Quick Start

```bash
npm install
npm run dev      # dev server → http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview production build
```

## Languages

- German (DE) — default
- English (EN)

## Firebase Setup

Set your real Firebase credentials in `src/firebase/config.js`:

```js
apiKey: "YOUR_API_KEY",
authDomain: "YOUR_PROJECT.firebaseapp.com",
projectId: "YOUR_PROJECT",
storageBucket: "YOUR_PROJECT.appspot.com",
messagingSenderId: "YOUR_SENDER_ID",
appId: "YOUR_APP_ID"
```

Enable **Authentication → Google** and **Firestore Database** in the Firebase Console.

## Deployment

```bash
firebase login
firebase init hosting  # link to your project
npm run build
firebase deploy
```

## License

© 2025 Alltagshelfer Plus Herz
