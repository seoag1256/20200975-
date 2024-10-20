let img;

function setup() {
  createCanvas(1280, 720);
  img = loadImage("jj.png");
}

function draw() {
  image(img, 0, 0, 1280, 720);
}
