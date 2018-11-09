document.addEventListener('DOMContentLoaded', function(){

	var Start_Ludicrous = document.getElementById('StartLudicrous');
	var Start_Hydra = document.getElementById('StartHydra');
	var Start_Muffin = document.getElementById('StartMuffin');
	var Start_BetterNow = document.getElementById('StartBetterNow');
	var Start_Thunder = document.getElementById('StartThunder');
	var Start_Bob = document.getElementById('StartBob');
	var Start_Mine = document.getElementById('StartMine');
	var Start_Sorry = document.getElementById('StartSorry');
	var Start_Megalovania = document.getElementById('StartMegalovania');
	var Start_Lemon = document.getElementById('StartLemon');
	var Start_Mech = document.getElementById('StartMech');
	var Start_Hotel = document.getElementById('StartHotel');
	var Start_Bohemian = document.getElementById('StartBohemian');
	var Start_Pain = document.getElementById('StartPain');
	var Start_Jingle = document.getElementById('StartJingle');
	var Start_Holy = document.getElementById('StartHoly');
	var Start_Black = document.getElementById('StartBlack');
	var Start_Christmas = document.getElementById('StartChristmas');
	var Start_Yellow = document.getElementById('StartYellow');
	var Start_Fun = document.getElementById('StartFun');
	var Start_Usa = document.getElementById('StartUsa');
	var Start_Gun = document.getElementById('StartGun');
	var Start_Despacito = document.getElementById('StartDespacito');



	Start_Ludicrous.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"ludicrous"}, function(response) {});
	});

	Start_Hydra.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"hydra"}, function(response) {});
	});

	Start_Muffin.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"muffin"}, function(response) {});
	});

	Start_BetterNow.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"BetterNow"}, function(response) {});
	});

	Start_Thunder.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"Thunder"}, function(response) {});
	});;

	Start_Bob.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"Bob"}, function(response) {});
	});

	Start_Mine.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"Mine"}, function(response) {});
	});

	Start_Sorry.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"Sorry"}, function(response) {});
	});

	Start_Megalovania.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"Megalovania"}, function(response) {});
	});

	Start_Lemon.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"lemon_tree"}, function(response) {});
	});
	Start_Mech.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"quantom_mechanic"}, function(response) {});
	});
	Start_Hotel.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"hotel_california"}, function(response) {});
	});
	Start_Bohemian.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"bohemian_rhapsody"}, function(response) {});
	});
	Start_Pain.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"painkiller"}, function(response) {});
	});
	Start_Jingle.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"jingle_bell_rock"}, function(response) {});
	});
	Start_Holy.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"o_holy_night"}, function(response) {});
	});
	Start_Black.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"back_in_black"}, function(response) {});
	});
	Start_Christmas.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"merry_little_christmas"}, function(response) {});
	});
	Start_Yellow.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"yellow_ledbetter"}, function(response) {});
	});
	Start_Fun.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"life_is_fun"}, function(response) {});
	});
	Start_Usa.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"god_bless_usa"}, function(response) {});
	});
	Start_Gun.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"elephant_gun"}, function(response) {});
	});
	Start_Despacito.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"despacito"}, function(response) {});
	});

	$('#button1').click(function(){

		window.location.href = 'popup.html';

	});

});
