let x = 0 
let y = 500;
let vy = 2;

let tree;

let trees

function preload()
{
img = loadImage("unknowns.jpg");
}

function setup()
{
  createCanvas(800, 600);
  trees = [img, img, img]
}

function draw()
{
  background(240);
  
  for (let i = 0; i < trees.length;i++)
  {
    let t = trees[i];
    image(t, i* 200, y-i*20, 20, 80);
    y -= vy;
    if (y < 10)
    {
      y = 600;
    }

  }
}