const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

let Points = [];
let numberOfPoints = 4;

canvas.width = width;
canvas.height = height;

//scope
let graph, A,B,C,S, l, m;

graph = new Graph();
A = new Point(300, 300, 15, "rgba(255,0,0,0.3)", true);
B = new Point(500, 200, 15, "rgba(255,0,0,0.3)", true);
C = new Point(400, 400, 15, "rgba(0,255,0,0.3)", true);
S = new Point(0, 0, 10, "white", false);

//y = slope * x + intercept
l = new LinearFunction(0,0);
m = new LinearFunction(0,0);

Animate();

function Animate(){
	requestAnimationFrame(Animate);
	context.clearRect(0, 0, width, height);
	graph.draw();
	
    //slope = rise / sun
	l.slope = (B.y - A.y)/(B.x - A.x);
	
	//intercept = y - - slope * x
	l.intercept = B.y - l.slope * B.x;
	
	//perpendicular line on l
	// slope = -1/l.slope
	m.slope = -1 / l.slope;
	
	// through point C
	m.intercept = C.y - m.slope * C.x;
    
    drawLine(m);
    drawLine(l);

	//intersection l and m
	//l: y = l.slope * x + l.intercept;
	//l: y = n.slope * x + n.intercept;
	//l.x = m.x
	//l.y = m.y =>
	//l.slope * x + l.intercept = m.slope * x + m.intercept
    //l.slope * x + l.intercept = m.slope * x= + m.intercept - m.slope * x
	//l.slope * x - m.slope * x = + m.intercept - l.intercept
	//(l.slope - m.slope) * x = (m.intercept - l.intercept)
	//x = (m.intercept - l.intercept)/(l.slope - m.slope)
	
	S.x = (m.intercept - l.intercept)/(l.slope - m.slope);
	S.y = l.y(S.x);
	
	
	
	A.draw();
	B.draw();
	C.draw();
	S.draw();
}



function drawLine(line){
	context.beginPath();
	context.lineWidth = "5";
	context.moveTo(0,line.y(0));
	context.lineTo(width,line.y(width));
	context.closePath();
	context.stroke();
}