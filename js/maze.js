var spaces = [
	[1, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0]
]
var currentPosX, currentPosY,currentID;
currentPosX =1; currentPosY=1;
function moves()
{
	for(var count=0;count<=5;count++)
	{
		for(var counted=0;counted <=5;counted++)
		{
			var maker = "r"+currentPosX+"c"+currentPosY;
			console.log(maker);
		  document.getElementById(maker).style.backgroundColor="green";
		}
	}
}

function down(event){
	var pressed = event.key;
	if(pressed == "s"){
		//spaces[currentPosX][currentPosY] = 0;
		currentPosX +=1;
		//spaces[currentPosX][currentPosY] = 1;
		moves()
		for(var x=0; x<6; x++){
			for(var y=0;y<6;y++){
				console.log(spaces[currentPosX][currentPosY]);
			}
		}
	}
}
function up(event){
	var pressed = event.key;
	if(pressed == "w"){
		//spaces[currentPosX][currentPosY] = 0;
		currentPosX -=1;
		//spaces[currentPosX][currentPosY] = 1;
		moves()
		for(var x=0; x<5; x++){
			for(var y=0;y<5;y++){
				console.log(spaces[x][y]);
			}
		}
	}
}
function left(event){
	var pressed = event.key;
	if(pressed == "a" || ""){
		//spaces[currentPosX][currentPosY] = 0;
		currentPosY -=1;
		//spaces[currentPosX][currentPosY] = 1;
		moves()
		for(var x=0; x<5; x++){
			for(var y=0;y<5;y++){
				console.log(spaces[x][y]);
			}
		}
	}
}
function right(event){
	var pressed = event.key;
	if(pressed == "d"){
		//spaces[currentPosX][currentPosY] = 0;
		currentPosY +=1;
		//spaces[currentPosX][currentPosY] = 1;
		moves()
		for(var x=0; x<5; x++){
			for(var y=0;y<5;y++){
				console.log(spaces[x][y]);
			}
		}
	}
}

function tempted(x){
	currentID = x.id;
	console.log(currentID);
}
function barrier() {
	for(var barrier)
	{
		if(i=0;i<1; i++)
		{
			
		}
	}
}