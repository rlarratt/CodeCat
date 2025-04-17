let img1;
let pixelSize = 10;

function preload() {
  img1 = loadImage("data/pips.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  //noLoop();
}


function draw() {
  image(img1, mouseX-img1.width/2, mouseY-img1.height/2, img1.width, width/img1.width*img1.height);
  for (let x= 0; x < img1.width; x += pixelSize) {
    for (let y = 0; y < img1.height; y += pixelSize) {
      let c = img1.get(x,y);
      fill(c);
      noStroke();
      let px = random(x - pixelSize / 2, x + pixelSize / 2);
      let py = random(y - pixelSize / 2, y + pixelSize /2);
      ellipse(px, py, pixelSize, pixelSize);
    }
  }
}
 
