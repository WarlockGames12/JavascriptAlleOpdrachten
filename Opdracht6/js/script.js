const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

let Points = [];
let numberOfPoints = 4;

canvas.width = width;
canvas.height = height;

let bg = new Graph();
let A,B,dx,dy,line,C,D, points;

A = new Point(200, 200, 20, "red", true);
B = new Point(800, 200, 20, "blue", true);
C = new Point(0, 0, 10, "white", false);
D = new Point(0, 0, 10, "white", false);
E = new Point(300, 300, 10, "black", true);
Point = [];
for(let i = 0; i<100; i++){
	let E = new Point(Math.random()*width, Math.random()* height, 10, "black", false);
	Point.push(E);
}
line = new LinearFunction(0,0);

animate();

function animate(){
   requestAnimationFrame(animate);
   context.clearRect(0,0,width,height);
   bg.draw();
   A.draw();
   B.draw();
	
     dx = B.x - A.x;
     dy = B.y - A.y;
     line.slope = dy/dx;
     line.intercept = A.y - line.slope*B.x;
	
     C.x = 0;
     C.y = line.y(0);
     C.draw();


	 D.x = width;
     D.y = line.y(width);
     D.draw();

	context.beginPath();
	context.lineStyle = "4";
	context.moveTo(C.x, C.y);
	context.moveTo(D.x, D.y);
	context.closePath();
	context.stroke();
	
	
	if(E.y > line.slope * E.x + line.intercept){
		E.color = "red";
	}else{
		E.color = "green";
	}
    E.draw();
	Point.map((p)=>{
		if(p.y < p.x * line.slope + line.intercept){
			p.color = "red";
		} else{
		   p.color = "greem";
		}
		p.draw();
	})
}
