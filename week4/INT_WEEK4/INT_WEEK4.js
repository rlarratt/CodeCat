var kusamaColours=[[255, 153, 153], [153, 0, 0], [102, 0, 0]];


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  //stroke(255, 0, 0);
  frameRate(4);
}


function draw() {
    
    strokeWeight(random(15, 20));
    fill(0);
    stroke(153,0, 0);
    for (let i=0; i<5; i++) {
      circle(random(width), random(100), 50);
    }
    
    stroke(255, random(100,120), random(100,120));
    for (let i=0; i<5; i++) {
    circle(random(width), random(100, 250), 50); }
    
    stroke(random(90,102), 0, 0);
    for (let i=0; i<5; i++) {
    circle(random(width/3*2), random(200, 370), 50);}
    
    stroke(153,0, 0);
    for (let i=0; i<5; i++) {
      circle(random(width/2, width/4*3), random(300, 900), 50);
      
    }
    
    stroke(255, random(140,153), random(140,153));
    for (let i=0; i<5; i++) {
    circle(random(width/2), random(300, 500), 50); 
    circle(random(width), random(800, 1000), 50);
  }
    
    stroke(random(90,102), 0, 0);
    for (let i=0; i<5; i++) {
    circle(random(width/4*3, width), random(250, 800), 50);
    circle(random(width/2), random(475, 800), 50);}
    
}
    
//  for (let i=0; i<10; i++){
//    //fill(random(255), random(255), random(255)); 
//    fill(random(strokeColours));
//    //circle(random(width), random(height), random(399));
//    ellipse(random(width), random(height), random(399), random(200));
//    fill(random(strokeColours));
//    square(random(width), random(height), random(399));
//    fill(random(strokeColours));
//    rect(random(width), random(height), random(399), random(200));
//    stroke(0);
//    strokeWeight(4);
//    line(mouseX, mouseY, width-100, height-100);}
//  }
//  noLoop();
  
//  fill("pink");
//  circle(mouseX, mouseY, 200);
  
////  stroke(0);
////    strokeWeight(1);
////    line(mouseX, mouseY, width/2, height/2);
////    textSize(36);
////    text("OO", mouseX, mouseY);
////}
