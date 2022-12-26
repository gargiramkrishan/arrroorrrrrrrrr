class Aroor
{
     constructor(x,y,width,height,angle)
     {
         this.x = x;
         this.y = y;
         this.width = width;
         this.height = height;
         this.angle = angle;
         this.image = loadImage("assets/archery-arrow-png-black-13.png");
     }
     display()
     {
         if(keyIsDown(UP_ARROW)&& this.angle > -0.5453981633974481)
         {
           this.angle -= 0.02;
         }
         if(keyIsDown(DOWN_ARROW) && this.angle < 0.100)
         {
           this.angle += 0.04;
         }
         push();
         translate(this.x, this.y);
         rotate(this.angle);
         console.log(this.angle)
         imageMode(CENTER);
         image(this.image,150,50,100,200);
         pop();
       }
}