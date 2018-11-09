document.addEventListener('DOMContentLoaded', function(){

	var restart = document.getElementById('Restart');
	var pause = document.getElementById('Pause');
	var keepGoing = document.getElementById('KeepGoing');
	var checkBox = document.getElementById('loopbox');

	restart.addEventListener('click', function(){
		chrome.runtime.sendMessage({type: "Restart", value:"hello"}, function(response){});
	});

	pause.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Pause", value:"hello"}, function(response) {});
	});

	keepGoing.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"current"}, function(response) {});
	});



	$('#loopbox').click(function(){

		if (checkBox.checked == true){
			chrome.runtime.sendMessage({type: "loop", value:"true"}, function(response) {});
  		} else {
    		chrome.runtime.sendMessage({type: "loop", value:"false"}, function(response) {});
  		}

	});

	$('#button1').click(function(){

		window.location.href = 'songs.html';

	});

	$('#creditsbutton').click(function(){

		window.location.href = 'credits.html';

	});

});
