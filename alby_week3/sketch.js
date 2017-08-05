//Awesome trick

function setup() {
  createCanvas(600,400)
}
 /*
 Now we create the program that draw a new shape depending on where the mouse is.
 To do that,the order of the program flow matters especially when using if else block,
 Since when one block evaluate to true, the program step out of if blocks and exec. next code that folloes.
 
 So here is the trick ,we reverse the order of if statements since draw() loops over and over.
 Tip: Try to remove else in if else blocks and create an amazing feature.If u do so each If block will be 
 treated(executed) separately(they do not relate to each other)
 */
function draw() {

  background(0);
  noFill();
  stroke(255);
  strokeWeight(3);
  
  if(mouseX>250){
  ellipse(300,200,100,100);	
  }
  
  //else 
  if(mouseX>150){
    if(mouseX>300 && mouseX<400 && mouseY>200 && mouseY<300){
  		fill(255,0,200);
  		if(mouseIsPressed){background(250,255,70);}
    }
  rect(300,200,100,100);	
  }
  
  //else 
  if(mouseX>50){
  line(0,0,width,height);	
  }
  else{
  	point(300,200);
  }
}
