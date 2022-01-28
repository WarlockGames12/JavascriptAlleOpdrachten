const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

let Points = [];
let numberOfPoints = 4;

canvas.width = width;
canvas.height = height;

let background, face,time, hours, minutes, seconds,hourhand,minuteshand,secondhand,midX,midY;
background = new Graph();

face = new Image();
face.src = "img/MicrosoftTeams-image.png";

hourhand = new Image();
hourhand.src = "img/MicrosoftTeams-image (1).png";


minuteshand = new Image();
minuteshand.src = "img/MicrosoftTeams-image (2).png";


secondhand = new Image();
secondhand.src = "img/MicrosoftTeams-image (3).png";

animate();

function animate(){
	midX = width/2 - (face.width)/2;
	midY = height/2 - (face.height)/2;
	requestAnimationFrame(animate);
	context.clearRect(0,0,width,height);
	background.draw();
	
	time = new Date();
    hours = time.getHours();
    minutes = time.getMinutes();
    seconds = time.getSeconds();
	
	//drawImage(Image, x,y,h,w);
	
	context.drawImage(face, midX, midY);
	
	hourhand.angle = hours/12 * 2 * Math.PI + minutes(12*60) * 2 * Math.PI;
	minuteshand.angle = minutes/60 * 2 * Math.PI;
	secondhand.angle = seconds/60 * 2 * Math.PI;
	
	context.save();
	context.translate(width/2,height/2);
	context.rotate(hourhand.angle);
	context.rotate(hourhand.angle);
	context.drawImage(hourhand,-20,-120);
	context.restore();
	
	context.save();
	context.translate(width/2,height/2);
	context.rotate(minuteshand.angle);
	context.rotate(minuteshand.angle);
	context.drawImage(minuteshand,-20,-186);
	context.restore();
	
	context.save();
	context.translate(width/2,height/2);
	context.rotate(secondhand.angle);
	context.rotate(secondhand.angle);
	context.drawImage(secondhand,-70,-240);
	context.restore();
	
	
	
}