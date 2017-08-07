var scrollBtn = function() {
    document.addEventListener('DOMContentLoaded', function(){

        var moveTo = new MoveTo({
            duration: 1000
        });

        var triggers = document.querySelectorAll('.scroll-trigger');
        for (var i = 0; i < triggers.length; i++) {
            moveTo.registerTrigger(triggers[i]);
        }

        window.addEventListener('scroll', function() {
            var scrollControl = document.querySelector('.scroll-top');
            if (window.pageYOffset > document.documentElement.clientHeight) {
                scrollControl.classList.add('active');
            } else {
                scrollControl.classList.remove('active');
            }
        })
    });
}();

module.exports = scrollBtn;