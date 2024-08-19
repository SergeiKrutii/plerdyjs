fetch('../../src/slides/slides.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('slides-container').innerHTML = data;
    const swiper = new Swiper('.swiper', {
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1000: {
          slidesPerView: 4,
          spaceBetween: 15,
          loop: false,
        },
      },
    });
  })
  .catch(error => console.log(error));
