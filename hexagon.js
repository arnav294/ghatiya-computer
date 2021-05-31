class Hexagon {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          density:1.2,
          friction:0.8,
          restitution:0.01
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("polygon.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("red");
      image(this.image,pos.x, pos.y, this.width, this.height);
    }
  };
  