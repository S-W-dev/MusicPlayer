document.addEventListener('DOMContentLoaded', function() {

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
