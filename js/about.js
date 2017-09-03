var about = function() {
    if (Math.random() >= 0.5) {
        var img = document.querySelector('.about__image');
        if (img) {
            img.setAttribute('src', 'https://ucarecdn.com/8c2576be-81f1-483b-8c74-91ee34b5631e/-/progressive/yes/office_2.jpg');
        }
    }
}();

module.exports = about;
