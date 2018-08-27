This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### GNOMEGAME

Basic instructions:

- Please clone this repository
- Install with `npm install`

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  .gitignore
  package-lock.json
  yarn.lock
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
    manifest.json
  src/
    APi/
      BrastlewarkAPI.js
      __mocks__/
        BrastlewarkAPI.js
    components/
      Header.js
      Overlay.js
      Gnomes.js
      Friends.js
      __tests__/
        Header.js
        Overlay.js
        Gnomes.js
        Friends.js
    css/
      Assets/
        gnomehead.png
        hat-gnome.png
        nofriends.png
        orc.png
      Gnomes.css
      Header.css
      Overlay.css
      Slider.css
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
    registerServiceWorker.js
    setupTests.js
```

The `App.js` component is designed as a container that manages the state for child components and makes the Api calls.

The interaction with the API is managed by the `Api.js` helper file. Api calls are handled with promises and async/await features from es6/es7 js.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `npm test`

Launches the test runner in the interactive watch mode.<br>
Basic tests are performed for all components. `enzyme` and `jest`.

For all compoenents shallow rendering and mounting tests are performed. For `App.js` component deeper testing is performed regarding error handling and API interaction.

### Libraries

The only npm library used is `rc-slider` [https://www.npmjs.com/package/rc-slider](https://www.npmjs.com/package/rc-slider) for easier integration of advanced filtering of numeric quantities.

### Usage

On the header the user will find several filtering options for the data. The user may filter searching the name, moving the sliders for filtering by age, weight and height. Finally there is a clickable list of hair colors and professions. The filters are designed to work in conjunction to render the elements that contain all the parameteres filtered.

made by: Simon Garmendia