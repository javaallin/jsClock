var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  observer: true,
  observeParents: true,
  coverflowEffect: {
    rotate: 70,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows : true,
  },
  keyboard: {
     enabled: true,
   },
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
  autoplay: {
    delay:2500,
    disableOnInteraction:false
  }
});
