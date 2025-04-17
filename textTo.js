var WorkSans;
let angle = 0; r = 15;
let hovered = false;

function preload() {
  WorkSans = loadFont('/data/WorkSans-VariableFont_wght.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");
  
  angleMode(DEGREES);
  //let a = createA('http://p5js.org/', 'p5*js');
  //a.position(25, 35);
}


function draw() {
  background(255);
  //fill(0);
  //circle(25, 35, 90);
   fill("white");
   strokeWeight(1);
  let points2 = WorkSans.textToPoints('CODE CAT', 100, 250, 250, {sampleFactor:0.2});
  for (let i=0; i<points2.length; i ++) {
    ellipse(points2[i].x, points2[i].y  + r*sin(angle + i*2), 40, 40);
  }
  angle += 10;
  textSize(30);
  noStroke();
  fill("gray");
  text('Wk 4-6', 120, 330);
  noFill();
  stroke(5);
  strokeWeight(3);
  rect(140, 400, 200, 450);
  fill(189, 6, 6);
  circle(290, 650, 30, 30);
  fill(255);
  
  line (0, 850, width, 850);
  
  rect(700, 700, 200, 120);
  fill(43, 123, 132);
  rect(710, 710, 180, 100);
  //fill(171, 202, 206, 50);
  //rect(710, 710, 180, 100);
  fill(255);
  line(780, 700, 760, 680);
  line(820, 700, 840, 680);
  rect(700, 820, 200, 30);
  
  rect(1100, 600, 600, 250);
  ellipse(1180, 565, 90, 70);
  fill(179, 76, 156);
  rect(1135, 415, 90, 100);
  fill(255);
  rect(1178, 515, 5, 15);
  
  let distance = dist(mouseX, mouseY, 290, 650);
  if (distance < 30) {
    hovered = true;
  }
  else if (mouseX > 710 && mouseX < 890 && mouseY > 710 && mouseY < 810) {
  hovered = true;
}
else if (mouseX > 1135 && mouseX < 1225 && mouseY > 415 && mouseY < 515) {
  hovered = true;
}
else {
  hovered = false;
}
   if (hovered) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }
}

function mouseClicked() {
  let distance = dist(mouseX, mouseY, 290, 650);
  if (distance < 30) {
    //buttonActive = true;
    window.location.href = "./week4/index.html";
  }
  if (mouseX > 710 && mouseX < 890 && mouseY > 710 && mouseY < 810) {
  window.location.href = "./week5/index.html";
}
if (mouseX > 1135 && mouseX < 1225 && mouseY > 415 && mouseY < 515) {
  window.location.href = "./week6/index.html";
}
}



//function keyPressed() {
//  if (key =='d'){
//    line(mouseX, mouseY, pmouseX, pmouseY);
//  }
//}
