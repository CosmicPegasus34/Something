var spaces = [
	[1, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0]
]
var currentPosX, currentPosY;
currentPosX =0; currentPosY=0;
function down(event){
	var pressed = event.key;
	if(pressed == "s"){
		spaces[currentPosX][currentPosY] = 0;
		spaces[currentPosX+1][currentPosY] = 1;
		for(var x=0; x<8; x++){
			for(var y=0;y<7;y++){
				console.log(spaces[x][y])
			}
		}
	}
}
function up(event){
	var pressed = event.key;
	if(pressed == "w"){
		spaces[currentPosX][currentPosY] = 0;
		spaces[currentPosX-1][currentPosY] = 1;
		for(var x=0; x<8; x++){
			for(var y=0;y<7;y++){
				console.log(spaces[x][y])
			}
		}
	}
}
function left(event){
	var pressed = event.key;
	if(pressed == "a"){
		spaces[currentPosX][currentPosY] = 0;
		spaces[currentPosX][currentPosY-1] = 1;
		for(var x=0; x<8; x++){
			for(var y=0;y<7;y++){
				console.log(spaces[x][y])
			}
		}
	}
}
function right(event){
	var pressed = event.key;
	if(pressed == "d"){
		spaces[currentPosX][currentPosY] = 0;
		spaces[currentPosX][currentPosY+1] = 1;
		for(var x=0; x<8; x++){
			for(var y=0;y<7;y++){
				console.log(spaces[x][y])
			}
		}
	}
}

