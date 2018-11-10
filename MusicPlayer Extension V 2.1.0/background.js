var song = document.createElement("audio");
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type == "loop") {
        if (request.value == "true") {
            song.loop = true;
        } else {
            song.loop = false;
        }
    }
    if (request.type == "Start") {
        if (request.value == "ludicrous") {
            song.pause();
            song.src = "https://cookie-clicker.github.io/musicplayer/songs/ludicrous_speed.mp3";
        }
        if (request.value == "hydra") {
            song.pause();
            song.src = "https://cookie-clicker.github.io/musicplayer/songs/Hydra.mp3";
        }
        if (request.value == "muffin") {
            song.pause();
            song.src = "https://cookie-clicker.github.io/musicplayer/songs/muffin_time.mp3";
        }
        if (request.value == "BetterNow") {
            song.pause();
            song.src = "https://cookie-clicker.github.io/musicplayer/songs/better_now.mp3";
        }
        if (request.value == "Thunder") {
            song.pause();
            song.src = "https://cookie-clicker.github.io/musicplayer/songs/thunder.mp3";
        }
        if (request.value == "Bob") {
            song.pause();
            song.src = "https://cookie-clicker.github.io/musicplayer/songs/bob_the_builder.mp3";
        }
        if (request.value == "Mine") {
            song.pause();
            song.src = "https://cookie-clicker.github.io/musicplayer/songs/mine_diamonds.mp3";
        }
        if (request.value == "Sorry") {
            song.pause();
            song.src = "https://cookie-clicker.github.io/musicplayer/songs/sorry.mp3";
        }
        if (request.value == "Megalovania") {
            song.pause();
            song.src = "https://cookie-clicker.github.io/musicplayer/songs/Megalovania.mp3";
        }
        if (request.value == "lemon_tree") {
            song.pause();
            song.src = "https://cookie-clicker.github.io/musicplayer/songs/lemon_tree.mp3";
        }
        if (request.value == "quantom_mechanic") {
            song.pause();
            song.src = "https://cookie-clicker.github.io/musicplayer/songs/quantom_mechanic.mp3";
        }
        if (request.value == "hotel_california") {
            song.pause();
            song.src = "https://cookie-clicker.github.io/musicplayer/songs/hotel_california.mp3";
        }
        if (request.value == "bohemian_rhapsody") {
            song.pause();
            song.src = "https://cookie-clicker.github.io/musicplayer/songs/bohemian_rhapsody.mp3";
        }
        if (request.value == "painkiller") {
            song.pause();
            song.src = "https://cookie-clicker.github.io/musicplayer/songs/painkiller.mp3";
        }
        if (request.value == "jingle_bell_rock") {
            song.pause();
            song.src = "https://cookie-clicker.github.io/musicplayer/songs/jingle_bell_rock.mp3";
        }
        if (request.value == "o_holy_night") {
            song.pause();
            song.src = "https://cookie-clicker.github.io/musicplayer/songs/o_holy_night.mp3";
        }
        if (request.value == "back_in_black") {
            song.pause();
            song.src = "https://cookie-clicker.github.io/musicplayer/songs/back_in_black.mp3";
        }
        if (request.value == "merry_little_christmas") {
            song.pause();
            song.src = "https://cookie-clicker.github.io/musicplayer/songs/merry_little_christmas.mp3";
        }
        if (request.value == "yellow_ledbetter") {
            song.pause();
            song.src = "https://cookie-clicker.github.io/musicplayer/songs/yellow_ledbetter.mp3";
        }
        if (request.value == "life_is_fun") {
            song.pause();
            song.src = "https://cookie-clicker.github.io/musicplayer/songs/life_is_fun.mp3";
        }
        if (request.value == "god_bless_usa") {
            song.pause();
            song.src = "https://cookie-clicker.github.io/musicplayer/songs/god_bless_usa.mp3";
        }
        if (request.value == "elephant_gun") {
            song.pause();
            song.src = "https://cookie-clicker.github.io/musicplayer/songs/elephant_gun.mp3";
        }
        if (request.value == "despacito") {
            song.pause();
            song.src = "https://cookie-clicker.github.io/musicplayer/songs/despacito.mp3";
        }
        if (request.value == "BlueSky") {
            song.pause();
            song.src = "https://cookie-clicker.github.io/musicplayer/songs/blue_sky.mp3";
        }
        if (request.value == "TheDust") {
            song.pause();
            song.src = "https://cookie-clicker.github.io/musicplayer/songs/bite_the_dust.mp3";
        }
        if (request.value == "RocketMan") {
            song.pause();
            song.src = "https://cookie-clicker.github.io/musicplayer/songs/rocket_man.mp3";
        }
        if (request.value == "VivaLaVida") {
            song.pause();
            song.src = "https://cookie-clicker.github.io/musicplayer/songs/viva_la_vida.mp3";
        }
        if (request.value == "PianoMan") {
            song.pause();
            song.src = "https://cookie-clicker.github.io/musicplayer/songs/piano_man.mp3";
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
