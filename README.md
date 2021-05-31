# All-Dev

Web app to edit, save and share code made in Alura Challenge event.
The goal was to improve my skills in front-end development.

## How to run

This project was initially created using only html, css and js. Then, it was refactored to use NextJs with Styled Components `npx create-next-app --example with-styled-components`.

You'll need to have NodeJs installed in your machine.

`npm run dev` -> starts a development server locally in your machine at `localhost:3000`

`npm run build` -> builds a bundle to deploy the application on a server

`npm start` -> runs the application in production mode. It requires to be built previously

## Notes

Currently, the application is saving data locally with IndexedDB. It's using the library [Dexie](https://dexie.org/) to manage the `window` API.

The syntax highlighting is managed by [highlight.js](https://highlightjs.org/). The library is installed via npm and the css for the highlight style is imported from the package too at `pages/_app.js`.

## Environment

This application is deployed with [Vercel](https://vercel.com/) at [this address](https://all-dev.vercel.app/).
