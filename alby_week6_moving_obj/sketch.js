//Create an empty array called bubbles:
var bubbles=[];
function setup() {
  createCanvas(599,399);
  //Array of objects, and its useful:
  
for(var i=0; i<19; i++){  //Dynamically putting objects into bubbles Array:
  bubbles[i]={
	x:random(0,width), //x:300,
	y:random(0,height), //y:200,
	
	display:function(){
	stroke(255);
	strokeWeight(3);
	noFill();
	ellipse(this.x,this.y,23,23);
},
  move:function(){
	this.x+=random(1,-1);
	this.y+=random(1,-1);
}
}
}
//print(bubbles); Print the array:
}

function draw() {
 background(0); 
 
 for(var i=0; i<bubbles.length; i++){  //Looping through all obects:
 bubbles[i].display();
 bubbles[i].move();
 }
}