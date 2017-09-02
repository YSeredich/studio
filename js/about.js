var about = function() {
    if (Math.random() >= 0.5) {
        var img = document.querySelector('.about__image');
        if (img) {
            img.setAttribute('src', 'https://ucarecdn.com/a6f679f5-d042-410d-8da8-62829cc65f3d/-/resize/800x/-/progressive/yes/-/quality/lighter/office_2.jpg');
        }
    }
}();

module.exports = about;
