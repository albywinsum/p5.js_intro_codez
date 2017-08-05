function mouseDragged(){
	//Adding object everytime a mouse is dragged or u can use mousePressed() function:
	bubbles.push(new Bubble(mouseX,mouseY));
}

function keyPressed(){
 	//Deleting the oldest element when  press a key:
	bubbles.splice(0,1);
}
function mousePressed(){
	for(var i=0; i<bubbles.length; i++){
	//Hint: try to do some other cool things when clicked i.e. change it to rectangle,shrink or grow ,move . 
	//Other features besides just changing its color.
  bubbles[i].clicked(); //call clicked() function for every bubble when the mouse is pressed on the page:
	}
}