var map = function() {
    var map = document.getElementById('map-section');
    if (!map) return;

    ymaps.ready(init);
    var studioMap;
    var studioPlacemark;
    var oldPlacemark;

    function init() {
        studioMap = new ymaps.Map('map', {
            center: [52.42621457, 30.99988150],
            zoom: 17,
            controls: []
        });

        studioPlacemark = new ymaps.Placemark(
            [52.42621457, 30.99988150],
            {
                hintContent: 'ул. Катунина 24'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/pin.svg',
                iconImageSize: [52, 52],
                iconImageOffset: [-5, -40]
            });

        oldPlacemark = new ymaps.Placemark(
            [52.42666457178675,30.99850699999998],
            {
                hintContent: 'ул. Карповича, 18'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/old_pin.svg',
                iconImageSize: [52, 52],
                iconImageOffset: [-30, -65]
            });

        studioMap.geoObjects
            .add(studioPlacemark)
            .add(oldPlacemark);
    }
}();

module.exports = map;
