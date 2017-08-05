//More on functions:

function setup() {
	
  createCanvas(599,399);
  var angle=degrees(PI/2);
  var km=milesToKm(25.3);
  print(angle);
  print(km);
  
}

function draw() {
	background(50);
  lollipop(100,100,50);
  lollipop(300,200,150);
}

function lollipop(x,y,diameter){
	fill(0,200,255);
	rect(x-10,y,20,150);
	
	
	fill(255,0,200);
	ellipse(x,y,diameter,diameter);
	line(x-10,y,x+90,y-50);
	
}

function milesToKm(miles){
	var km=miles*1.6;
	return km;
}