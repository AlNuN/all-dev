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

To export code as images and text in different file formats it uses [Dom to image](https://github.com/tsayen/dom-to-image) and [File Saver](https://github.com/eligrey/FileSaver.js/) libraries.

## App usage

### Code editor

At 'Editor de código' page, the root page, the main element is where you put your code that you want to save and share.

With the menu at the right of this field you can set the title of this project, its description, language (only js, css and html for now) and the border color.

Right below the code editor there is a button where you can show the code with highlight.
After pressing that button it changes its state and show the option to export your code as a image (png, svg or jpg) or text (with proper extension).

### Projects

In 'Comunidade' page you can see all your saved projects.
While this is only a front-end project, the code is only saved locally in your machine and the social buttons are not yet functional.

You'll be sent to this page when you use the search functionality.

By clicking in a project card code you'll be sent to the main page to edit the selected project.

## Environment

This application is deployed with [Vercel](https://vercel.com/) at [this address](https://all-dev.vercel.app/).
