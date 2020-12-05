class Log {
    constructor(x, y,angle, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y,250, 10, options);
      this.width = 250;
      this.height = 10;
      Matter.Body.setAngle(this.body,angle);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255);
      strokeWeight(4);
      stroke("green");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  