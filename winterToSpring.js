function winterToSpring(){
  if (frameCount % snowyLess == 0) {
    for (let i=0 ; i<1 ; i++){
      let p = new Snow();
      snowy.push(p);
    }
  }
  if (frameCount > 300 && frameCount % 90 == 0){
    snowyLess += 1;
  }
  if (frameCount > 900){
    winterIsCome = true;
    snowy.splice(0, snowy.length);
  }
}