<h1 align="center">Welcome to "Videogames Ecommerce App" 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/Alais29/react-native-app-lizardo#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> A videogames shop ecommerce built with React Native.

### 🏠 [Homepage](https://github.com/Alais29/react-native-app-lizardo#readme)

## Features
- App built with React Native using expo
- Light and Dark theme implemented with React Native Paper
- State management with Redux toolkit
- Stack and bottom navigation with React Navigation
- Camera and device location integration using google maps
- Integration with firebase: Authentication with email and password; profile image is uploaded to firebase storage; products, categories and orders are saved on firebase realtime database.
- News gotten from News API
- Integration with sqlite for saving user addresses
- Signup and Login form made with formik and Yup validation

## Install

```sh
yarn install
```

## Usage

Create an .env file with all the necessary variables (use .env.example file as an example), you'll need to create a project on firebase, a google maps api key and a News API key (https://newsapi.org).

Also, on firebase Realtime Database you need to import a json that includes products and categories, you can import the one on data/RTDB.json which is the data I used.

With that done you can run:

```sh
yarn run start
```

Once running, type "a" to run on Android Studio emulator or "w" to run on web (although the styles look terrible on web, not recommended).

## Resources
* Design inspiration: [Game Store App Light & Dark Design](https://dribbble.com/shots/17991468-Game-Store-App-Light-Dark-Design)
* App icon: [Gaming icons created by mynamepong - Flaticon](https://www.flaticon.com/free-icons/gaming)
* Fonts: [Google Fonts](https://fonts.google.com/)
* Products information: [RAWG](https://rawg.io/)

## Author

👤 **Alfonsina Lizardo**

* Website: https://alfonsinalizardo.netlify.app
* Github: [@Alais29](https://github.com/Alais29)
* LinkedIn: [@alfonsinalizardo](https://linkedin.com/in/alfonsinalizardo)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [Alfonsina Lizardo](https://github.com/Alais29).<br />
This project is [ISC](https://opensource.org/licenses/ISC) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_