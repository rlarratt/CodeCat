const s = function(p){
  var x = 100;
  var y = 100;
  // var trial;

p.setup = function() {
  p.createCanvas(600, 600);
  // canvas.parent('molnar-container');
  // createCanvas(windowWidth, windowHeight);
p.frameRate(4);
};


p.draw = function() {
  p.background(255, 255, 255, 70);
  p.noFill();
  p.quad(p.random(35,42), p.random(148, 155), p.random(120, 123), p.random(158, 161), p.random(120, 125), p.random(248, 257), p.random(35, 47),
  p.random(248, 257),);
  p.quad(p.random(125,132), p.random(148, 155), p.random(220, 223), p.random(158, 161), p.random(220, 225), p.random(248, 257), p.random(135, 147),
  p.random(248, 257),);
  p.quad(p.random(225,232), p.random(148, 155), p.random(320, 323), p.random(158, 161), p.random(320, 325), p.random(248, 257), p.random(235, 247),
  p.random(248, 257),);
  p.quad(p.random(215,242), p.random(140, 165), p.random(310, 328), p.random(148, 171), p.random(320, 325), p.random(248, 257), p.random(235, 247),
  p.random(248, 257),);
  p.push();
  p.translate(100,0);
  p.quad(p.random(215,242), p.random(140, 165), p.random(310, 328), p.random(148, 171), p.random(320, 325), p.random(248, 257), p.random(235, 247),
  p.random(248, 257),);
  p.quad(p.random(215,242), p.random(140, 165), p.random(310, 328), p.random(148, 171), p.random(320, 325), p.random(248, 257), p.random(235, 247),
  p.random(248, 257),);
  p.pop();
  p.push();
  p.translate(200,0);
  p.quad(p.random(215,242), p.random(140, 165), p.random(310, 328), p.random(148, 171), p.random(320, 325), p.random(248, 257), p.random(235, 247),
  p.random(248, 257),);
  p.quad(p.random(215,242), p.random(140, 165), p.random(310, 328), p.random(148, 171), p.random(320, 325), p.random(248, 257), p.random(235, 247),
  p.random(248, 257),);
  p.pop();
  p.push();
  
  p.translate(0,110);
  p.strokeWeight(1.5);
  p.quad(p.random(35,42), p.random(148, 155), p.random(120, 123), p.random(158, 161), p.random(120, 125), p.random(248, 257), p.random(35, 47),
  p.random(248, 257),);
  p.quad(p.random(125,132), p.random(148, 155), p.random(220, 223), p.random(158, 161), p.random(220, 225), p.random(248, 257), p.random(135, 147),
  p.random(248, 257),);
  p.quad(p.random(225,232), p.random(148, 155), p.random(320, 323), p.random(158, 161), p.random(320, 325), p.random(248, 257), p.random(235, 247),
  p.random(248, 257),);
  p.quad(p.random(215,242), p.random(140, 165), p.random(310, 328), p.random(148, 171), p.random(320, 325), p.random(248, 257), p.random(235, 247),
  p.random(248, 257),);
  p.push();
  p.translate(100,0);
  p.quad(p.random(215,242), p.random(140, 165), p.random(310, 328), p.random(148, 171), p.random(320, 325), p.random(248, 257), p.random(235, 247),
  p.random(248, 257),);
  p.quad(p.random(215,242), p.random(140, 165), p.random(310, 328), p.random(148, 171), p.random(320, 325), p.random(248, 257), p.random(235, 247),
  p.random(248, 257),);
  p.pop();
  p.push();
  p.translate(200,0);
  p.quad(p.random(215,242), p.random(140, 165), p.random(310, 328), p.random(148, 171), p.random(320, 325), p.random(248, 257), p.random(235, 247),
  p.random(248, 257),);
  p.quad(p.random(215,242), p.random(140, 165), p.random(310, 328), p.random(148, 171), p.random(320, 325), p.random(248, 257), p.random(235, 247),
  p.random(248, 257),);
  p.pop();
  p.pop();
  
  p.push();
  p.translate(0,220);
  p.strokeWeight(2);
  p.quad(p.random(35,42), p.random(148, 155), p.random(120, 123), p.random(158, 161), p.random(120, 125), p.random(248, 257), p.random(35, 47),
  p.random(248, 257),);
  p.quad(p.random(125,132), p.random(148, 155), p.random(220, 223), p.random(158, 161), p.random(220, 225), p.random(248, 257), p.random(135, 147),
  p.random(248, 257),);
  p.quad(p.random(225,232), p.random(148, 155), p.random(320, 323), p.random(158, 161), p.random(320, 325), p.random(248, 257), p.random(235, 247),
  p.random(248, 257),);
  p.quad(p.random(215,242), p.random(140, 165), p.random(310, 328), p.random(148, 171), p.random(320, 325), p.random(248, 257), p.random(235, 247),
  p.random(248, 257),);
  p.push();
  p.translate(100,0);
  p.quad(p.random(215,242), p.random(140, 165), p.random(310, 328), p.random(148, 171), p.random(320, 325), p.random(248, 257), p.random(235, 247),
  p.random(248, 257),);
  p.quad(p.random(215,242), p.random(140, 165), p.random(310, 328), p.random(148, 171), p.random(320, 325), p.random(248, 257), p.random(235, 247),
  p.random(248, 257),);
  p.pop();
  p.push();
  p.translate(200,0);
  p.quad(p.random(215,242), p.random(140, 165), p.random(310, 328), p.random(148, 171), p.random(320, 325), p.random(248, 257), p.random(235, 247),
  p.random(248, 257),);
  p.quad(p.random(215,242), p.random(140, 165), p.random(310, 328), p.random(148, 171), p.random(320, 325), p.random(248, 257), p.random(235, 247),
  p.random(248, 257),);
  p.pop();
  p.pop();
  
  p.push();
  p.translate(0,330);
  p.strokeWeight(3);
  p.quad(p.random(35,42), p.random(148, 155), p.random(120, 123), p.random(158, 161), p.random(120, 125), p.random(248, 257), p.random(35, 47),
  p.random(248, 257),);
  p.quad(p.random(125,132), p.random(148, 155), p.random(220, 223), p.random(158, 161), p.random(220, 225), p.random(248, 257), p.random(135, 147),
  p.random(248, 257),);
  p.quad(p.random(225,232), p.random(148, 155), p.random(320, 323), p.random(158, 161), p.random(320, 325), p.random(248, 257), p.random(235, 247),
  p.random(248, 257),);
  p.quad(p.random(215,242), p.random(140, 165), p.random(310, 328), p.random(148, 171), p.random(320, 325), p.random(248, 257), p.random(235, 247),
  p.random(248, 257),);
  p.push();
  p.translate(100,0);
  p.quad(p.random(215,242), p.random(140, 165), p.random(310, 328), p.random(148, 171), p.random(320, 325), p.random(248, 257), p.random(235, 247),
  p.random(248, 257),);
  p.quad(p.random(215,242), p.random(140, 165), p.random(310, 328), p.random(148, 171), p.random(320, 325), p.random(248, 257), p.random(235, 247),
  p.random(248, 257),);
  p.pop();
  p.push();
  p.translate(200,0);
  p.quad(p.random(215,242), p.random(140, 165), p.random(310, 328), p.random(148, 171), p.random(320, 325), p.random(248, 257), p.random(235, 247),
  p.random(248, 257),);
  p.quad(p.random(215,242), p.random(140, 165), p.random(310, 328), p.random(148, 171), p.random(320, 325), p.random(248, 257), p.random(235, 247),
  p.random(248, 257),);
  p.pop();
  p.pop();
};
};

var myp5 = new p5(s, 'p5sketch');

// var s2 = function (p){
//   var x = 100;
//   var y = 100;
//   var capture;

// p.setup = function() {
//     p.createCanvas(600, 600);
//     capture = p.createCapture(VIDEO);
//     capture.size(320, 240);
// }


// p.draw = function() {
  
//   p.image(capture, width / 2, height / 2 - 240);
//   p.filter(GRAY, 3);
//   //image(capture, width / 4, height / 2 - 240);
//   //image(capture, width, height  - 240);
//   //image(capture, width / 2, height  - 240);
//   //filter(THRESHOLD);
// }

// p.mousePressed = function() {
//   p.image(capture, p.random(0,width), p.random(0,height));
//   p.filter(THRESHOLD);
// }
  
// };
//  var myp5_2 = new p5(s2, 'p5sketch2');


