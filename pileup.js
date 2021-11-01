function pileup(){
  for (i=0 ; i<snowy.length ; i++){
    for (j=0 ; j<snowy.length ; j++){
      if(i==j){
        break;
      }
      
        var a = dist(snowy[i].pos.x, snowy[i].pos.y, snowy[j].pos.x, snowy[j].pos.y);
    var b = snowy[i].size + snowy[j].size;
      
      
    if (a<=b && (snowy[i].groundCheck||snowy[j].groundCheck)){
      snowy[i].vel.set(0, 0);
      snowy[i].acc.set(0, 0);
      snowy[j].vel.set(0, 0);
      snowy[j].acc.set(0, 0);
      snowy[i].groundCheck = true;
      snowy[j].groundCheck = true;
     }
    }
  }
}