var portfolio = function() {
    var galleryTop = new Swiper('.gallery-top', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10,
        effect: 'fade',
        loopedSlides: document.querySelectorAll('.gallery-top .swiper-slide').length,
        loop: true,
        preloadImages: false,
        lazyLoading: true
    });

    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
        autoplay: 10000,
        loopedSlides: document.querySelectorAll('.gallery-thumbs .swiper-slide').length,
        loop: true
    });

    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;
}();

module.exports = portfolio;
