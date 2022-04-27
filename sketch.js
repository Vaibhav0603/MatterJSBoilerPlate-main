
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let engine;
let world;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(1400, 680);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ball_options = {
		restitution : 1,
		restitution:0.3,
		friction:0,
		density:1.2
	  }
	  ground =new Ground(width/2,670,width,20);
	  right = new Ground(1300,600,20,120);
	  left = new Ground(1100,600,20,120);
	  ball = Bodies.circle(200,100,20,ball_options);
	  World.add(world,ball);
	  rectMode(CENTER);
	  ellipseMode(RADIUS);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,20);
  Engine.update(engine)
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, {x:0,y:0},{x:61,y:0.1})
		  
	}
}




