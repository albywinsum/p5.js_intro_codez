//Define Bubble constructor:

function Bubble(x,y){
	this.x=x;
	this.y=y;
	this.life_span=255;

this.display=function(){
	noStroke(); //stroke(255);
	fill(255,this.life_span);
	ellipse(this.x,this.y,23,23);
}

/*
this.isFinished=function(){//It check if the object shud be deleted based on the conddition
	if(this.life_pan<0){
		return true;
	}
	else{
		return false;
	}
}
*/

this.update=function(){
	this.x+=random(-1,1);
	this.y+=random(-1,1);
	this.life_span--;
}
}