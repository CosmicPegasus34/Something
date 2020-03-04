var blocks = ["r1c2", "r1c4", "r1c11", "r2c7", "r2c14","r3c3", "r3c9", "r4c6", "r4c11", "r4c14", "r5c1", "r5c4", "r5c7", "r5c15", "r6c9", "r6c12", "r7c7", "r8c4", "r9c2", "r9c8", "r9c13", "r11c4", "r11c8", "r11c12", "r11c15", "r12c6", "r12c10", "r12c14", "r13c3", "r13c12", "r14c5", "r14c9", "r14c11", "r14c14", "r15c2", "r15c7", "r15c12"];
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
			
			document.getElementById(maker).style.backgroundColor="greeb";

		}
	}
}

function down(event){
	var pressed = event.key;
	if(pressed == "s"){
		//spaces[currentPosX][currentPosY] = 0;
		
		currentPosX +=1;
		var checks = "r"+currentPosX+"c"+currentPosY;
		for(var count = 0;count<=blocks.length;count++){
			if(blocks[count]== checks)
			{
				currentPosX -=1;
			}
		}
		//spaces[currentPosX][currentPosY] = 1;
		moves();
		
	}
}
function up(event){
	var pressed = event.key;
	var tempX = currentPosX -1;
	var markers = "r"+tempX+"c"+currentPosY;
	var checked = document.getElementById(markers).style.backgroundColor;
	if(pressed == "w"){
		currentPosX -=1;
		var checks = "r"+currentPosX+"c"+currentPosY;
		for(var count = 0;count<=blocks.length;count++){
			if(blocks[count]== checks)
			{
				currentPosX +=1;
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
			}
		}
		moves()
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
			}
		}
		moves()
		
	}
}

function tempted(x){
	currentID = x.id;
	console.log(currentID);
}

var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
secondsLabel.style.fontFamily="arcade";
secondsLabel.style.fontSize="200%";
secondsLabel.style.position="absolute";
secondsLabel.style.left="24em";
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