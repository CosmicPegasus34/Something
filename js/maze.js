/* Array */
var blocks = ["r1c2","r1c4", "r3c3","r5c4"];

/* Movement Functions */
var currentPosX, currentPosY,currentID;
currentPosX = 1; currentPosY = 1;
function moves()
{
	for(var count=1;count<=5;count++)
	{
		for(var counted=0;counted <=5;counted++)
		{
			
			var maker = "r"+currentPosX+"c"+currentPosY;
			console.log(maker);
			
			document.getElementById(maker).style.backgroundColor="green";

		}
	}
		if(document.getElementById("finish").style.backgroundColor="green")
		{
			var checks = document.getElementById("finish") = "green";
			page_jumper();
		}
}

function down(event){
	var pressed = event.key;
	if(pressed == "s"){
		currentPosX +=1;
		var checks = "r"+currentPosX+"c"+currentPosY;
		for(var count = 0;count<=blocks.length;count++){
			if(blocks[count]== checks)
			{
				currentPosX -=1;
				document.getElementById("health1").src = "images/0_hearts.png";
			}
		}
		moves();
	}
}
function up(event){
	var pressed = event.key;
	var tempX = currentPosX -1;
	var markers = "r"+tempX+"c"+currentPosY;
	var checks = document.getElementById(markers).style.backgroundColor;
	if(pressed == "w"){
		currentPosX -=1;
		var checks = "r"+currentPosX+"c"+currentPosY;
		for(var count = 0;count<=blocks.length;count++){
			if(blocks[count]== checks)
			{
				currentPosX +=1;
				document.getElementById("health1").src = "images/0_hearts.png";
			}
		}
		moves();
	}
}
function left(event){
	var pressed = event.key;
	if(pressed == "a"){
		currentPosY -=1;
		var checks = "r"+currentPosX+"c"+currentPosY;
		for(var count = 0;count<=blocks.length;count++){
			if(blocks[count]== checks)
			{
				currentPosY +=1;
				document.getElementById("health1").src = "images/0_hearts.png";
			}
		}
		moves();
	}
}
function right(event){
	var pressed = event.key;
	if(pressed == "d"){
		currentPosY +=1;
		var checks = "r"+currentPosX+"c"+currentPosY;
		for(var count = 0;count<=blocks.length;count++){
			if(blocks[count]== checks)
			{
				currentPosY -=1;
				document.getElementById("health1").src = "images/0_hearts.png";
			}
		}
		moves();
	}
}
/* Position Tracker Function */
function tempted(x){
	currentID = x.id;
	console.log(currentID);
}

/* Timer Function */
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");


secondsLabel.style.fontFamily="arcade";
secondsLabel.style.fontSize="200%";
secondsLabel.style.position="absolute";
secondsLabel.style.left="24em"
//
minutesLabel.style.fontFamily="arcade";
minutesLabel.style.fontSize="200%";
minutesLabel.style.position="absolute";
minutesLabel.style.left="22em";

var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime()
{
	totalSeconds++;
	secondsLabel.innerHTML = pad(totalSeconds % 60);
	minutes.Label = pad(parseInt(totalSeconds / 60));
}
 function pad(val) {
 	var valString = val + "";
 	if(valString.length < 2){
 		return "0" + valString;
 	}
 	else {
 		return valString;
 	}
}
/* Image Hider Function*/
var health = 1;
function hide_image() {
	var x = document.getElementById("hidden");
	if (document.getElementById("barrier")) {
		document.getElementById("health1").style.display = "block";
	} 
	else {
	  document.getElementById("health0").style.display = "none";
	}
}
function page_jumper()
{
	if(document.getElementsByClassName("finish"))
	{
		window.location.replace('level2.html')
	}
}