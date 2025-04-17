const s = function(p){
  var x = 100;
  var y = 100;
  var strokeColours=["pink", "green", "yellow", "blue", "red"];

p.setup = function() {
  p.createCanvas(800, 800);
  p.background(0);
}


p.draw = function() {
  p.stroke(0);
  p.strokeWeight(3);
  p.fill(255);

  p.circle(300, 320, 230);
  p.circle(600, 350, 160);
  p.fill(0);
  //circle(300, 320, 230);
  //circle(600, 350, 160);
  //circle(300, 350, 80);
  //circle(600, 380, 60);
  p.fill(255);
  p.triangle(450, 400, 500, 500, 450, 500);
  p.stroke(255);
  p.line(500, 600, 550, 600);
  p.line(100, 300, 300, 100);
  p.line(500, 200, 700, 300);
  p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY)
  p.noStroke();
  p.irisMove();
}
p.irisMove = function() {
  let x = p.map(p.mouseX, 0, p.width, 0, 10);
  let y = p.map(p.mouseY, 0, p.height, 0, 10);
  p.fill(0);
  p.circle(300 + x, 320 + y, 80);
  p.circle(600 + x, 350 + y, 60);
}
}
var myp5 = new p5(s, 'p5sketch');

const s2 = function(p){
    var x = 100;
    var y = 100;
    var kusamaColours=[[255, 153, 153], [153, 0, 0], [102, 0, 0]];


p.setup = function() {
  p.createCanvas(600, 600);
  p.background(255);
  //stroke(255, 0, 0);
  p.frameRate(4);
}


p.draw = function() {
    
    p.strokeWeight(p.random(15, 20));
    p.fill(0);
    p.stroke(153,0, 0);
    for (let i=0; i<5; i++) {
      p.circle(p.random(p.width), p.random(100), 50);
    }
    
    p.stroke(255, p.random(100,120), p.random(100,120));
    for (let i=0; i<5; i++) {
    p.circle(p.random(p.width), p.random(100, 250), 50); }
    
    p.stroke(p.random(90,102), 0, 0);
    for (let i=0; i<5; i++) {
    p.circle(p.random(p.width/3*2), p.random(200, 370), 50);}
    
    p.stroke(153,0, 0);
    for (let i=0; i<5; i++) {
      p.circle(p.random(p.width/2, p.width/4*3), p.random(300, 900), 50);
      
    }
    
    p.stroke(255, p.random(140,153), p.random(140,153));
    for (let i=0; i<5; i++) {
    p.circle(p.random(p.width/2), p.random(300, 500), 50); 
    p.circle(p.random(p.width), p.random(800, 1000), 50);
  }
    
    p.stroke(p.random(90,102), 0, 0);
    for (let i=0; i<5; i++) {
    p.circle(p.random(p.width/4*3, p.width), p.random(250, 800), 50);
    p.circle(p.random(p.width/2), p.random(475, 800), 50);}
    
}
  }
  var myp5_1 = new p5(s2, 'p5sketch2');
  