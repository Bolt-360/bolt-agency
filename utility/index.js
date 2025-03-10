export const nextUtility = {
  preloader() {
    const preloader = document.getElementById("preloader");
    if (preloader) {
      setTimeout(() => {
        preloader.style.opacity = "0";
        setTimeout(() => {
          preloader.style.display = "none";
        }, 500);
      }, 1000);
    }
  },
  stickyNav() {
    const header = document.getElementById("header-sticky");

    // Add an event listener to the window's scroll event
    window.addEventListener("scroll", function () {
      // Check the scroll position
      if (window.scrollY > 250) {
        // If the scroll position is greater than 250, add the "sticky" class
        header.classList.add("sticky");
      } else {
        // Otherwise, remove the "sticky" class
        header.classList.remove("sticky");
      }
    });
  },
  scrollAnimation() {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  },
};
