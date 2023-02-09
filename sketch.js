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
		let r = random(1);

		if (r < 0.5) {
		// https://p5js.org/reference/#/p5/mouseX
		  this.x += mouseX > this.x ? 1 : -1;
		  this.y += mouseY > this.y ? 1 : -1;
		} else {
			let xstep = floor(random(3)) - 1;
			let ystep = floor(random(3)) - 1;

			this.x += xstep;
			this.y += ystep;
		}

		this.x %= width;
		this.y %= height;
	}
}

let walker;

function setup() 
{
	createCanvas(400, 400);
	background(255);
	walker = new Walker()
}

function draw()
{
	walker.step();
	walker.show();
}
