function preload(){
  // put preload code here
}

var balls = [];
var neve = [];

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(255, 180, 61);
  textFont('Helvetica');

  var ballNumber = 18;

  for(var i = 0; i < ballNumber; i++){

        //put your if statement here

        var myBall = new Ball(random(0, width), random(0, height), 15);
        myBall.diameter = random(15, 60);
        myBall.speed = 1;

        balls.push(myBall);

  }

  for(var x = 40; x < width; x += 200)
  {
    for(var y = height/1.3; y < height/1.3 + 30; y += 30)
    {
      var miePalleBianche = new PalleBianche(x, y, 30);
      miePalleBianche.speed = 6.5;

      neve.push(miePalleBianche);
    }
  }
}

function draw() {
  // put drawing code here
  for(var j = 0; j < balls.length; j++){
    balls[j].move();
    balls[j].display();
  }

  for(var f = 0; f < neve.length; f++){
    neve[f].move();
    neve[f].display();
  }

  drawCandy(mouseX, mouseY, random(15, 70), frameCount, color(random(50, 200), random(50, 100), random(150, 255)));

  fill('#ffffff');
  // Set a size
  textSize(18.5);
  // text(string, x, y)
  text('Trascina il mouse per combattere l oscurità', 63.5, height - 40);
  textSize(16);

}

function Ball(_x, _y, _diameter){
  this.x = _x;
  this.y = _y;
  this.diameter = _diameter;
  this.color = 17, 17, 17;
  this.speed = 10;

  this.display = function() {
    fill(17, 17, 17, 60);
    noStroke();
    ellipse(this.x, this.y, this.diameter);
  }

  var yDirection = 1;
  var xDirection = 1;

  this.move = function() {
    this.x += this.speed * xDirection * random(1, 10);
    this.y += this.speed * yDirection * random(1, 10);

    if(this.y > height || this.y < 0){
      yDirection = yDirection * -1;
    }

    if(this.x > width || this.x < 0){
      xDirection = xDirection * -1;
    }
  }
}

function PalleBianche(_x1, _y1, _diameter1){
  this.x = _x1;
  this.y = _y1;
  this.diameter = _diameter1;
  this.color = 155, 13, 13;
  this.speed = 10;

  this.display = function() {
    fill(155, 13, 13);
    stroke('#111111');
    strokeWeight(2.2);
    ellipse(this.x, this.y, this.diameter);
  }

  var yDirection = 1;
  var xDirection = 1;

  this.move = function() {
    this.x = this.x;
    this.y += this.speed;

    if(this.y > height || this.y < 0){
      this.y = 0;
    }

    if(this.x > width || this.x < 0){
      this.x = 0;
    }
  }
}

function drawCandy(_x, _y, _size, _rotation, _color) {

angleMode(DEGREES);

push();

translate(_x, _y);
rotate(_rotation);

noStroke();

fill(_color);
ellipse(0, 0, _size, _size, 0, 90, PIE);

pop();

}
