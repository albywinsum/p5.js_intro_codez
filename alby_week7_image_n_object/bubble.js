//Define Bubble constructor function: as it is the flexible way of creating objects.
function Bubble(x,y,img){
	this.x=x;
	this.y=y;
	this.img=img;
	
	this.display=function(){
		//ellipse(this.x,this.y,this.r*2,this.r*2);
		imageMode(CENTER);
		image(this.img,this.x,this.y);
	}
	
	this.update=function(){
		this.x+=random(-1,1);
		this.y+=random(-1,1);
	}
}