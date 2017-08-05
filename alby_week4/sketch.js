// Some cool trick with For Loop(){}
var offset=0;

function setup() {
  createCanvas(600,400)
}

function draw() {
  
  background(0);
  noFill();
  stroke(255);
  strokeWeight(3);
  
  for(var x=0; x<mouseX; x+=50){
  	for(var y=0; y<mouseY; y+=50){//Try also y<height
  	fill(random(255),0,random(200))
  	ellipse(x,y,25,35);
  	}
  }
  
  /*
  Try to do this ,separate each for loop:
  for(var y=0; y<mouseY; y+=50){
  	fill(random(255),0,random(200))
  	ellipse(x,200,35,35);
  	}
  	
  	for(var x=0; x<mouseX; x+=50){
  	fill(random(255),0,random(200))
  	ellipse(200,y,35,35);
  	}
  */
}

function mousePressed(){
	
}