document.addEventListener("DOMContentLoaded", function () {
  fetch("./header/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("header").innerHTML = data;

      const menuBurger = document.getElementById("burger-icon");
      const links = document.querySelectorAll(".header__link");
      const sections = document.querySelectorAll("section");
      const infoType = document.querySelectorAll(".enfoque__type--information");
      const infoTab = document.querySelectorAll(".enfoque__type--step")

      if(menuBurger) {
        menuBurger.addEventListener("click", function () {
          document.getElementById("header__box").classList.toggle("header__box-active");
        });
      }

      const href = document.querySelectorAll(".header__link a");
      const offset = 105; 

      href.forEach(link => {
        link.addEventListener("click", function(event) {
          event.preventDefault();
          
          const sectionID = this.getAttribute("href").substring(1);
          const section = document.getElementById(sectionID);
      
          const sectionPosition = section.offsetTop - offset;

          document.getElementById("header__box").classList.toggle("header__box-active");
      
          window.scrollTo({
            top: sectionPosition,
            behavior: "smooth"
          });
        });
      });

      window.onscroll = () => {
        sections.forEach(sec => {
          let top = window.scrollY;
          let offset = sec.offsetTop - 250;
          let height = sec.offsetHeight;
          let id = sec.getAttribute("id");
          if(top >= offset && top < offset + height) {
            links.forEach(link => {
              link.classList.remove("header__link-active");
              const aLink = link.querySelector("a");
              if(aLink.getAttribute("href") === `#${id}`) {
                link.classList.add("header__link-active");
              }
            });
          }
        })
      }

      if(infoTab) {
        infoTab.forEach(type => {
          type.addEventListener("click", function() {
            infoType.forEach(info =>  {
              info.classList.remove("enfoque__type--active")
            })

            const id = type.getAttribute("data-id")

            document.querySelector(`.enfoque__type--information-${id}`).classList.add("enfoque__type--active");

          })
        })
      }

      if (window.innerWidth >= 1024 && infoTab[0]) {
        infoTab[0].click();
      }

      function scrollToNextSection(sectionId) {
        const nextSection = document.getElementById(sectionId);
        if(nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
        } else {
          console.log("No existe la sección");
        }
      }

      document.querySelectorAll(".btn-next").forEach(btn => {
        btn.addEventListener("click", function() {
          const sectionId = this.getAttribute("data-section-id");
          console.log({ sectionId });
          scrollToNextSection(sectionId);
        });
      })

    });
});
