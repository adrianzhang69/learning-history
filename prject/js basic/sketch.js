let  a = 200;
let fillColor = "red"

function drawRow(row)
{
  let i = 0;
  while (i < 5)
  {
    rect(i * 50, row * 50, 30, 30)
    i += 1;
  }
}
function drawTable(rows)
{
  let row = 0;
  while (row < rows)
  {
    drawRow(row)
    row += 1;
  }
}


let angle = 0;
function drawGrid(xx, y, rows, factor, angle)
{
  push()
  translate(xx, y)
  scale(factor)
  rotate(angle)
  drawTable(rows)
  pop()

}
function setup() 
{
  createCanvas(800, 600);
  angleMode(DEGREES)
}

function draw()
{
  background(240);
  fill(fillColor);

  drawGrid(400, 300, 5, 0.5, 45)
  drawGrid(100w       )
}
