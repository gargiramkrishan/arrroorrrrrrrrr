class bASE
{
  constructor(x,y)
  {
    this.x = x;
    this.y = y;
    this.width = 400;
    this.height = 700;
    this.image = loadImage("assets/base1.png")

  }
  display()
  {
    imageMode(CENTER)
    image(this.image, 300,800,this.width,this.height)
  }
}