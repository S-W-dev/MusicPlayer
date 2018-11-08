var ludicrous = document.createElement("audio");
ludicrous.src = "https://cookie-clicker.github.io/musicplayer/songs/ludicrous_speed.mp3";

var hydra = document.createElement("audio");
hydra.src = "https://cookie-clicker.github.io/musicplayer/songs/Hydra.mp3";

var muffin = document.createElement("audio");
muffin.src = "https://cookie-clicker.github.io/musicplayer/songs/muffin_time.mp3";

var better_now = document.createElement("audio");
better_now.src = "https://cookie-clicker.github.io/musicplayer/songs/better_now.mp3";

var thunder = document.createElement("audio");
thunder.src = "https://cookie-clicker.github.io/musicplayer/songs/thunder.mp3";

var Bob = document.createElement("audio");
Bob.src = "https://cookie-clicker.github.io/musicplayer/songs/bob_the_builder.mp3";

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

		if (request.value == "BetterNow"){
			better_now.play();
		}

		if (request.value == "Thunder"){
			thunder.play();
		}

		if (request.value == "Bob"){
			Bob.play();
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

		if (request.value == "BetterNow"){
			better_now.pause();
		}

		if (request.value == "Thunder"){
			thunder.pause();
		}

		if (request.value == "Bob"){
			Bob.pause();
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

		if (request.value == "BetterNow"){
			better_now.currentTime = 0;
		}

		if (request.value == "Thunder"){
			thunder.currentTime = 0;
		}

		if (request.value == "Bob"){
			Bob.currentTime = 0;
		}
	}

});
