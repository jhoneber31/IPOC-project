document.addEventListener("DOMContentLoaded", function () {
  fetch("./header/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("header").innerHTML = data;

      const menuBurger = document.getElementById("burger-icon");
      const links = document.querySelectorAll(".header__link");

      if(menuBurger) {
        menuBurger.addEventListener("click", function () {
          document.getElementById("header__box").classList.toggle("header__box-active");
        });
      }

      if(links) {
        const currentUrl = window.location.pathname;
        console.log({ currentUrl });
        links.forEach((link) => {
          const aHref = link.querySelector("a").getAttribute("href");
          const linkActive = new URL(aHref, window.location.origin).pathname

          console.log({ linkActive });

          if (currentUrl === linkActive) {
            link.classList.add("header__link-active");
          }
        });
      }
    });
});
