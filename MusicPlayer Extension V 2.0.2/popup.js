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

	var Start_BetterNow = document.getElementById('StartBetterNow');
	var Pause_BetterNow = document.getElementById('PauseBetterNow');
	var Restart_BetterNow = document.getElementById('RestartBetterNow');

	var Start_Thunder = document.getElementById('StartThunder');
	var Pause_Thunder = document.getElementById('PauseThunder');
	var Restart_Thunder = document.getElementById('RestartThunder');

	var Start_Bob = document.getElementById('StartBob');
	var Pause_Bob = document.getElementById('PauseBob');
	var Restart_Bob = document.getElementById('RestartBob');

	var Start_Mine = document.getElementById('StartMine');
	var Pause_Mine = document.getElementById('PauseMine');
	var Restart_Mine = document.getElementById('RestartMine');

	var Start_Sorry = document.getElementById('StartSorry');
	var Pause_Sorry = document.getElementById('PauseSorry');
	var Restart_Sorry = document.getElementById('RestartSorry');

	var Start_Megalovania = document.getElementById('StartMegalovania');
	var Pause_Megalovania = document.getElementById('PauseMegalovania');
	var Restart_Megalovania = document.getElementById('RestartMegalovania');

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

	Start_BetterNow.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"BetterNow"}, function(response) {});
	});
	Pause_BetterNow.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Pause", value:"BetterNow"}, function(response) {});
	});
	Restart_BetterNow.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Restart", value:"BetterNow"}, function(response) {});
	});

	Start_Thunder.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"Thunder"}, function(response) {});
	});
	Pause_Thunder.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Pause", value:"Thunder"}, function(response) {});
	});
	Restart_Thunder.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Restart", value:"Thunder"}, function(response) {});
	});

	Start_Bob.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"Bob"}, function(response) {});
	});
	Pause_Bob.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Pause", value:"Bob"}, function(response) {});
	});
	Restart_Bob.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Restart", value:"Bob"}, function(response) {});
	});

	Start_Mine.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"Mine"}, function(response) {});
	});
	Pause_Mine.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Pause", value:"Mine"}, function(response) {});
	});
	Restart_Mine.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Restart", value:"Mine"}, function(response) {});
	});

	Start_Sorry.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"Sorry"}, function(response) {});
	});
	Pause_Sorry.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Pause", value:"Sorry"}, function(response) {});
	});
	Restart_Sorry.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Restart", value:"Sorry"}, function(response) {});
	});

	Start_Megalovania.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"Megalovania"}, function(response) {});
	});
	Pause_Megalovania.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Pause", value:"Megalovania"}, function(response) {});
	});
	Restart_Megalovania.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Restart", value:"Megalovania"}, function(response) {});
	});

});
