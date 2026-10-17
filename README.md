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

## WhatsApp Notifications

Every website request (contact form, appointment booking, job application) is
also pushed to the business WhatsApp number `+49 155 65666559` through the
Netlify Function `netlify/functions/whatsapp.mjs` (WhatsApp Business Cloud API).

Set these environment variables in the Netlify dashboard
(**Site configuration → Environment variables**):

| Variable | Required | Description |
| --- | --- | --- |
| `WHATSAPP_TOKEN` | yes | Permanent Meta access token with `whatsapp_business_messaging` permission |
| `WHATSAPP_PHONE_NUMBER_ID` | yes | Phone number ID from the Meta WhatsApp Business account |
| `WHATSAPP_NOTIFY_NUMBER` | no | Recipient in international format (defaults to `4915565666559`) |
| `WHATSAPP_TEMPLATE_NAME` | no | Approved template used when free-form text is rejected |
| `WHATSAPP_TEMPLATE_LANGUAGE` | no | Template language code (defaults to `de`) |

Notes:

- Free-form messages only reach users who messaged the business number in the
  last 24 hours. For notifications that must always be delivered, create an
  approved template named `WHATSAPP_TEMPLATE_NAME` with a single `{{1}}` body
  placeholder containing the request text.
- Sending from the Cloud API number to that same number is not possible. Use a
  separate WhatsApp Business API number as sender and keep `+4915565666559` as
  the recipient.
- Until the tokens are configured the function answers `503` and the forms show
  a "Send via WhatsApp" link so requests are never lost.

## Deployment

```bash
firebase login
firebase init hosting  # link to your project
npm run build
firebase deploy
```

## License

© 2025 Alltagshelfer Plus Herz
