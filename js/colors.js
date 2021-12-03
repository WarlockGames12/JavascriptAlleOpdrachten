const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;


anime();

function anime(){
   requestAnimationFrame(anime);
   context.clearRect(0, 0, width, height);
   if(Math.random()<0.1){
	   let x = Math.random()*width;
	   let y = Math.random()*height;
	   let p = new point(x, y, 50, "yellow")
	   //p.draw
	   myArray.push(p);
   }
	
   for(let i = 0; i<myArray.length; i++){
	   myArray[i]. += 1;
	   myArray[i].draw();
	   
	   if(myArray[i].x > width){
		   myArray.splice(i,1);
	   }
   }
   
}

