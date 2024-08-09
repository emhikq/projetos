function setup() {
    createCanvas(650, 500);
    background("gray")
  }
  
  function draw() {
    stroke("blue");
    fill("black");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  