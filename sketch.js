
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paper;
var boundary1, boundary2, boundary3;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(700,height,1400,20);
	paper=new Paper(200,220,20);

	boundary1=createSprite(1100,630,20,120);
	boundary1.shapeColor="red";

	boundary2=createSprite(1028,680,120,20);
	boundary2.shapeColor="red";

	boundary3=createSprite(956,630,20,120);
	boundary3.shapeColor="red";






	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  keyPressed();

  ground.display();
  paper.display();
  boundary2.display();
  boundary1.display();
  boundary3.display();
  
  drawSprites();

}

function keyPressed(){
	if (keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:-1});
	}
}



