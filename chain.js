class Chain {
    constructor(bodyA,bodyB){
     var options={
         bodyA:stone.body,
         bodyB:point.body,
         stiffness:0.04,
         lenght:10,
     }
 
     var chain= Constraint.create(options);
     World.add(world,chain);
 
    }
   display(){
       var pointA=this.chain.bodyA.position;
       var pointB=this.chain.bodyB.position;
 
       line(pointA.x,pointA.y,pointB.x,pointB.y);
 
   }
 }
 