var strokeColours=["pink", "green", "yellow", "blue", "red"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}


function draw() {
  stroke(0);
  strokeWeight(3);
  fill(255);

  circle(300, 320, 230);
  circle(600, 350, 160);
  fill(0);
  //circle(300, 320, 230);
  //circle(600, 350, 160);
  //circle(300, 350, 80);
  //circle(600, 380, 60);
  fill(255);
  triangle(450, 400, 500, 500, 450, 500);
  stroke(255);
  line(500, 600, 550, 600);
  line(100, 300, 300, 100);
  line(500, 200, 700, 300);
  line(mouseX, mouseY, pmouseX, pmouseY)
  noStroke();
  irisMove();
}
function irisMove() {
  let x = map(mouseX, 0, width, 0, 10);
  let y = map(mouseY, 0, height, 0, 10);
  fill(0);
  circle(300 + x, 320 + y, 80);
  circle(600 + x, 350 + y, 60);
}
