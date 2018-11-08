document.addEventListener('DOMContentLoaded', function(){
	var Start_Ludicrous = document.getElementById('StartLudicrous');
	var Pause_Ludicrous = document.getElementById('PauseLudicrous');
	var Restart_Ludicrous = document.getElementById('RestartLudicrous');
	var Start_Hydra = document.getElementById('StartHydra');
	var Pause_Hydra = document.getElementById('PauseHydra');
	var Restart_Hydra = document.getElementById('RestartHydra');
	var Start_Muffin = document.getElementById('StartMuffin');
	var Pause_Muffin = document.getElementById('PauseMuffin');
	var Restart_Muffin = document.getElementById('RestartMuffin');

	Start_Ludicrous.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"ludicrous"}, function(response) {});
	});
	Pause_Ludicrous.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Pause", value:"ludicrous"}, function(response) {});
	});
	Restart_Ludicrous.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Restart", value:"ludicrous"}, function(response) {});
	});

	Start_Hydra.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"hydra"}, function(response) {});
	});
	Pause_Hydra.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Pause", value:"hydra"}, function(response) {});
	});
	Restart_Hydra.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Restart", value:"hydra"}, function(response) {});
	});

	Start_Muffin.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"muffin"}, function(response) {});
	});
	Pause_Muffin.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Pause", value:"muffin"}, function(response) {});
	});
	Restart_Muffin.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Restart", value:"muffin"}, function(response) {});
	});
});