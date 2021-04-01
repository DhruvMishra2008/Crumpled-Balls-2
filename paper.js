class Paper {
    constructor(x, y, r ) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, r , options);

     


      this.radius = r;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      
      fill("yellow");
      stroke("white");
      strokeWeight(3)
      circle( 0 , 0 , this.radius*2 );
      pop();
    }
  };
  