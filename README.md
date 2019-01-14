Implementing React Cucumber in Burger React Application
==========

A simple Redux React Application based on react-redux-burger application.
This Project is made to implement react-cucumber component and run test with cucumber.

## Running locally

### To start the application

```
npm install
npm start
open http://localhost:3000
```

### To run the cucumber test:
```
npm run build
npm run bdd
```

Currently there are error in implementation because react-cucumber component (https://www.npmjs.com/package/react-cucumber).

React-Cucumber need every component have their own compiled .js files. Meanwhile the react (npm run build) build their distribution file in a main*.js file.

features/step_definitions/react.js
```
const { register } = require('react-cucumber');
 
// assuming your build process drops your complied JS into dist/
const { UpperCaseInput } = require('../../dist/upper-case-input');
 
register([
  UpperCaseInput
  // ... more components here
]);
```
