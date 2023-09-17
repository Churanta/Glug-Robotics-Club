var swiper = new Swiper(".slide-content2", {
  slidesPerView: 3,
  spaceBetween: 25,
//   slidesPerGroup: 3,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
  gapCursor:'true',
//   loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
      clickable: true,
    dynamicBullets:true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    breakpoints:{
    0: {
          slidesPerView:1,
    },
    520: {
          slidesPerView:1,
    },
    950: {
          slidesPerView:1,
      },
  }
});
