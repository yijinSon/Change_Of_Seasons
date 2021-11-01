class Flower {
  
  constructor(posX, posY){
    this.pistils = 10;
    this.petal = 8;
    
    this.straight = this.pistils + this.petal;
    this.diagonal = (this.pistils-2) + (this.petal-2);
    
    this.alpha = 0;
    this.alpha2 = 0;
    
    this.posX = posX;
    this.posY = posY;
    
    this.lineY = this.posY+this.straight+this.petal;
    this.lineDraw = this.lineY;
    
    this.colorRandom = color (random(150,220), random(100,150), random(100,150));
    this.colorRandom2 = color (random(100,150), random(100,150), random(150,220));
    this.colorLine = color (80,200,80);
  }
  
  update(){
    
    if (this.alpha <= 255){
      this.alpha += 1;
    } else {
      this.alpha = 255;
    }
    
    if (this.alpha2 <= 100){
      this.alpha2 += 1;
    } else {
      this.alpha2 = 100;
    }
    
    if (this.lineDraw <= height){
      this.lineDraw += 2;
    } else {
      this.lineDraw = height;
    }

    this.colorRandom.setAlpha(this.alpha);
    this.colorRandom2.setAlpha(this.alpha);
    this.colorLine.setAlpha(this.alpha2);
  }
  
  display(){
    
    stroke (this.colorLine);
    strokeWeight (3);
    line (this.posX, this.lineY, this.posX, this.lineDraw);
    
    ellipseMode(CENTER);
    noStroke();
    
    fill (this.colorRandom2,this.alpha);

    ellipse(this.posX, this.posY+this.straight, this.petal*2, this.petal*2);
    ellipse(this.posX, this.posY-this.straight, this.petal*2, this.petal*2);
    
    
    ellipse((this.posX-this.diagonal)-1, (this.posY-this.diagonal)+5, this.petal*2, this.petal*2);
    ellipse((this.posX-this.diagonal)-1, (this.posY+this.diagonal)-5, this.petal*2, this.petal*2);
    
    ellipse((this.posX+this.diagonal)+1, (this.posY+this.diagonal)-5, this.petal*2, this.petal*2);
    ellipse((this.posX+this.diagonal)+1, (this.posY-this.diagonal)+5, this.petal*2, this.petal*2);
    
    fill (this.colorRandom,this.alpha);
    ellipse(this.posX, this.posY, this.pistils*2, this.pistils*2);
    
  }
  
}