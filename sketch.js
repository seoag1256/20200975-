let img;

function setup() {
  createCanvas(1280, 720);
  img = loadImage("jj.png");
}

function draw() {
  
  image(img, 0, 0, 1280, 720);
  
  noStroke();
  
  fill(243, 210, 193, 255);
  triangle(547, 255, 610, 273, 568, 316);

  
  
  
  if (mouseIsPressed) {
    // 좌표 출력
    console.log(mouseX, mouseY);
    // 색상 출력
    var colorSpuit = get(mouseX, mouseY);
    console.log(colorSpuit);
  }
  
}
