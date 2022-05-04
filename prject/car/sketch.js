let x = 0; 
let r = 0;
function setup() 
{
  createCanvas(800, 600);
  angleMode(DEGREES)
}

function draw()
{
  background(240);

  //background
  noStroke();
  fill(180,199,231);
  rect(0, 0, 800, 500);
  fill(191, 144, 0);
  rect(0, 500, 800, 600);

  //sun
  fill("yellow")
  circle(750, 50, 150);
  stroke("yellow")
  strokeWeight(6);
  line(480, 60, 561, 47);
  line(547, 224, 602, 172);
  line(740, 304, 747, 236);

  //car
  push();
  translate(x, 0)
  stroke("black")
  strokeWeight(1);
  fill(112, 173, 71);
  rect(175, 340, 223, 54);
  rect(108, 394, 362, 74);
  fill(132, 60, 12);
  circle(168, 468, 60);
  circle(408, 468, 60);

  push()
  translate(408, 468)
  rotate(r)
  line(-30, 0, 30, 0)
  pop();

  pop();

  r += 2;

  x += 1;
  if (x > 600)
  {
      x = 0;
  }
  

}
