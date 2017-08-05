//Create an empty array called bubbles:
var bubbles=[];
function setup() {
  createCanvas(599,399);
  //Array of objects, and its useful:
  
for(var i=0; i<19; i++){  //Dynamically putting objects into bubbles Array:
  bubbles[i]= new Bubble();
}
}

function draw() {
 background(0); 
 
 for(var i=0; i<bubbles.length; i++){  //Looping through all obects:
 bubbles[i].display();
 bubbles[i].move();
 }
}


/*Define a constructor function which is a flexible way of creating new object, it acts as a tempelate:
This now solve our last example problem, of duplictaing the codes when we want to create objects later
And solve the prob. when we have many properties for an object:
*/
function Bubble(){
	this.x=random(0,width); //Initial x position(coordinate) picked randomly:
	this.y=random(0,height);
	
	this.display=function(){
	stroke(255);
	strokeWeight(3);
	noFill();
	ellipse(this.x,this.y,23,23);
	}
	
	this.move=function(){
	this.x+=random(1,-1);
	this.y+=random(1,-1);
	}
}