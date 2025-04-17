const s = function(p){
  var x = 100;
  var y = 100;var strokeColor;
  var light;
  

p.setup = function() {
  p.createCanvas (600, 600);
  strokeColor = p.color(0, 0 ,0);
  light = p.color(255,255,102, 50);
}


p.draw = function() {
  p.strokeWeight(4);
  p.stroke(strokeColor);
  p.ellipse(330, 330, 180, 110);
  p.stroke("white");
  p.rect(320, 250, 20, 30);
  p.stroke(strokeColor);
  p.line(360, 250, 360, 270);
  p.fill(179, 76, 156);
  p.rect(254, 50, 150, 200);
  p.fill(light);
  p.noStroke();
  p.quad(254, 250, 404, 250, 430, 300, 230, 300);
  p.fill("black");
}

p.mouseClicked = function() {
  if (p.mouseX > 150 && p.mouseX < 340 && p.mouseY > 50 && p.mouseY < 440) {
    if (strokeColor.toString() == p.color(255, 255, 255).toString()) {
      strokeColor = p.color(0, 0, 0);
    } else {
      strokeColor = p.color(255, 255, 255);
    }
  }
  if (p.mouseX > 150 && p.mouseX < 340 && p.mouseY > 50 && p.mouseY < 440) {
    if (light.toString() == p.color(255,255,102, 50).toString()) {
      light = p.color(0,0,0, 10);
    } else {
      light = p.color(255,255,102, 50);
    }
  }
}
}
var myp5 = new p5(s, 'lampSketch');
