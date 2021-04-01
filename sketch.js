
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground;
var dustbin,dustbin1,dustbin2;
var dustinImg,paperImg;

function preload()
{
	dustbinImg = loadImage("dustbin.png");
  paperImg = loadImage("paper.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  paper = new Paper(100,100,20);
  paper.addImage(paperImg);S
 ground = new Ground(width/2,650,width,20);


 dustbin = Bodies.rectangle(width/2,630,200,20,{isStatic : true});
 dustbin.addImage(dustbinImg);
	World.add(world,dustbin);

	dustbin1 = Bodies.rectangle(width/2-100,612.5,20,100,{isStatic : true});
	World.add(world,dustbin1);

	dustbin2 = Bodies.rectangle(width/2+100,612.5,20,100,{isStatic : true});
	World.add(world,dustbin2);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine)

  


  rect(dustbin.position.x,dustbin.position.y,200,20);

  rect(dustbin1.position.x,dustbin1.position.y,20,100);

  rect(dustbin2.position.x,dustbin2.position.y,20,100);
  
  
  paper.display();
  ground.display();
  keypressed();
  
  
}


function keypressed(){
  if(keyCode === UP_ARROW){
    Matter.body.applyForce(paper.body,paper.body.position,{x:15,y:-15});  
  }
}


