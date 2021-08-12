const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground, leftWall, rightWall;
var bridge;
var joinPoint, jointLink;
var stones = [];

function setup() {
  createCanvas(800,500);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base(400,490,800,20);
  leftWall = new Base(10,400,20,200);
  rightWall = new Base(790,400,20,200);

  bridge = new Bridge(16,{x:0,y:400});
  joinPoint = new Base(700,400,20,50);

  Matter. Composite.add(bridge.body, joinPoint);
  jointLink = new Link(bridge, joinPoint); 

  for (let i = 0; i <= 8; i++) {
    var x = random(width/2-200,width/2+300); 
     var y = random(-10,140); 
     var stone = new Stone(x,y,80,80); 
     stones.push(stone); 
   }

}

function draw() {
  background(51);
  Engine.update(engine);

  ground.display();
  leftWall.display();
  rightWall.display();
  bridge.show();
  //stones.displayBall();

 for(var stone of stones ){
stone.displayBall(); 
 }
}
