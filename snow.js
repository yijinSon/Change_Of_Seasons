class Snow{

  constructor(){
    this.pos = createVector(random(width),-50);
    this.vel = createVector(0,0);
    this.acc = createVector(0,random(0.03,0.08));
    this.size = random (2,6);
    this.groundCheck = false;
    this.alpha = 0;
  }

  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    if (frameCount > 700) {
      this.alpha += 1;
    }
  }

  display(){
    fill (255,150-this.alpha);
    noStroke();
    ellipseMode(CENTER);
    ellipse(this.pos.x, this.pos.y, this.size*2, this.size*2);
  }

    ground(){
    if (this.pos.y > height-this.size*2){
      this.vel.y = 0;
      this.acc.y = 0;
      this.groundCheck = true;
    }
  }
}
