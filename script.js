var cactus = {
	x: 200,
	y: 230,
	speedX: 1,
}

var dino = {
	x: 20, 
	y: 230, 
	width: 25, 
	height: 50,
	speedY: 0,
}

var score = 0


function preload(){
	cactus.image = loadImage('cactus.png')
	dino.image = loadImage('dino.png')
}

function setup() {
  createCanvas(300,300)
    
}

function draw() {
  background(255);
	fill("black")
	text(`SCORE ${score}`, 20, 20)
	fill("green")
	rect(0, 280, 300, 20)
	image(cactus.image, cactus.x, cactus.y)
	image(dino.image, dino.x, dino.y, dino.width, dino.height)
	

	// Reset cactus if it gets to the left side
	


	// Have the dino jump when the space bar is clicked.
	

	// If the dino collides with the cactus, reset the cactus. If the cactus makes it all the way to the left

	
	
}