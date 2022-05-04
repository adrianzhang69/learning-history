class Enemy
{
    constructor(x, y)
    {
        this.w = 40;
        this.height = 80;
        this.x = x;
        this.y = 450 - this.height;
        this.vx = 4;
    }
    display()
    {
        fill("black")
        rect(this.x, this.y, this.w, this.height)
    }

    update()
    {
        this.x -= this.vx;
        if (this.x < 0)
        {
            this.x = 600;
            this.height = Math.random()*100;
            this.y = 450 - this.height;
        }
    }
}

class Ball
{
    constructor(x,y)
    {
        this.x=x;
        this.y=y;
        this.radius=100;
        this.vy=1;
        this.ay = 0;
    }
    display()
    {
        fill("green")
        noStroke();
        ellipse(this.x, this.y, this.radius, this.radius)
    }
    update()
    {
        
        if (this.y < 400)
        {
            this.vy += this.ay;
            this.y += this.vy;
        }
        else
        {
            this.vy = 0;
            this.ay = 0;
            this.y = 400;
        }
    }
    run()
    {
        this.update();
        this.display();
    }


    jump()
    {
        this.y -= 1;
        this.vy = -6;
        this.ay= 0.2;
    }

}
let ball = new Ball(200, 400);
let enemy = new Enemy(40, 23)
function setup()
{
    createCanvas(600, 450);
}

function draw()
{
    background(240);
    ball.run();
    enemy.update();
    enemy.display();
   
}

function keyPressed()
{
    if (keyCode == 38)
    {
        ball.jump();
    }
}

