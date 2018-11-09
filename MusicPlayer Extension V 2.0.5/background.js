var song = document.createElement("audio");

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

	if (request.type == "Start"){
		if (request.value == "ludicrous"){
			song.src = "https://cookie-clicker.github.io/musicplayer/songs/ludicrous_speed.mp3";
			song.play();
		}

		if (request.value == "hydra"){
			song.src = "https://cookie-clicker.github.io/musicplayer/songs/Hydra.mp3";
			song.play();
		}

		if (request.value == "muffin"){
			song.src = "https://cookie-clicker.github.io/musicplayer/songs/muffin_time.mp3";
			song.play();
		}

		if (request.value == "BetterNow"){
			song.src = "https://cookie-clicker.github.io/musicplayer/songs/better_now.mp3";
			song.play();
		}

		if (request.value == "Thunder"){
			song.src = "https://cookie-clicker.github.io/musicplayer/songs/thunder.mp3";
			song.play();
		}

		if (request.value == "Bob"){
			song.src = "https://cookie-clicker.github.io/musicplayer/songs/bob_the_builder.mp3";
			song.play();
		}

		if (request.value == "Mine"){
			song.src = "https://cookie-clicker.github.io/musicplayer/songs/mine_diamonds.mp3";
			song.play();
		}

		if (request.value == "Sorry"){
			song.src = "https://cookie-clicker.github.io/musicplayer/songs/sorry.mp3";
			song.play();
		}

		if (request.value == "Megalovania"){
			song.src = "https://cookie-clicker.github.io/musicplayer/songs/Megalovania.mp3";
			song.play();
		}

		if (request.value == "current"){
			song.play();
		}
	}

	if (request.type == "Pause"){
		song.pause();
	}

	if (request.type == "Restart"){
		song.currentTime = 0;
	}

});
