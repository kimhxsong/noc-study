// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

const heights = [];
let sd = 0.5;
let sd_dir = 0.01;


// Example I.4
// function setup() {
//   createCanvas(900, 900);
//   walker = new Walker()
// }

// function draw() {
//         background(255);
//   const e = 2.71828183; //"e", see http://mathforum.org/dr.math/faq/faq.e.html for more info
//   let m = 0; //default mean of 0
//   for (let i = 0; i < width; i++)
//   {
//     let xcoord = map(i, 0, width, -3, 3);
//     let sq2pi = sqrt(2 * PI); //square root of 2 * PI
//     let xmsq = -1 * (xcoord - m) * (xcoord - m); //-(x - mu)^2
//     let sdsq = sd * sd; //variance (standard deviation squared)
//     heights[i] = (1 / (sd * sq2pi)) * pow(e, xmsq / sdsq); //P(x) function
//   }
  
//   sd += sd_dir;
//   if (sd > 2 || sd < 0.3) sd_dir *= -1;

//   // a little for loop that draws a line between each point on the graph
//   stroke(0);
//   strokeWeight(2);
//   noFill();
//   beginShape();
//   for (let i = 0; i < heights.length - 1; i++) {
//     let x = i;
//     let y = map(heights[i], 0, 1, height - 2, 2);
//     vertex(x, y);
//   }
//   endShape();
// }

// Exercise I.4
// Consider a simulation of paint splatter drawn as a collection of colored dots.
// Most of the paint clusters around a central position, but some dots do splatter
// out towards the edges. Can you use a normal distribution of random numbers to
// generate the positions of the dots? Can you also use a normal distribution of
// random numbers to generate a color palette? Try attaching a slider to standard
// deviation.

// function draw() {
//   let centerX = width / 2;
//   let centerY = height / 2;
//   let x = randomGaussian(centerX, 60);
//   let y = randomGaussian(centerY, 60);

//   noStroke(0);
//   fill(random(255), random(255), random(255), 30);
//   ellipse(x, y, 15, 15);
// }

// Exercise I.5
// A Gaussian random walk is defined as one in which the step size (how far the
// object moves in a given direction) is generated with a normal distribution.
// Implement this variation of the random walk.
class Walker {
	constructor() {
		this.x = width / 2;
		this.y = height / 2;
	}

	show() {
    noStroke();
    fill(0, 60)
		ellipse(this.x, this.y, 3, 3);
	}

	step() {

    let xstep = randomGaussian(0, 2);
    let ystep = randomGaussian(0, 2);

    this.x += xstep;
    this.y += ystep;
		this.x = abs(this.x % width)
		this.y = abs(this.y % height)
	}
}

let walker;

function setup() 
{
	createCanvas(450, 450);
	background(235);
	walker = new Walker()
}

function draw()
{
  walker.step()
  walker.show()
}