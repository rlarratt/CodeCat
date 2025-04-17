var capture;

function setup() {
    createCanvas(windowWidth, windowHeight);
    capture = createCapture(VIDEO);
    capture.size(320, 240);
}


function draw() {
  
  image(capture, width / 2, height / 2 - 240);
  filter(GRAY, 3);
  //image(capture, width / 4, height / 2 - 240);
  //image(capture, width, height  - 240);
  //image(capture, width / 2, height  - 240);
  //filter(THRESHOLD);
}

function mousePressed() {
  image(capture, random(0,width), random(0,height));
  filter(THRESHOLD);
}
