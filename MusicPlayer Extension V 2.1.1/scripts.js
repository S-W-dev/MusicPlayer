document.addEventListener('DOMContentLoaded', function() {

  var ludicrous_speed = '<br><div id="ludicrous_speed"><p id="songdivtext">Ludicrous Speed</p><button class="Start" id="ludicrous_speed">Select</button><br><br><details id="songdivtext"><div id="credit"><h4>By Jesse Valentine aka F-777</h4></div></details></div><br><hr>';

  $('html').prepend('<body><br><div id="Songs"></div></body>');
  $('#Songs').prepend(ludicrous_speed);

    $('button').click(function(){

      select(this.id);

    });

    function select(song) {

      window.location.href = 'popup.html';
      chrome.runtime.sendMessage({
        type: "Start",
        value: song
      }, function(response) {});
  }

});
