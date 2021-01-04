class Slingshot{
    constructor(bodyA,pointB){
        var options={
         bodyA: bodyA,
         pointB: pointB,
         length:10,
         stiffness: 0.04
            
        }
        this.pointB=pointB
        this.sling=Matter.Constraint.create(options)
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");

        World.add(world,this.sling)
    
    }
    display(){
        image(this.sling1,240,25)
        image(this.sling2,210,25)
        
        
        

        if(this.sling.bodyA){
            var pointA=this.sling.bodyA.position;
        var pointB=this.pointB;
        push();
            if(pointA>200){
                image(this.sling3,pointA.x+30,pointA.y-15,15,30)    
                strokeWeight(7)
                    stroke(48,23,8)
            
                line(pointA.x+30,pointA.y,pointB.x,pointB.y)
                line(pointA.x+30,pointA.y,pointB.x+30,pointB.y)   
            }
            else{
                image(this.sling3,pointA.x-15,pointA.y-15,15,30)    
        strokeWeight(7)
            stroke(48,23,8)
    
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        line(pointA.x,pointA.y,pointB.x+30,pointB.y)
            }
            pop();
    }
    
}
    fly(){
        this.sling.bodyA=null
    
    }
}
