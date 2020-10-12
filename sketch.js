const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Polygon = Matter.Polygon;

var slingshot,polygon_img;

function preload(){
  polygon_img = loadImage("polygon.png");

}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  createSprite(400, 200, 50, 50);

  box1 = new Box(330,235,30,40);
  box2 = new Box(360,235,30,40);
  box3 = new Box(390,235,30,40);
  box4 = new Box(420,235,30,40);
  box5 = new Box(360,195,30,40);
  box6 = new Box(390,195,30,40);
  box7 = new Box(420,195,30,40);
  box8 = new Box(390,155,30,40);
  stand = new Stand(310,220,100,20);


  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot = new Slingshot(this.polygon,{x : 100, y : 200});

}

function draw() {
  background(0); 
  
  textSize(30);
  fill ("white");
  text("Score : " + score,750,40);

  box1.display();
  box1.score();
  box2.display();
  box2.score();
  box3.display();
  box3.score();
  box4.display();
  box4.score();
  box5.display();
  box5.score();
  box6.display();
  box6.score();
  box7.display();
  box7.score();
  box8.display();
  box8.score();

  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);

  slingshot.display();


  drawSprites();
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(this.polygon);

  }
}