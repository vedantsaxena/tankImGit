class Tanker {
  constructor(x, y, width, height,angle) {
    var options={
      isStatic:true
    }
     this.body = Bodies.rectangle(x,y,width,height,options);
     World.add(world,this.body);
     this.width = width;
     this.height = height;
     this.body.color = color(255);
     Matter.Body.setAngle(this.body,angle);
      }
    

    display(){
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look
      var pos =this.body.position; 
      rectMode(CENTER);
      rect(pos.x,pos.y, this.width, this.height);
    
    };
};
