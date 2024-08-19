import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

const mobileSwiper = new Swiper(".mobileSwiper", {
  noSwiping: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 100,
  navigation: {
    // 前一張、下一張按鈕
    nextEl: ".mobileSwiper-button-next",
    prevEl: ".mobileSwiper-button-prev",
  },

  pagination: {
    el: ".mobileSwiper-pagination",
    type: "fraction",
  },
});

const newSwiper = new Swiper(".newSwiper", {
  noSwiping: true,
  spaceBetween: 48,
  slidesPerView: 2, //***(一次呈現幾張),
  slidesPerGroup: 2, //***(一個群組內有幾張投影片)
  navigation: {
    // 前一張、下一張按鈕
    nextEl: ".newSwiper-button-next",
    prevEl: ".newSwiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});

const everyoneSwiper = new Swiper(".everyoneSwiper", {
  spaceBetween: 400,
});

const styleSwiper = new Swiper(".styleSwiper", {});

const articleExtendSwiper = new Swiper(".articleExtendSwiper", {});

$(document).ready(function () {
  $(".hamMenu").click(function () {
    $(".hamContent").slideToggle(1000);
  });
});
