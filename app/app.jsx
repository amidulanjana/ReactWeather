var React = require('react');
var ReactDOM = require('react-dom');

var obj1 = {
  name : 'amila'
};

var obj2 = {
  age : 20,
  ...obj1
};

console.log(obj2);

ReactDOM.render(
    <h1>React Boilerplate</h1>,
    document.getElementById('app')
);
