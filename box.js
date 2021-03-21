class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.1,
          'friction':1,
          'density':1.0
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visible=225;
      
      World.add(world, this.body);
    }
    display(){
      if (this.body.speed<3){
         this.visible=225
        }
       else{
         World.remove(world,this.body);
         this.visible=this.visible-1;

      var pos =this.body.position;
      //var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
      rectMode(CENTER);
      
      tint(255,this.visible);
     // image(this.image,this.body.position.x,this.body.position.y,50,50)

      fill("green");
      rect(0, 0, this.width, this.height);
      pop();
    }
  }
}