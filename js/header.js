(function() {
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
})();
