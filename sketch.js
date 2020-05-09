// You could have multiple flags like: start, launch to indicate the state of the game.
var play,start,gameState;
play = 1;
start = 0;
gameState = start;
var ground,tanker1,tan2,cir,tan3;

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.
var engine,world;


function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
   var canvas = createCanvas(800,400);
   engine = Engine.create();
   world = engine.world;

 ground = new Ground(400,390,800,20);
 tanker1 = new Tanker(150,360,100,40,PI);
 tan2 = new Tanker(150,320,100,40,PI);
 cir = new Circle(150,300,40);
 tan3 = new Tanker(175,280,60,20,-PI/8);

}

function draw() {
// Remember to update the Matter Engine and set the background.
 background(0);
 Engine.update(engine);
 
ground.display();
tan3.display();
cir.display();
tanker1.display();
tan2.display();


}


function keyReleased() {
    // Call the shoot method for the cannon.
}