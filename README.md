# React Atomic Seed

A boilerplate for building React apps based on create-react-app using atomic components architecture.

## What you get
* create-react-app ([link](https://github.com/facebook/create-react-app#whats-included))
* atomic components architecture ([atomic design](http://bradfrost.com/blog/post/atomic-web-design/))
* normalize.css ([link](https://github.com/necolas/normalize.css))

## Folder Structure
After checkout, your project should look like this:

```
my-app/
  README.md
  package.json
  public/
    index.html
    favicon.ico
  src/
    app/
      components/
      utils/
      App.css
      App.js
      App.test.js
      logo.svg
    index.css
    index.js
```
## Getting started
### Installing with git

```bash
git clone --depth=1 https://github.com/sdqwerty/react-atomic-seed my-app
```

## npm scripts

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `yarn atom`
Generates an atom, the smallest possible component.

### `yarn molecule` 
Generates a molecule component.<br>
Molecules are groups of atoms bonded together and are the smallest fundamental units of a compound.

### `yarn organism`
Generates an organism component.<br>
Organisms are groups of molecules joined together to form a relatively complex, distinct section of an interface.

### `yarn page`
Generates an page component.<br>
Pages consist mostly of groups of organisms stitched together to form pages.<br>



## Credits

This project is based on create-react-app from https://github.com/facebook/create-react-app.
