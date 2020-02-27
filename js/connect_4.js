var spaces = [
	[1,0,0,0,0,0,0],
	[0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0],
	
];
function mDown(event){
	var pressed = event.key;
	if(pressed == "s")
	{
		spaces[0][0]=0;
		spaces[0][1]=1;
		for(var x=0;x<8;x++)
		{ 
			for(var y=0;y<7;y++)
			{
				console.log(spaces[x][y])
			}
			
		}
	}
	
}