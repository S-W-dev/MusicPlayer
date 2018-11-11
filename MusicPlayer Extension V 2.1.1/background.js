var song = document.createElement("audio");
var server = 'https://cookie-clicker.github.io/musicplayer/songs/';
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type == "loop") {
        if (request.value == "true") {
            song.loop = true;
        } else {
            song.loop = false;
        }
    }
    if (request.type == "Start") {

      if (request.value != "current") {
        song.src = server + request.value + '.mp3';
        song.load();
}
        if (request.value == "current") {
            if (song) {
                song.play();
            }
        }
    }
    if (request.type == "Pause") {
        if (song) {
            song.pause();
        }
    }
    if (request.type == "Restart") {
        if (song) {
            song.pause();
            song.currentTime = 0;
        }
    }
    if (request.type == "volume") {
        song.volume = request.value;
    }
    if (request.type == "seek") {
        if (request.value == "+5") {
            song.currentTime = song.currentTime + 5;
        }
        if (request.value == "-5") {
            song.currentTime = song.currentTime - 5;
        }
    }
});
