//Here we create an object to check if the bubbles intersects and do something:
var bubbles=[]; //declare bubbles array
function setup() {
  createCanvas(599,399);
  for (var i=0; i<19; i++){
  bubbles[i]=new Bubble(random(width), random(height));
  }
}

function draw() {
	background(0);
	
	for(var i=bubbles.length-1;i>=0;i--){
		bubbles[i].display();
		bubbles[i].update();
	
	for(var j=bubbles.length-1;j>=0; j--){//here u culd do i<j or j=i+1 inside a for loop instead of If(i!=j) inside if
	if(i!=j && bubbles[i].intersects(bubbles[j])){
		bubbles[i].changeColor();
	}
	}
	}
  
}