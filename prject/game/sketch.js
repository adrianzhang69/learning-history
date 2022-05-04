let x = 100;
let y = 100;
function setup() 
{
  createCanvas(600, 450);
}

function draw()
{
  background("pink");
  ellipse(x,y,200,200)
  ellipse(300,300,200,200)
  x +=2;
  if (x>width)
  {
      x=0;
  }
}
