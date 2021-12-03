class GraphBackground {
	
	constructor(){
		this.alpha = 0.3;
		
	}
	
	draw(){
		for(let i=0; i<height;i++){
		if(i&20 == 0){
			if(i%100 == 0){
				context.linewidth = "5";
			}else{
				context.lineWidth = "1";
			}
			context.strokeStyle = "rgba(0, 0, 0," + this.alpha + ")";
			console.log(i);
		    console.log("Je moeder");
		    context.beginPath();
		    context.moveTo(10, 10);
		    context.lineTo(width, i);
		    context.closePath();
		    context.stroke();
	}
	
	}
		for(i=0; i=200; i++){
			if(i%10 == 0){
				context.beginPath();
			    context.moveTo(i, 0);
			    context.lineTo(i, 100);
				context.closePath();
				context.stroke();
			}
			
		}
  }
}
