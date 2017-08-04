document.addEventListener('DOMContentLoaded', function(){
    var moveTo = new MoveTo({
        duration: 1000
    });

    var triggers = document.querySelectorAll('.topbar__link');
    for (var i = 0; i < triggers.length; i++) {
        moveTo.registerTrigger(triggers[i]);
    }
});