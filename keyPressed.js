function keyPressed() {
  if (keyCode == 32){
      for (let i = 0; i<snowy.length; i++) {
      if (snowy[i].groundCheck == true) {
        snowy.splice(i, 1);
      }
    }
  }
}