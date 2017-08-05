function setup() {
  createCanvas(590,270);
}

function draw() {
  fill(255,0,0);
  background(255);
  ellipseMode(CENTER);
  rectMode(CENTER);
  
  
  //body
  rect(50,129,25,100);
  point(50,129);
  
  //head
  fill(0,100,255)
  ellipse(50,79,50,50);
  
   //eyes
   fill(0,255,0);
   ellipse(31,79,15,30);
   ellipse(69,79,15,30);
   
   //legs
   strokeWeight(3);
   line(62.5,179,70,191);
   line(37.5,179,29.5,191);
}