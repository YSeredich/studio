document.addEventListener('DOMContentLoaded', function(){
    var moveTo = new MoveTo({
        duration: 1000
    });

    var triggers = document.querySelectorAll('.scroll-trigger');
    for (var i = 0; i < triggers.length; i++) {
        moveTo.registerTrigger(triggers[i]);
    }
});