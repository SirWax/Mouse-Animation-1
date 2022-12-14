let mouse_hist = [];
var x = 0;
var y = 0;
var size = 0;
var step = 0;
var particles = [];
var indexes = [];
let colors = ['red', 'yellow', 'white', 'lime', 'pink','blue','cyan', 'orange', 'purple']
var dt = 0.4;

function setup() {
  createCanvas(1920, 1080);
}

function draw() {
  background(0);
  if (x != mouseX || y != mouseY){;
    size = sqrt(pow(mouseX - x, 2) + pow(mouseY - y, 2));
    x = mouseX;
    y = mouseY;
    var p = new Particle (x, y)
    particles.push(p);
    mouse_hist.push(createVector(x, y));
    // size += 2.1;
    step = 2;
  }
  size /= 10;
  size = min(size, 10);
  stroke('yellow');
  noFill();
  beginShape();
  for (var hist of mouse_hist){
    strokeWeight(size);
    strokeCap(ROUND)
    vertex(hist.x, hist.y);
  }
  endShape();

  size -= step;
  step ++;
  size = max(0, size);
  if (mouse_hist.length > size) {
    mouse_hist.splice(0, 1);
  }


  for (var i = 0; i < particles.length; i++){
    let p = particles[i];
    if (p.size < 0.1 || p.velocity <0.1) {
      particles.splice(i,1);
    } else {
    p.show();
    }
  }
  console.log(particles.length)
}
