var audio;

var init = function() {
    audio = document.getElementById("audio");
    var input = document.getElementById("duration");

    audio.play = function() {
        input.value = 'play';
    }

    audio.pause = function() {
        input.value = 'paused';
    }

    var time = audio.duration/60;
//    var input = document.getElementById("duration");
//    input.value = time;
}



var play = function() {
    audio.play();
}

var pause = function() {
    audio.pause();
}

var stop = function() {
    audio.pause();
    audio.currentTime = 0;
}