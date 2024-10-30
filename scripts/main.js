document.addEventListener("DOMContentLoaded", function () {
  fetch("./header/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("header").innerHTML = data;

      const menuBurger = document.getElementById("burger-icon");

      if(menuBurger) {
        menuBurger.addEventListener("click", function () {
          document.getElementById("header__box").classList.toggle("header__box-active");
        });
      }
    });
});
