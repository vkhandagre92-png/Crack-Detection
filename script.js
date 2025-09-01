document.addEventListener('DOMContentLoaded', function() {
    ScrollReveal({ 
        reset: true, 
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.why_title, .main_tag, .title, .slideheading, .btn, .title', { origin: 'top' });
    ScrollReveal().reveal('.why__container, .card_container, .slide_container, ', { origin: 'bottom' });
    
    ScrollReveal().reveal('.about-img, ', { origin: 'left' });
    ScrollReveal().reveal('.about-content, .steps', { origin: 'right' });
});

const typed = new Typed('.multiple_text', {
    strings: ['Think', 'Build', 'Protect'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// -------------------------------------------------------------------------

var swiper = new Swiper(".slide_content", {
    slidesPerView: 2,
    spaceBetween: 35,
    loop: true,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

  });