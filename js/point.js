class Point{
	constructor(x, y, radius, color){
		console.log("Je moeder");
		//pingas
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
	}
	
	draw(){
		context.beginPath();
		context.strokeStyle = "black";
		context.fillStyle = this.color;
		context.lineWidth = "2";
		context.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
		context.closePath();
		context.stroke();
		context.fill(); 
	}
}