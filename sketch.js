const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper;
var ground;
var dustbinObj;
var world;


function setup() {
	var canvas = createCanvas(1000, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2, 650, width, 100);
	
	paper = new Paper(width/2 - 300, 100, 70);

	dustbinObj = new Dustbin(800, 610);


	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 1200,
			height: 700,
			wireframes: false
		}
	});


	Engine.run(engine);
  
}


function draw() {
    rectMode(CENTER);
    background(211, 211, 211);

    Engine.update(engine);

    strokeWeight(2);

    ground.display();
    paper.display();
    dustbinObj.display();


    drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x: 200, y: -267});
	}
}
