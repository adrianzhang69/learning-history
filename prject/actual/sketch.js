class Actor
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
        this.v = -Math.floor(Math.random() * 4 + 2)
        this.w = 20;
        this.h = 40;

    }
    display()
    {
        rect(this.x, this.y, 50, 50)

    }
    moveRight()
    {
        this.x += 10;
    }
    moveUp()
    {
        this.y -= 10
    }
    moveDown()
    {
        this.y += 10;
    }
    moveLeft()
    {
        this.x -= 10;
    }

    keyPressed()
    {
        if (keyCode == RIGHT_ARROW)
        {
            this.moveRight();
        }
        if (keyCode == LEFT_ARROW)
        {
            this.moveLeft();
        }
        if (keyCode == UP_ARROW)
        {
            this.moveUp();
        }
        if (keyCode == DOWN_ARROW)
        {
            this.moveDown();
        }
    }

    collisionRect(tree)
    {
        return collideRectRect(this.x, this.y, this.w, this.h, tree.x, tree.y, tree.w, tree.h);
    //    collisionRectRect(this.x, this.y,)
    }
}

class Tree
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
        this.v = -Math.floor(Math.random() * 4 + 2)
        this.w = 20;
        this.h = 40;
    }
    update()
    {
        if (this.y < 0)
        {
            // this.y = 600;

            this.y = Math.floor(Math.random()*200 + 600);
            this.x = Math.floor(Math.random()*800);
        }
        this.y += this.v;
    }
    display()
    {
        fill("green")
        rect(this.x, this.y, 20, 40);
        fill("red")
    }
    run()
    {
        this.update();
        this.display();
    }
}

let player = new Actor (100, 100);
let tree = new  Tree(100, 600)
let tree2 = new Tree(200, 600)

let trees = [tree, tree2]

function generateTrees(array)
{
    for (let i = 0; i < 5; i++)
    {
        array.push(new Tree(i * 150, 60))
    }
}


function setup() 
{
  createCanvas(800, 600);
  noStroke();

  generateTrees(trees);
  rectMode(CENTER)

}
let hit = "hit"


// just display trees
function displayTrees(array)
{
    for (let i = 0; i < array.length; i++)
    {
        trees[i].display();
    }
}
function run(array)
{
    for (let i = 0; i < array.length; i++)
    {
        trees[i].run()
    }
}

let ended = false;
function draw()
{
  background("pink");
  if(keyIsPressed && !ended)
  {
      player.keyPressed();
  }
  player.display()
  
  for (let i = 0; i < trees.length; i++)
  {
      if (player.collisionRect(trees[i]))
      {
          ended = true;
      }
  
  }

  if (!ended)
  {
      run(trees);
  }
  else
  {
      displayTrees(trees)
  }

}

function keyPressed()
{
    // player.keyPressed();
}

