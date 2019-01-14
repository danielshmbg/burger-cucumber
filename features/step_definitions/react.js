const { register } = require('react-cucumber');
// require your components here, for example:
// assuming your build process drops your complied JS into dist/
// const { UpperCaseInput } = require('../../dist/upper-case-input');
const {UpperCaseInput} = require('../../build/static/js/main.676ba198');
// ...
 
register([
    UpperCaseInput
  // ... more components here
]);