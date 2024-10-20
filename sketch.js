let img;

function setup() {
  createCanvas(1280, 720);
  img = loadImage("jj.png");
}

function draw() {
  
  image(img, 0, 0, 1280, 720);
  
  noStroke();
  
  fill(243, 210, 193);
  triangle(547, 255, 610, 273, 568, 316);
  
  fill(195, 170, 151);
  triangle(571, 345, 568, 315, 617, 335);
  
  fill(231, 185, 159);
  triangle(610, 273, 568, 315, 617, 335);
  
  fill(226, 201, 194);
  triangle(610, 273, 617, 335, 675, 310);
  
  fill(225, 193, 170);
  triangle(674, 310, 644, 361, 708, 335);

}

function mousePressed() {
    // 좌표 출력
    console.log(mouseX, mouseY);
    // 색상 출력
    let colorSpuit = get(mouseX, mouseY);
    console.log(colorSpuit);
  }
