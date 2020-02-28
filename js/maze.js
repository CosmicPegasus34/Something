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
		
	}
}
function up(event){
	var pressed = event.key;
	var markers = "r"+currentPosX+"c"+currentPosY;
	var checked = document.getElementById(markers).style.backgroundColor;
	if(pressed == "w"){
		if(checked == "red")
		{
			
		}
		else{
			currentPosX-=1;
			moves()
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
				console.log(spaces[currentPosX][currentPosY]);
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
		
	}
}

function tempted(x){
	currentID = x.id;
	console.log(currentID);
}

