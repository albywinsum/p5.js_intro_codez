//An amazing old game(better version of bouncing a ball program):
//Also we break the program into modules:
var ball = {
	x:300,
	y:200,
	xspeed:-4,
	yspeed:-3
}

function setup() {
  createCanvas(599,399);
  background(0);
}

function draw() {
  display();
  bounce();
  move();
}

function display(){
	stroke(255);
  strokeWeight(2);
  noFill();
  ellipse(ball.x,ball.y,23,23);	
  //ellipse(ball.x,ball.y+19,23,23);
}

function bounce(){
	if(ball.x <0 || ball.x >width){
  	ball.xspeed=-ball.xspeed;
  }
  
 if(ball.y <0 || ball.y >height){
  	ball.yspeed=-ball.yspeed;
  }
}

function move(){
	ball.x+=ball.xspeed;
  ball.y+=ball.yspeed;	
}

function mousePressed(){
  background(250,200,200);
}