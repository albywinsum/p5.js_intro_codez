//Here we want to describe how to load an image in p5.js
var bubbles=[]; //declare bubbles array
var flower=[];  //Declare a variable to refer to the image to be loaded:

function preload(){
	/*
	  In preload() function u want to load any media to make sure its available for the sketch when it really start
	  in the setup() function.
	  So the sketch start in setupp() ,now this is like a secret function that u can call before setup():
	  So this is really special for loading images,loading sounds,loading data files as u will see later such as
	  spreadsgheets,etc.
	*/
	for(i=0;i<3;i++){
	flower[i]=loadImage('images/flower'+i+'.png'); //loading image in "flower" global variable in the main sketch here:
	  /*
	  See how we dynamically load different image each time we loop,coz some how we need the text passed in loadImage()
  	to be dynamic
   	Hint: plus(+) with numbers is "addition", plus(+) with text is join, so we that fact with trick here:
	  */
	}
}

function setup() {
  createCanvas(599,399);
}

function mousePressed(){
	var r=floor(random(0,flower.length));
	bubbles.push(new Bubble(mouseX,mouseY,flower[r]));//floor has been used to get rid of decimals. check also 
	//ceil() and round() function:
}

function draw() {
	background(0);
	
	for(var i=bubbles.length-1;i>=0;i--){
		bubbles[i].display();
		bubbles[i].update();
	}
  
}