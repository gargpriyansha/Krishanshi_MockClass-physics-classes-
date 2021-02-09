//1. declaring the physics engine
const Engine = Matter.Engine 
const World = Matter.World 
const Bodies = Matter.Bodies

//2. creating local variables for use. 
var engine, world, ball, ground; 


function setup() {
  createCanvas(800,800);
 
  //3.attaching local variable with engine
  engine = Engine.create();
  world = engine.world; 


  //4.craeting a component

  //creating ground object to pass values in ground.js
    ground = new Ground(200,600,800,10);
  
  //4.creating second component
  //4.1 creating the options for ball component
  var ball_options={
    restitution : 1
  }

  //4.2 creating ball compoenent
  ball = Bodies.circle(200,200,20,ball_options);
  
  //4.3 adding to the world. 
  World.add(world,ball);
}

function draw() {
  background(0);  
  
  //5.updating the program with engine. 
  Engine.update(engine);

  //display command of ground through class ground.js.
  ground.display();

  //6.dislpay command for ball component.
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y, 20,20 ); 
  drawSprites();
}