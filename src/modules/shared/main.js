document.addEventListener('DOMContentLoaded', function() {

  console.log('main.js loaded');
  fetch('../header/header.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('header').innerHTML = data;
    });
});