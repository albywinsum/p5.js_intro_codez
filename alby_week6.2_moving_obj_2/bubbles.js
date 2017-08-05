
/*
  Define a constructor function which is a flexible way of creating new object, it acts as a tempelate:
  This now solve our last example problem, of duplictaing the codes when we want to create objects later
  and solve the prob. when we have many properties for an object:
*/
function Bubble(x,y){
	this.x=x; //Initial x position(coordinate) picked randomly:
	this.y=y; 
	this.col=color(255,119);//this is added so that color also changes:coz t should b a variable for it to change.
	
	this.display=function(){
	stroke(255);
	strokeWeight(3);
	fill(this.col); //fill(255,0,150,50); noFill(); was hard_coded before.
	ellipse(this.x,this.y,23,23);
	}
	 
	this.move=function(){
	this.x+=random(1,-1);
	this.y+=random(1,-1);
	}
	
	this.clicked=function(){
	/*
	Now checking if the mouse is inside the buble. Hint: d is the distance from where the mouse is clicked
	to the centre of the bubble 
	so its only whe d<r (where r=radius of the bubble) the mouse is clicked inside the bubble object:
	*/
	var d=dist(mouseX,mouseY,this.x,this.y);
	if(d<11.5){
		this.col=color(random(250),random(250),random(100)); //color(255,0,200); its kind of purple:
		//Hint: try to do some other cool things when clicked i.e. change it to rectangle,shrinks or grow.
	}
	}
}