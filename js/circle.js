class Circle {
    constructor(x,y,radius){
        var options={
            isStatic:true
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.body.color = color(50,150,50);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius);
    }
}