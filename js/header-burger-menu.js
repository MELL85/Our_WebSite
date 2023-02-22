(() => {
    const iconBurger = document.querySelector(".header__burger-menu-btn-container");
    const navigationsBody = document.querySelector(".header__nav-burger-menu");
    iconBurger.addEventListener("click", function (e) {
      document.body.classList.toggle("lock");
      iconBurger.classList.toggle("active");
      navigationsBody.classList.toggle("active");
    });
  
    const navLinks = document.querySelectorAll(".header__link");
    navLinks.forEach((navLink) => {
      navLink.addEventListener("click", (_) => {
        if (iconBurger.classList.contains("active")) {
          document.body.classList.remove("lock");
          iconBurger.classList.remove("active");
          navigationsBody.classList.remove("active");
        }
      }
      );
    });
})();