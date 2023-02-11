// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// An array to keep track of how often random numbers are picked
// let randomCounts = [];

// function setup() {
//   createCanvas(450, 450);
//   for (let i = 0; i < 20; i++) {
//     randomCounts[i] = 0;
//   }
// }

// function draw() {
//   background(255);

//   // Pick a random number and increase the count
//   let index = int(acceptreject() * randomCounts.length);
//   randomCounts[index]++;

//   // Draw a rectangle to graph results
//   stroke(0);
//   strokeWeight(2);
//   fill(127);

//   let w = width / randomCounts.length;

//   for (let x = 0; x < randomCounts.length; x++) {
//     rect(x * w, height - randomCounts[x], w - 1, randomCounts[x]);
//   }
// }

// // An algorithm for picking a random number based on monte carlo method
// // Here probability is determined by formula y = x
// function acceptreject() {
//   // We do this “forever” until we find a qualifying random value.
//   while (true) {
//     // Pick a random value.
//     let r1 = random(1);
//     // Assign a probability.
//     let probability = r1;
//     // Pick a second random value.
//     let r2 = random(1);

//     //{!3} Does it qualify?  If so, we’re done!
//     if (r2 < probability) {
//       return r1;
//     }
//   }
// }


// Exercise I.6
// Use a custom probability distribution to vary the size of a step taken by
// the random walker. The step size can be determined by influencing the range
// of values picked. Can you map the probability to a quadratic function—
// i.e.making the likelihood that a value is picked equal to the value squared?

class Walker {
	constructor() {
		this.centerX = width / 2;
		this.centerY = height / 2;
    this.x = this.centerX;
    this.y = this.centerY;
	}

	show() {
    point(this.x, this.y);
	}

	step() {
    let step = 10;
    let stepx = step * acceptreject();
    let stepy = step * acceptreject();
    let sign = [-1, 1];

    this.x += stepx * sign[round(random(1))];
    this.y += stepy * sign[round(random(1))];
    this.x = this.x % (width + 1);
    this.y = this.y % (height + 1);
	}
}

let walker;

function setup() 
{
	createCanvas(450, 450);
	background(235);
	walker = new Walker()
}


function acceptreject() {
  // We do this “forever” until we find a qualifying random value.
  while (true) {
    // Pick a random value.
    let r1 = random(1);
    // Assign a probability.
    let probability = r1 * r1;
    // Pick a second random value.
    let r2 = random(1);

    //{!3} Does it qualify?  If so, we’re done!
    if (r2 < probability) {
      return r1;
    }
  }
}

function draw()
{
  walker.step()
  walker.show()
}


