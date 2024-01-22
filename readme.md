# Re:paint

Re:paint is a color perception and reflex game. The code for re:paint is not public, but I've created this repo to showcase the game itself and provide an overview of its development. 

[Play it Here](https://jhavrick.github.io/repaint/)

## Overview

Re:paint was created specifically to target mobile devices, packaged using [Capacitor](https://capacitorjs.com/) (a Cordova fork by the Ionic team). Here is a rundown of the tech used:


 - Vue 3 / TypeScript - The game is largely written in Vue, using TypeScript.

 - [chroma.js](https://gka.github.io/chroma.js/) - Chroma.js was used heavily to generate color schemes and evaluate the player's color proximity correctness. Useful for generating colors in close or distant proximity to other colors.

 - [phaser](https://github.com/phaserjs/phaser) - I had originally planned to write each mini-game using phaser, a canvas-based HTML game engine. Most ended up pure Vue, except for one. The UI is, however, overlayed on a phaser canvas which provides background visuals in the menus via GLSL shader.

 - [@vueuse/motion](https://motion.vueuse.org/) - This library was used to create the fairly complex transitions seen in game.

  - [Firebase](https://firebase.google.com/) - Online leaderboards and anonymous user registration were created using Firebase Firestore. Requests are first processed and validated through [Cloud Functions](https://firebase.google.com/docs/functions).  


  - [Capacitor](https://capacitorjs.com/) - Native mobile runtime, really the only good way to package a web app for mobile. This game has been packaged for iOS and Android (though not yet published to either store).

 - [AdMob](https://admob.google.com/home/) - Though not visible in the web demo, this app runs mobile ads for monetization.

