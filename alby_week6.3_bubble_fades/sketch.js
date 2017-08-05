/*
  Here we want to explore how to delete objects:
  In the last tutorials we see how to use splice() function that is built-in  in javascript,which allows u to 
  delete items(element) from an array.

  But the issue here is how do u choose when to delete somethig and which this to delete,so i need to create an
  artificial scenario,some scenarios might be:-
         %*The thing(bubble) leave the screen
         %*another scenario might b its like  u hav some game and things collide and when they collide 
           one of them/all deleted
  But here what am gonna do is hav the objects fades out: so playing with fill() with a fourth argument(transparency)
*/
var bubbles=[]; //Creating an empty array called bubbles:
function setup() {
  createCanvas(599,399);
}

function draw() {
	background(0); 
	text("Click on the screen to draw a bubble",299,59);
	
	for(var i=bubbles.length-1;i>=0;i--){//Looping through the array backward
		bubbles[i].display();
		bubbles[i].update();// upadate location and life:span
		
		if(bubbles[i].life_span<0){//As u loop through an array for every element i check if t shud b deleted:
			bubbles.splice(i,1);//There must b a complex scenarios that determine whether  the object shud b
			//deleted or not ,in that case do the check in function rather than polluding this area with lot more codes:
			//i.e if(bubbles[i].isFinished) in test case
			
		}// Hint: Avoid modifying an array while looping t ,this cud in other scenarios really caused u a big problem.
	}//One solution to this cud b to go through the array backward like we did here.
}

function mousePressed(){
	//We start the program with nothing on the scree(only a text as a reminder) aand add a bubble where the mouse is
	//every time we click the mouse:
	bubbles.push(new Bubble(mouseX,mouseY));
}