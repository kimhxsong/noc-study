class Walker {
	constructor() {
		this.x = width / 2;
		this.y = height / 2;
	}

	show() {
		stroke(0);
		point(this.x, this.y);
	}

	step() {
		// let xstep = floor(random(3)) - 1;
		// let ystep = floor(random(3)) - 1;
		let xstep = random(-1, 1);
		let ystep = random(-1, 1);
  
		this.x += xstep;
		this.y += ystep;
	}
}

function setup() 
{
	walker = new Walker()
	createCanvas(400, 400);
	background(255);
}

function draw()
{
	walker.step();
	walker.show();
}
