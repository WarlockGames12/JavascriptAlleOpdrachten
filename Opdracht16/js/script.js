const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

let Points = [];
let numberOfPoints = 4;

canvas.width = width;
canvas.height = height;

let background, car, pos, vel, FrontWheel, backwheel;

background = new Graph();

car = new Image();
car.src = "img/MicrosoftTeams-image.png";

FrontWheel = new Image();
FrontWheel.src = "img/MicrosoftTeams-image (1).png";
FrontWheel.angle = 0;
FrontWheel.dAngle = vel / 0.5 * FrontWheel.width;

backwheel = new Image();
backwheel.src = "img/MicrosoftTeams-image (1).png";
backwheel.angle = 0;
backwheel.dAngle = vel / 0.5 * backwheel.width;

pos = 0;
vel = 2;

car.addEventListener("load",() =>{
	animate();
})

function animate(){
	requestAnimationFrame(animate);
	context.clearRect(0,0,width,height);
	background.draw()
	context.drawImage(car, pos, height-car.height);
	pos += vel;
	
	
	context.save();
	context.translate(215+pos,850);
    context.rotate(FrontWheel.angle);
	context.drawImage(FrontWheel, -FrontWheel.width/2, -FrontWheel.width/2);
	context.restore();
	
	context.save();
	context.translate(750+pos,850);
	context.rotate(backwheel.angle);
	context.drawImage(backwheel, -backwheel.width/2, -backwheel.width/2);
	context.restore();
	
    FrontWheel.angle += vel / 0.5*FrontWheel.width;
	backwheel.angle += vel / 0.5*backwheel.width;
	
	if(pos > width){
		pos = -car.width;
	}
}


