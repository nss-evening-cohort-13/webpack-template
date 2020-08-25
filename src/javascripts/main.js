import '../styles/main.scss';

const $ = require('jquery');

const init = () => {
  $('#app').html('<h1>HELLO! You are up and running!</h1>');
  console.log('YOU ARE UP AND RUNNING!');
};

init();
