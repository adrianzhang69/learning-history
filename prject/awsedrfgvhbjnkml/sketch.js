let x = 150
let y = 60
let x1 = 223
let y1 = 500
let vy1 = 2
let x2 = 124
let y2 = 400
let x3 = 211
let y3 = 200
let x4 = 20
let y4 = 125

function setup() 
{
  createCanvas(300, 600);
}

function draw()
{
  background(240);
  circle(x, y, 20,20)
  rect(x1,y1, 30,30)
  y1 = y1 - vy1
 if (y1 < 0)
 {
   y1 = 600
 }
  rect(x2,y2, 30, 30)
  y2 = y2 - vy1
  if (y2 < 0)
 {
   y2 = 600
 }
  rect(x3,y3, 30, 30)
  y3 = y3 - vy1
  if (y3 < 0)
  {
    y3 = 600
  }
  rect(x4,y4, 30, 30)
  y4 = y4 - vy1
  if (y4 < 0)
  {
    y4 = 600
  }
}

