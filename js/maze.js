var spaces = [
	[1, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0]
]
function down(event){
	var pressed = event.key;
	if(pressed == "s"){
		spaces[0][0] = 0;
		spaces[0][1] = 1;
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
		spaces[0][0] = 0;
		spaces[0][1] = 1;
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
		spaces[0][0] = 0;
		spaces[0][1] = 1;
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
		spaces[0][0] = 0;
		spaces[0][1] = 1;
		for(var x=0; x<8; x++){
			for(var y=0;y<7;y++){
				console.log(spaces[x][y])
			}
		}
	}
}