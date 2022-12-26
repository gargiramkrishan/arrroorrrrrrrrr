class Computerr
{
  constructor(x,y)
  {
    this.x = x;
    this.y = y;
    this.width = 200;
    this.height = 400;

    this.image = loadImage("assets/player.png")
  }
  display()
  {
    imageMode(CENTER);
    image(this.image,1000,360,this.width,this.height)
  }
}