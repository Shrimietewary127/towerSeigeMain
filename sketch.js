const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var polygon;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;
  
 
  ground=new Ground(390,250,400,10);

    box1=new Box(330,235,30,40);
    box2=new Box(360,235,30,40);
    box3=new Box(390,235,30,40);
    box4=new Box(420,235,30,40);
    box5=new Box(450,235,30,40);
    box6=new Box(360,195,30,40);
    box7=new Box(390,195,30,40);
    box8=new Box(420,195,30,40);
    box9=new Box(390,155,30,40);

    polygon=Bodies.circle(50,200,20);
  World.add(world,polygon)
  
   slingshot=new SlingShot(polygon,{x:100,y:200})


}

function draw() {
  background(255,255,255); 

  Engine.update(engine);

 ground.display();
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();

 ellipseMode(RADIUS);
 fill('red')
 ellipse(polygon.x,polygon.y,40,40);
 
 slingshot.display();
  drawSprites();
}

  
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}