class Tree // create Template or class of Tree
{ // use abstract to manage complexity of tree
  constructor(x, y, im)
  {
    this.x = x; // set the x, y and picture of treee
    this.y = y;
    this.im = im;
    this.vy = 2; // set seep
  }
  display (){ // display the tree on screen
    image(this.im, this.x, this.y, 20, 20);
  }
  update () // this is function, or call it method in class
  { // update position of tree
    this.y -= this.vy;
    if (this.y < 0)
    {
      this.y = Math.floor(Math.random()*600+600);
      this.x = Math.floor(Math.random()*400);
    }
  }
  run ()
  { // update postion and disply the 
    // se we get tree moving animation
    this.update();
    this.display();
  }
}

class Actor
{
  constructor(x, y, im)
  {
    this.x = x;
    this.y = y;
    this.im = im;
    // this.vx = 0;
    this.v = 1000;
    this.vx = 0
    this.vy = this.v;
    this.targetX = 0;
    this.targetY = 0;
  }
  display ()
  {
    image(this.im, this.x, this.y,20,20)
    text(this.vx, 100,100)
  }
  update ()
  {
   
    let angle = Math.atan2(mouseY-this.y, mouseX-this.x);
    this.vx = this.v * Math.cos(angle);
    this.vy = this.v * Math.sin(angle)
    console.log(this.vx, this.vy)
    text("vx: " + Math.floor(this.vx/50) + " vy: " + Math.floor(this.vy/50), 100, 200)
    line(mouseX, mouseY, this.x, this.y)

    line(this.x, this.y, this.x+this.vx, this.y+this.vy)

    line(this.x, this.y, this.x+this.vx/500, this.y)
    line(this.x, this.y, this.x, this.y+this.vy/500)
     if (this.x > 0 && this.x < 300)
    {
      this.x += this.vx/500;
    }
    else
    {
      this.vx = 0;
    }
    this.y += this.vy/500;
    

  }
  mouseClicked ()
  {
    

  }

  keyReleased ()
  {
    // console.log(keyCode)

    if (keyCode == 65)
    {
      this.v = 0;
       console.log("a")
    }

  }
}


let img, chrismasTree,playerImage; // declare variables to hold tree picture
// load the tree image first
function preload()
{
  img = loadImage("unknowns.jpg") // loadImage load tree image
  chrismasTree = loadImage("ssw.jpg") // loadImage load tree image
  playerImage = loadImage("snowman.png")

}

let t, t1, t3, t2; // variable hold trees
let trees = [] // list hold different trees
let player;

function setup() 
{
  createCanvas(400, 600);
  // angleMode(DEGREES)
  console.log(Math.atan(1,1))
  console.log(Math.tan(Math.PI/4))
  console.log(Math.PI/4)
  console.group(Math.sqrt(2)*Math.sin(Math.PI/4))
  

  // angleMode(DEGREES);

  for (let i = 0; i < 20; i++)
  {
    let x = Math.floor(Math.random()*400);
    let y = Math.floor(Math.random()*300+300);
    let flag = Math.random();
    let t;
    if (flag > 0.5)
    {
      t = img;
    }
    else
    {
      t = chrismasTree;
    }
    trees.push(new Tree(x, y, t))
    
  }
  // trees.push(new Tree(200,200,playerImage))
  player = new Actor(200, 200, playerImage)
  // trees = [t1, t, t3, t2]; // add trees to list or array of trees
  
}

function draw()
{
  background(240); // set background color to gray 
  // use for loop iterate/traverse each tree in list trees
  for (let i = 0; i < trees.length; i++)
  {
    let t = trees[i];
    t.run();
  }
  // player.display();
  player.display()
  player.update()

}

function mouseClicked()
{
  player.mouseClicked();

}

function keyReleased()
{
  player.keyReleased();
} 