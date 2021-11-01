var snowy = [];
var snowyLess = 1;
var winterIsCome = false;
var flowers = [];

function setup() {
  createCanvas(300, 500);
  for (let i=0 ; i<10 ; i++){
    snowy[i] = new Snow();
  }
}

function draw() {

    background(0);
    winterToSpring();
  
  for (let i=0 ; i<snowy.length ; i++){
    snowy[i].update();
    snowy[i].display();
    snowy[i].ground();
  }
  
  pileup();
  
    for (var i=0 ; i<flowers.length ; i++){
    flowers[i].update();
    flowers[i].display();
  }
  
    textSize (10);
    textAlign (CENTER);
    fill (255, 200);
  if (winterIsCome == false){
    text ('If you want to melt the snow, press the space bar', width/2, 30);
  } else {
    text ('Winter has gone and spring has come', width/2, 30);
    text ('Click on the mouse', width/2, 50);
  }
}

function mousePressed(){
  
  if (winterIsCome == true){
    var f = new Flower(mouseX, mouseY);
    flowers.push(f);
  }
}
