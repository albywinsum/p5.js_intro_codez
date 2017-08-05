//Define Bubble constructor function: as it is the flexible way of creating objects.
function Bubble(x,y){
	this.x=x;
	this.y=y;
	this.r=11.5;
	this.col=color(255);
	
	this.display=function(){
		stroke(255);
		fill(this.col);
		ellipse(this.x,this.y,this.r*2,this.r*2);
	}
	
	this.update=function(){
		this.x+=random(-1,1);
		this.y+=random(-1,1);
	}
	
	this.intersects=function(other){ 
		  /*
		for(var i=0; i<other.length;i++){
		var d=dist(this.x,this.y,other[i].x,other[i].y);
		if(d < (this.r + other[i].r)&& other[i]!=this){
			return true;
			other[i].changeColor();
			*/
			
			var d=dist(this.x,this.y,other.x,other.y);
			if(d < (this.r + other.r)){
			return true;
			
		}else
		{
			return false;
		}
		}
	this.changeColor=function(){
		this.col=color(random(255),random(255),random(255));
	}
}