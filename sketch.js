const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload()
{
  polygon_img=loadImage("polygon.png");
}

function setup(){
    var canvas=createCanvas(1200,600);
    engine=Engine.create();
    world = engine.world;

   ground= new Ground(700,590,1400,20);
   stand1=new Ground(520,500,280,10);
   stand2=new Ground(850,350,210,10);

   //stand1 level1
   box1=new Box(440,490,30,40);
   box2=new Box(460,490,30,40);
   box3=new Box(490,490,30,40);
   box4=new Box(510,490,30,40);
   box5=new Box(540,490,30,40);
   box6=new Box(570,490,30,40);
   box7=new Box(590,490,30,40);

   //stand1 level2
   box8=new Box(460,450,30,40);
   box9=new Box(490,450,30,40);
   box10=new Box(510,450,30,40);
   box11=new Box(540,450,30,40);
   box12=new Box(570,450,30,40);

   //stand1 level3
   box13=new Box(490,410,30,40);
   box14=new Box(510,410,30,40);
   box15=new Box(540,410,30,40);

   //stand1 level4
   box16=new Box(510,370,30,40);

   //stand2 level3
   box17=new Box(800,340,30,40);
   box18=new Box(820,340,30,40);
   box19=new Box(850,340,30,40);
   box20=new Box(880,340,30,40);
   box21=new Box(900,340,30,40);

   //stand2 level2
   box22=new Box(820,300,30,40);
   box23=new Box(850,300,30,40);
   box24=new Box(880,300,30,40);

   //stand2 level1
   box25=new Box(850,260,30,40);

   polygon=Bodies.circle(50,200,20);
   World.add(world,polygon);

   slingshot=new SlingShot(this.polygon,{x:100,y:200});

  
	

}

function draw(){
    background(0);
    Engine.update(engine);
    
    
   

    imageMode(CENTER)
    image(polygon_img,polygon.position.x,polygon.position.y+30,40,40);

    slingshot.display();
    ground.display();
    stand1.display();
    stand2.display();
    

    fill("lightblue");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();

    fill("pink");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box22.display();
    box23.display();
    box24.display();

    fill("cyan");
    box13.display();
    box14.display();
    box15.display();
    box25.display();

    fill("gray");
    box16.display();

    drawSprites();

    fill("white");
    textSize(20);
    text("Drag the Hexagonal Stone and Release it,to launch it towards the blocks",200,50);
    text("Press space to get a second chance to Play!!",780,560);

  }

  function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
      slingshot.attach(polygon);         
  }
}
