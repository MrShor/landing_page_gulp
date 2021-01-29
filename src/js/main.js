(function() {
  document.getElementById("header-burger-btn").addEventListener("click", () => {
    if (window.innerWidth < 1025) {
      document.getElementById("nav-wrap").classList.toggle("is-open");
      document.getElementById("header-burger-btn").classList.toggle("is-open");
      document.getElementById("page-body").classList.toggle("menu-is-open");
    }
  });
})();

var swiper = new Swiper('.swiper-container', {
  observer: true,
  observeParents: true,
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination-mobile',
        type: 'bullets'
      },
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.pagination-desc__slide-count',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
          return current + ' of ' + total;
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 20,
      pagination: {
        el: '.pagination-desc__slide-count',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
          return current + ' of ' + total;
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }
  }
});

