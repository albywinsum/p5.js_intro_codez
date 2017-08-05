//Creating some custom variableS and a nice randomly moving ellipses => Bouncing the ball Program:
var circle={
  x:50,
  y:200,
  wid:25,
  het:25
};
 //Below x=width of canvas, its a tick so that we can draw the ellipse in revise direction, map() can be used instead:
var circle2= {x:550, y:50};

var col={
  r:255,
  g:0,
  b:0
};

var speed=3;
function setup() {
   createCanvas(550,400);
   background(250,250,100);
}

function draw() {
  
  //Drawing an ellipse
  circle.x=random(0,width);// width ,a bult in variable has been used so that when we change the canvas width/height we don't have
  circle.y=random(0,height);//to change it every time:. width/height => return width/height of the canvas:
  //col.r=random(100,255);
  //col.b=random(100,199);

  fill(col.r,col.g,col.b);
  noStroke();
 // ellipse(circle.x,circle.y,circle.wid,circle.het);
  
  stroke(1);
  ellipse(circle2.x,circle2.y,39,39);
  
  if(circle2.x < 0 || circle2.x > width){
    speed=-speed;
  }
  circle2.x-=speed;; //This make the ellipse moves on its own i.e draw() loops over and over again:
  
}

function mousePressed(){
  ellipse(circle2.x,circle2.y+50,39,39);
}