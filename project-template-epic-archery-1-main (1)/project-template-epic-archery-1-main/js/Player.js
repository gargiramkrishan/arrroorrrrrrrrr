class Player
{
  constructor(x,y,angle)
  {
    this.x = x;
    this.y = y;
    this.width = 200;
    this.height = 400;
    this.angle = angle;

    this.image = loadImage("assets/player.png")
  }
  display()
  {
    imageMode(CENTER);
    image(this.image,300,350,this.width,this.height)
  }
}