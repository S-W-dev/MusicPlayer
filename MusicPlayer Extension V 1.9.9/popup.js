
var server = 'https://cookie-clicker.github.io/musicplayer/';
var songs = server + 'songs/';
var background_stage = 1;

function start(song) {
	song.play();
}

function pause(song) {
	song.pause();
}

function restart(song) {
	song.currentTime = 0;
}

function custom_start() {

	load_custom()
	custom_audio.play();
}

function custom_pause() {

	load_custom()
	custom_audio.pause();
}

function custom_restart() {

	load_custom()
	custom_audio.currentTime = 0;
}

function load_custom() {

	var song = document.getElementsByName("custom")[0].value;

	document.getElementById('custom_audio').src = songs + song + ".mp3";

}

function manager() {

	// starts when page loads.
	//loads necesary scripts at page load

	setInterval(check_errors, 1);

}

function setAttr(elem, attr, data) {

	elem.setAttribute(attr, data);

}

function check_errors() {

	var original = window.console
	window.console = {
    	error: function(){

        	//Gets text from error message.
        	errorText = arguments['0'];

        	if (errorText.includes('404 (Not Found)')) {
            	console.error("Custom song either does not exist, or was entered correctly.");
        	}

        	original.error.apply(original, arguments)
    	}
}

}

function color_change() {
	if (background_stage == 1) {

		var text = document.getElementById('iframe-text');
		var iframe = document.getElementById('song_list');
		var background = document.getElementById('backgroundStage');

		text.className = "iframe-text2";
		iframe.className = "iframe2";
		background.className = "background2";
		background_stage = 2;

	}
}
//runs at the load of the page

manager();

document.addEventListener('DOMContentLoaded', function(){
var Start_Custom = document.getElementById('StartCustom');
var Pause_Custom = document.getElementById('PauseCustom');
var Restart_Custom = document.getElementById('RestartCustom');

Start_Custom.addEventListener('click', function() {
    custom_start();
});
Pause_Custom.addEventListener('click', function() {
    custom_pause();
});
Restart_Custom.addEventListener('click', function() {
    custom_restart();
});
});
