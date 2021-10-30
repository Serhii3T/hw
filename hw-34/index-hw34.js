const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  spaceBetween: 30,
  slidesPerView: 4,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let currentSlides = swiper.slides[swiper.realIndex + 3];
currentSlides.classList.add('lasted');

swiper.on('slideChange', function () {
     let = currentSlide = swiper.slides[swiper.realIndex + 3]
     $('.swiper-slide').removeClass('lasted');
     currentSlide.classList.add('lasted');
});
