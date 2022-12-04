
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball;
var lefttrash;
var righttrash;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var lefttrash_options ={
		isStatic: true
	  };
	  var righttrash_options ={
		isStatic: true
	  };

	var ground_options ={
		isStatic: true
	  };

	  
	Engine.run(engine);
	ground = Bodies.rectangle(400,700,800,40,ground_options);
  World.add(world,ground);

  lefttrash = Bodies.rectangle(400,650,20,100,lefttrash_options);
  World.add(world,lefttrash);

  righttrash = Bodies.rectangle(300,650,20,100,righttrash_options);
  World.add(world,righttrash);

  ball = Bodies.circle(500,50,20);
  World.add(world,ball);


}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(ground.position.x,ground.position.y,800,40);
  rect(lefttrash.position.x,lefttrash.position.y,20,100);
  rect(righttrash.position.x,righttrash.position.y,20,100);
  ellipse(ball.position.x,ball.position.y,50);
  drawSprites();
 
}


function hForce(){

	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}



function vForce(){

	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.005});
	
}


function keyReleased(){

	if(keyCode===DOWN_ARROW){
	
		vForce()
	
	}

	
	if(keyCode===RIGHT_ARROW){
	
		hForce()
    }

}
	
	
	
