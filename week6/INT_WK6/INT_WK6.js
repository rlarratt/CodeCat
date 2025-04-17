var sound, analyzer, volume, string, myButton;

function preload(){
  sound=loadSound("data/Damscray_DancingTiger.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("pink");
  getAudioContext().suspend();
  analyzer= new p5.Amplitude();
  textAlign(CENTER, CENTER);
  string="DANCE";
  myButton=createButton("DANCE NOW!");
  myButton.position(random(width), random(height));
  //let div = createDiv('<h3>HELLO WORLD</h3>');
  //div.position(100, 100);
}


function draw() {
  background(255, 255, 0, 12);
  volume=analyzer.getLevel();
  mappedVol = map(volume, 0, 1.0, 0, width);
  circle(mouseX, mouseY, mappedVol);
  push();
    translate(width/2, height/2);
    rotate(mappedVol);
    //circle(mouseX, mouseY, mappedVol);
    //text("mouse", mouseX, mouseY);
    textSize(mappedVol);
    text(string, 0, 0);
  pop();
  console.log(volume + '|' + mappedVol);

}

function mousePressed(){
  getAudioContext().resume();
  analyzer.setInput(sound);
  loop();
  if(sound.isPlaying()==true){
  sound.stop();
  }
  else {
    sound.play();
    sound.loop();
  }

}

function keyPressed(){
  if(key=='b'){
    fill("blue");
  }
  string=string+key;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
