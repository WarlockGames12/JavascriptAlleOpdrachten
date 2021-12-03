class Point{
	constructor(x,y,radius,color,draggable){
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
		this.draggable = draggable || false;
		if(draggable){
			this.drag();
		}
	}
	
	draw(){
		context.fillStyle = this.color;
        context.strokeStyle = "black";
        context.lineWidth = "2"
        context.arc(this.x,this.y,this.radius,0,2*Math.PI)
        context.closePath();
        context.stroke();
        context.fill();
	}
	
	drag(){
		let dragging = false;
		addEventListener('mousedown', (e) =>{
			// a^2 + b^2 = c^2
			// c^2 = a^2 + b^2
			//  ---------------
			// |               |
			// |               |
			// |               |
			// |               |
			//  ---------------
			
			
			let a = e.clientX - this.x;
			let b = e.clientY - this.y;
			let distance = Math.sqrt(a*a + b*b);
			
			if(distance < this.radius){
				console.log("op de cirkel geklikt");
				dragging = true;
			}
			
			console.log(e.clientX, e.clientY);
		})
		addEventListener('mousemove', (e) =>{
			if(dragging){
				this.x = e.clientX;
			    this.y = e.clientY;
			}
			
		})
		addEventListener('mouseup', () =>{
			dragging = false;
		})
		
	}
}