var WorkSans, split;
let angle = 0; r = 15;

function preload() {
  WorkSans = loadFont('/data/WorkSans-VariableFont_wght.ttf');
  split = random(0,100);
}

function setup() {
createCanvas(windowWidth, windowHeight);
background("white");
angleMode(DEGREES);
}


function draw() {
  let points3 = WorkSans.textToPoints('text to point play', 100, 150, 50, {sampleFactor:0.2});
  for (let i=0; i<points3.length; i ++) {
    point(points3[i].x, points3[i].y);
  }
  fill("deeppink");
  background(255, 255, 255, split);
  //textFont(WorkSans);
  //textSize(150);
  //text('Hello World', 50, 200);
  let points1 = WorkSans.textToPoints('SQUEAKY', 100, 300, 130, {sampleFactor:0.1});
  for (let p of points1) {
    ellipse(p.x + r*sin(angle), p.y, 10,10);
  }
  
  angle += 10;
  fill(0);
  let points = WorkSans.textToPoints('bendy', 100, 550, 60, {sampleFactor:0.5});
  for (let i=0; i<points.length; i ++) {
    ellipse(points[i].x + r*sin(angle + i*10), points[i].y, 3, 3);
  }
  fill("aliceblue");
  let points2 = WorkSans.textToPoints('marhsmallow', 100, 450, 150, {sampleFactor:0.2});
  for (let i=0; i<points2.length; i ++) {
    ellipse(points2[i].x, points2[i].y  + r*sin(angle + i*2), 30, 20);
  }
 
}


