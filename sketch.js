const Engine=Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint;
const Body=Matter.Body;

var polygon,polygonimg;
var engine,world;


function preload(){
   // polygonimg=loadImage("polygon.png");
       

}





function setup(){
createCanvas(800,600);

engine=Engine.create();
world= engine.world;
ground1= new Ground(400,550,800,10);
ground2= new Ground(200,400,300,10);
ground3= new Ground(600,250,300,10);

    box1 = new Box(200,235,30,40);
    box2 = new Box(325,235,30,40);
    box3= new Box(265,235,30,40);
    box4= new Box(265,295,30,40);
    box5= new Box(145,235,30,40);
    box6= new Box(80,235,30,40);
    box7= new Box(145,295,30,40);
    box8= new Box(200,295,30,40);
    
    box9= new Box(200,355,30,40);

    box10 = new Box(600,65,30,40);
    box11 = new Box(665,65,30,40);
    box12 = new Box(725,65,30,40);
    box13 = new Box(545,65,30,40);
    box14 = new Box(480,65,30,40);

    box15 = new Box(600,5,30,40);
    box16 = new Box(665,5,30,40);
    box17 = new Box(545,5,30,40);
    box18 = new Box(600,-55,30,40);

    poly = new Stone(350,250,40,40);

  
}


function  draw(){
background("brown");
Engine.update(engine);

ground1.display();
ground2.display();
ground3.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();

box6.display();
box7.display();
box8.display();

box9.display();

box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();

poly.display();
//box11.display();
//box11.display();
//box11.display();


//line(poly.body.postion.x,poly.body.postion.y,.body.postion.x,ground2.body.postion.y)

}