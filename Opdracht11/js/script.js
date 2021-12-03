const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

let Points = [];
let numberOfPoints = 4;

canvas.width = width;
canvas.height = height;

let graph,A,B,l,C,m, D, n;

graph = new Graph();
A = new Point(200, 200, 15, "white", true);
B = new Point(500, 100, 15, "white", true);
C = new Point(300, 300, 14, "red", true);
D = new Point(400, 300, 14, "green", true);
l = new LinearFunction(0, 0);
m = new LinearFunction(0, 0);
n = new LinearFunction(0, 0);


function animate(){
	requestAnimationFrame(animate)
	context.clearRect(0,0,width,height);
	graph.draw();
    
	//slope = dy/dx
	l.slope = (B.y - A.y)/(B.x - A.x);
	// y = slope*x + intercept
	// intercept = y - (slope*x)
	l.intercept = A.y - l.slope*A.x;
	
	drawLine(l, "green");
	
	//line m
	m.slope = l.slope;
	m.intercept = C.y - m.slope * C.x;
	drawLine(m, "red");
	
	//line n
	n.slope = -1/l.slope;
	n.intercept = D.y - n.slope*D.x;
	drawLine(n, "orange");
	
	
	A.draw();
    B.draw();
	C.draw();
	D.draw();
	
	
}

function drawLine(line, color){
	context.beginPath();
	context.lineWidth = "4";
	context.strokeStyle = color;
	context.moveTo(0,line.y(0));
	context.lineTo(width, line.y(width));
	context.closePath();
	context.stroke();
}

animate();