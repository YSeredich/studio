(function() {
    //header
    var headerBgs = document.querySelector('.header_bgs');
    function changeBg() {
        var active = headerBgs.querySelector('.is-visible');
        active.classList.remove('is-visible');
        var next = active.nextElementSibling;
        if (next) {
            next.classList.add('is-visible');
        } else {
            headerBgs.firstElementChild.classList.add('is-visible');
        }
    }

    setTimeout(function() {
        setInterval(changeBg, 5000);
    }, 5000);

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

    window.sr = ScrollReveal({
        duration: 2000
    });
    sr.reveal('.aos');
})();
