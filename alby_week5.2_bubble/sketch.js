//Functions inside an object, and buble

var bubble={
	x:300,
	y:200,
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
function setup(){
  createCanvas(599,399);
}

function draw() {
 background(0); 
 bubble.display();
 bubble.move();
}
