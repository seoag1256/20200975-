// 사운드미디어제작 중간평가
// 20200975서은교

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
  triangle(571, 346, 568, 315, 618, 335);
  
  fill(231, 185, 159);
  triangle(610, 273, 568, 315, 617, 335);
  
  fill(226, 201, 194);
  triangle(610, 273, 617, 335, 675, 310);
  
  fill(225, 193, 170);
  triangle(674, 310, 644, 361, 708, 335);
  
  fill(177, 197, 224);
  triangle(547, 255, 610, 273, 592, 208);
  
  fill(139, 158, 182);
  triangle(610, 273, 592, 208, 654, 229);
  
  fill(160, 184, 218);
  triangle(610, 273, 654, 229, 674, 309);
  
  fill(142, 163, 192);
  beginShape();
  vertex(654, 229);
  vertex(674, 309);
  vertex(707, 334);
  vertex(697, 272);
  endShape(CLOSE);
  
  fill(109, 128, 152);
  triangle(707, 335, 697, 272, 785, 327);
  
  fill(47, 54, 73);
  triangle(707, 335, 786, 327, 752, 379);
  
  fill(108, 121, 152);
  triangle(654, 229, 697, 272, 756, 269);
  
  fill(142, 163, 192);
  triangle(785, 327, 697, 272, 756, 269);
  
  fill(32, 50, 86);
  triangle(785, 328, 848, 320, 818, 265);
  
  fill(59, 74, 97);
  triangle(785, 329, 755, 269, 818, 265);

}

function mousePressed() {
    // 좌표 출력
    console.log(mouseX, mouseY);
    // 색상 출력
    let colorSpuit = get(mouseX, mouseY);
    console.log(colorSpuit);
  }
