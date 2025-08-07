document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const mobileMenu = document.querySelector(".mobile-menu");

  burger.addEventListener("change", function () {
    mobileMenu.classList.toggle("active", burger.checked);
  });

  document.querySelectorAll(".mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      burger.checked = false;
      mobileMenu.classList.remove("active");
    });
  });
});

// feature-slider
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".feature-slider", {
    slidesPerView: "auto",
    spaceBetween: 20,
    // loop: true,
    freeMode: true,
    grabCursor: true,
    // mousewheel: true,
    breakpoints: {
      768: {
        // slidesPerView: 2,
      },
      520:{
        // slidesPerView: 1,
      }
    },
  });
});

// customer-slider
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".customer-slider", {
    slidesPerView: "auto",
    // spaceBetween: 20,
    // loop: true,
    freeMode: true,
    grabCursor: true,
    navigation: {
      nextEl: ".nav-right",
      prevEl: ".nav-left",
    },
    pagination: {
      el: ".swiper-pagination", 
      type: 'progressbar',
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 1,
      },
    },
  });
});
