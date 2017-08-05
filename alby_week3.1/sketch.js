// A ROLL OVER PROGRAM
var on=false; offset=0;

function setup() {
  createCanvas(550,400)
}

function draw() {
  if(on){
  	background(20,250,0);
  }
  else{
  	background(0);
  }point(300,200);
  
  noFill();
  stroke(255);
  strokeWeight(3);
    
   //This make sure that the mouse is within the rectangle:
  if(mouseX>250 && mouseX<350 && mouseY>150 && mouseY<250){
  		fill(255,0,200);
  	}
  rectMode(CENTER);
  rect(300,200,100,100);
  point(300,200);
  
  for(var x=0; x<width; x+=50){
  	fill(random(255),0,random(200))
  	ellipse(x+offset,200-offset,35,35);
  }
  	offset++;
}

function mousePressed(){
	//This make sure that the mouse is within the rectangle:
  	if(mouseX>250 && mouseX<350 && mouseY>150 && mouseY<250){
  		on=!on;
  	}
}