//Creating custom variables and objects
var col=0; r=0; b=255;

function setup() {
  createCanvas(550,400);
   //background(col);The background will be drawn once, since setup() run only once:
}

//draw() loops over and over!.
function draw() {
  //Draw an ellipse where the mouse moves:
  //col=map(mouseX,0,550,0,255); this is another inefficient way of doing mapping: col=mouseX or col=mouseX/2:
  
  r=map(mouseX,0,550,0,255); //map variable r with mouseX:
  b=map(mouseX,0,550,255,0); //map variable b with mouseX in opposite range:
  
  //background(col);
  background(r,0,b);
  noStroke();
  fill(250,118,222);
  ellipse(mouseX,mouseY,59,59);
  
}

function mousePressed(){
  background(250,250,100);
}