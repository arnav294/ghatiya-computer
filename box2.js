class Box2 {
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
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("red");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
  