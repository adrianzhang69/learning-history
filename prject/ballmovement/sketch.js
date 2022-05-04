let x = 100;
let y = 50;

let vy = 10;
let ay = 1;

function setup() 
{
  createCanvas(600, 450);
}

function draw()
{
  background("pink");
  ellipse(x, y, 100, 100)
  vy += ay;
  y += vy;
  if (y > height || y < 0)
  {
      vy = vy * -1;
  }

}
