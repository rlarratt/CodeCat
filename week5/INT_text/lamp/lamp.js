var strokeColor;

function setup() {
  createCanvas (600, 600);
  strokeColor = color(255, 0, 0);
}


function draw() {
  strokeWeight(3);
  stroke(strokeColor);
  //push();
  //translate(width/4*3, height/5*4);
  ellipse(330, 330, 180, 110);
  //fill("deeppink");
  rect(254, 50, 150, 200);
  noFill();
  rect(320, 250, 20, 30);
  line(360, 250, 360, 270);
  //pop();
  //line(0, height/5*4 +85, width, height/5*4+85);
}

function mouseClicked() {
  if (mouseX > 150 && mouseX < 340 && mouseY > 50 && mouseY < 440) {
    if (strokeColor.toString() == color(255, 0, 0).toString()) {
      strokeColor = color(0, 0, 0);
    } else {
      squareColor = color(255, 0, 0);
    }
  }
}

//rect(20, -50, 20, 30);
