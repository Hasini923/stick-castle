const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine , world ;
var ground , square , leftrec1 , leftrec2 , rightrec1 , rightrec2 , baserec ;
var step1 , step2 , step3 , step4;

function setup() {
  createCanvas(400,400);
 engine = Engine.create();
 world = engine.world;

 ground = new Ground (200,370,400,20);
 step1 = new Step (350,350,30,15);
 step2 = new Step (320,335,30,15);
 step3 = new Step (290,320,30,15);
 step4 = new Step (260,305,30,15);
rightrec1 = new Rightrec (234,267,20,90);
rightrec2 = new Rightrec (214,247,20,130);
square = new Square (153,262,100,100);
leftrec1 = new Leftrec (102,247,20,130);
leftrec2 = new Leftrec (81,267,20,90);
baserec = new Baserec (160,337,180,50);

}

function draw() {
  background(0);
  
  ground.display();
  step1.display();
  step2.display();
  step3.display();
  step4.display();
  rightrec1.display();
  rightrec2.display();
  square.display();
  leftrec1.display();
  leftrec2.display();
  baserec.display();

  drawSprites();
}