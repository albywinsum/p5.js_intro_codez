// Modified version of moving object program, but here we start the program without object:
var bubbles=[]; //Create an empty array called bubbles:
function setup() {
  createCanvas(599,399);

}

function draw() {
 background(0); 
 
 for(var i=bubbles.length-1; i>=0; i--){  //Looping through all obects:
 if(bubbles.length>50){
 	bubbles.splice(0,1);
 }else{
 bubbles[i].display();
 bubbles[i].move();
}
}
}

