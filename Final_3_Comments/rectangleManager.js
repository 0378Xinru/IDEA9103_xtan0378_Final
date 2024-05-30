
let allRectsArray = [];
  
class rectangleManager {
  constructor(x, y, w, h, colour) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.colour = colour;
    this.initialX = x;
    this.initialY = y;
    this.initialW = w;
    this.initialH = h;
    this.initialColour = colour;
    this.rotateAngle = 0;
  }

  display() {
    push();
    fill(this.colour);
    translate(this.drawX + this.drawWidth / 2, this.drawY + this.drawHeight / 2);
    rotate(this.rotateAngle);
    rect(-this.drawWidth / 2, -this.drawHeight / 2, this.drawWidth, this.drawHeight);
    pop();
  }

  updateColour(colour) {
    this.colour = colour;
  }

  calculateDrawSize(widthScale, heightScale) {
    this.drawX = this.x * widthScale;
    this.drawY = this.y * heightScale;
    this.drawWidth = this.w * widthScale;
    this.drawHeight = this.h * heightScale;
  }

  rotate(angle) {
    this.rotateAngle += angle;
  }

  reset() {
    this.x = this.initialX;
    this.y = this.initialY;
    this.w = this.initialW;
    this.h = this.initialH;
    this.colour = this.initialColour;
    this.rotateAngle = 0;
    this.calculateDrawSize(windowWidth, windowHeight);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES); // Use degrees for rotation

  for (let i = 0; i < allRectsCoords.length; i++) {
    let newRect = new rectangleManager(allRectsCoords[i].x, allRectsCoords[i].y, allRectsCoords[i].w, allRectsCoords[i].h, allRectsCoords[i].colour);
    allRectsArray.push(newRect);
  }

  resizedRectangles();
}

function draw() {
  background(30, 47, 97);
  noStroke();

  for (let i = 0; i < allRectsArray.length; i++) {
    allRectsArray[i].display();
  }

  // Display the instructions
  fill(255); // Set text color to white
  textSize(20);
  text('Press R to reset,mousePress to rotate', 10, height - 10); // Instructions at the bottom left
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  resizedRectangles();
}

function resizedRectangles() {
  for (let i = 0; i < allRectsArray.length; i++) {
    allRectsArray[i].calculateDrawSize(windowWidth, windowHeight);
  }
}

function keyPressed() {
   if (key === 'r' || key === 'R') { // Use 'r' key to reset
    for (let i = 0; i < allRectsArray.length; i++) {
      allRectsArray[i].reset();
    }
  }
}

function mousePressed() {
  let rotationAngle = 30; // Rotate by 30 degrees
  for (let i = 0; i < allRectsArray.length; i++) {
    allRectsArray[i].rotate(rotationAngle);
  }
}