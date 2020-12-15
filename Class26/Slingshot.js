class Slingshot{
    constructor(body1,point2){
        var options={
            bodyA: body1,
            pointB: point2, 
            stiffness:0.04,
            length:10  
        }
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    
    }
    fly(){
        this.sling.bodyA=null;
    }
    display(){
    if(this.sling.bodyA)
    {
      var  point1=this.sling.bodyA.position;
      var  point2=this.sling.pointB;
        strokeWeight(4);
        line(point1.x,point1.y,point2.x,point2.y);
    }
    }
}