function keyPressed() {
    if (keyCode === DOWN_ARROW) {
       Matter.Body.setStatic(packageBody,false);
     }
   }