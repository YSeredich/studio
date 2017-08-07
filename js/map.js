var map = function() {
    ymaps.ready(init);
    var studioMap;
    var studioPlacemark;

    function init() {
        studioMap = new ymaps.Map('map', {
            center: [52.42621457, 30.99988150],
            zoom: 16,
            controls: []
        });

        studioPlacemark = new ymaps.Placemark(
            [52.42621457, 30.99988150],
            {
                hintContent: 'ул. Катунина 24'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/pin.svg',
                iconImageSize: [50, 62],
                iconImageOffset: [-5, -40]
            });

        studioMap.geoObjects.add(studioPlacemark);
    }
}();

module.exports = map;
