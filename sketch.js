let p;
let q;
let particles = [];


function setup() {

  createCanvas(600, 400);
  //frameRate(40)

}


function draw() {

  background(25, 25, 25);

  if (rectOver(280, 360, 40, 40) && mouseIsPressed) {
    
    p = new Particle(0, 400, random(1, 5), random(-5, -8));
    particles.push(p);
    q = new Particle(600, 400, random(-1, -5), random(-5, -8));
    particles.push(q);

  }


  for (let i = particles.length - 1; i >= 0; i--) {
    
    particles[i].update();
    particles[i].show();

    if (particles[i].isGone()) {
      particles.splice(i, 1);
    }

  }


  fill(255, 50);
  rect(280, 360, 40, 40);

  //console.log(particles.length)

}


function rectOver(x, y, rectwidth, rectheight) {
  
  if (
    mouseX <= width && mouseY <= height &&
    mouseX >= x && mouseX <= x + rectwidth &&
    mouseY >= y && mouseY <= y + rectheight
  ) {
    return true;
  }

  else {
    return false;
  }

}

class Particle {

  constructor(x, y, vel_x, vel_y) {

    this.pos = createVector(x, y);
    this.vel = createVector(vel_x, vel_y);

    this.gravity = createVector(0, 2);
    this.gravity.setMag(0.09);

    this.size = random(8, 16);
    this.clr = createVector(random(255), random(255), random(255));

  }

  show() {

    noStroke();
    fill(this.clr.x, this.clr.y, this.clr.z,);
    ellipse(this.pos.x, this.pos.y, this.size);

  }

  update() {

    this.vel.add(this.gravity);
    this.pos.add(this.vel);

  }

  isGone() {

    return this.pos.y > height || this.pos.x > width || this.pos.x < 0;

  }

}
