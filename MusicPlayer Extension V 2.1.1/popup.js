document.addEventListener('DOMContentLoaded', function() {
    var restart = document.getElementById('Restart');
    var pause = document.getElementById('Pause');
    var keepGoing = document.getElementById('KeepGoing');
    var checkBox = document.getElementById('loopbox');
    restart.addEventListener('click', function() {
        chrome.runtime.sendMessage({
            type: "Restart",
            value: "hello"
        }, function(response) {});
    });
    pause.addEventListener('click', function() {
        chrome.runtime.sendMessage({
            type: "Pause",
            value: "hello"
        }, function(response) {});
    });
    keepGoing.addEventListener('click', function() {
        chrome.runtime.sendMessage({
            type: "Start",
            value: "current"
        }, function(response) {});
    });
    chrome.runtime.sendMessage({
        type: "loop",
        value: "true"
    }, function(response) {});
    $('#loopbox').click(function() {
        if (checkBox.checked == true) {
            chrome.runtime.sendMessage({
                type: "loop",
                value: "true"
            }, function(response) {});
        } else {
            chrome.runtime.sendMessage({
                type: "loop",
                value: "false"
            }, function(response) {});
        }
    });
    $('#button1').click(function() {
        window.location.href = 'songs.html';
    });
    $('#creditsbutton').click(function() {
        window.location.href = 'credits.html';
    });
    $('#Seek1').click(function() {
        chrome.runtime.sendMessage({
            type: "seek",
            value: "+5"
        }, function(response) {});
    });
    $('#Seek2').click(function() {
        chrome.runtime.sendMessage({
            type: "seek",
            value: "-5"
        }, function(response) {});
    });
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo"); // Display the default slider value
    // Update the current slider value (each time you drag the slider handle)
    setInterval(function() {
        var volume = document.getElementById('demo').innerHTML = document.getElementById('myRange').value / 100;
        chrome.runtime.sendMessage({
            type: "volume",
            value: volume
        }, function(response) {});
    }, 1);
});
