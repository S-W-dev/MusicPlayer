var ludicrous = document.createElement("audio");
ludicrous.src = "http://cookieclicker.web44.net/musicplayer/songs/ludicrous_speed.mp3";

var hydra = document.createElement("audio");
hydra.src = "http://cookieclicker.web44.net/musicplayer/songs/Hydra.mp3";

var muffin = document.createElement("audio");
muffin.src = "http://cookieclicker.web44.net/musicplayer/songs/muffin_time.mp3";

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

	if (request.type == "Start"){
		if (request.value == "ludicrous"){
			ludicrous.play();
		}

		if (request.value == "hydra"){
			hydra.play();
		}

		if (request.value == "muffin"){
			muffin.play();
		}
	}

	if (request.type == "Pause"){
		if (request.value == "ludicrous"){
			ludicrous.pause();
		}

		if (request.value == "hydra"){
			hydra.pause();
		}

		if (request.value == "muffin"){
			muffin.pause();
		}
	}

	if (request.type == "Restart"){
		if (request.value == "ludicrous"){
			ludicrous.currentTime = 0;
		}

		if (request.value == "hydra"){
			hydra.currentTime = 0;
		}

		if (request.value == "muffin"){
			muffin.currentTime = 0;
		}
	}

});