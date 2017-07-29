(function() {
    // portfolio
    var galleryTop = new Swiper('.gallery-top', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10
    });

    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
    });

    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;

    // map
    var winWidth = window.innerWidth;
    var mapWidth = (winWidth > 768) ? winWidth/2 : winWidth;
    var mapContainer = document.querySelector('.map__left');
    var mapIframe = '<iframe src="https://yandex.ru/map-widget/v1/-/CBQ9UAcLLA" width="' + mapWidth + '" height="530" frameborder="0"></iframe>';
    mapContainer.innerHTML = mapIframe;
})();
