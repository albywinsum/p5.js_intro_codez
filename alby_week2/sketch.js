//Create a painting program.
function setup() {
  createCanvas(550,400);
   background(0);//The background will be drawn once, since setup() run only once:
}

function draw() {
  //draw() loops over and over!.
 
  
  //Draw an ellipse where the mouse moves:
  noStroke();
  fill(250,200,200,50);
  ellipse(mouseX,mouseY,25,25);
  
  //Draw a rectangle:
  fill(200,250,200);
  rect(400,100,50,50);
  
}

function mousePressed(){
  background(250,250,100);
}