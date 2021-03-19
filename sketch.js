var box, ground;

//obstacles
var obstacle1, obstacle2, obstacles3, obstacles4;

//score
var distance=0;

//gameState
var gameState= "play";

function preload(){

}

function setup() {
  createCanvas(400,400);
  box = createSprite(75,370,20,20);
  ground = createSprite(300,385,900,10);
  
    O1G= new Group();
    O2G= new Group();
    O3G= new Group();
    O4G= new Group();
  
}

function draw() {
 background("rgb(0,180,255)");
  drawSprites();

  
  if(gameState=="play"){
    box.visible=true;
    ground.visible=true;
    ground.shapeColor="black";
  ground.velocityX=-4;
     if(ground.x<0){
       ground.x=ground.width/2;
     }

     if(frameCount % 5==0){
       ground.shapeColor="red";
     } 
     if(keyDown("space")&& box.y>=350){
       box.velocityY=-14;
       box.shapeColor="yellow";
     }
    if(keyDown("DOWN_ARROW")){
      box.velocityY=13;
    }
    

    if(box.isTouching(O1G)||box.isTouching(O2G)||box.isTouching(O3G)||box.isTouching(O4G)){
       O1G.destroyEach();
       O2G.destroyEach();
       O3G.destroyEach();
       O4G.destroyEach();
       gameState="end";
       }

    
  
  box.velocityY = box.velocityY + 0.8; 
  box.collide(ground);
  obstacles1();
  obstacles2();
  obstacles3();
  obstacles4();
    
  }
  
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  
  
     if(gameState=="end"){
      box.velocityX=0;
      box.velocityY=0;
      ground.velocityX=0;
          box.velocityY = box.velocityY + 0; 
       distance=0;
       box.visible=false;
       ground.visible=false;
       textSize(20);
       fill("red");
       text("Game Over! Press R to restart",50,200);
    }
  
    if(keyDown("R")){
      gameState="play";
    }
  
  textSize(20);
  fill(255);
  text("Distance: "+ distance,270,30);
   distance = distance + Math.round(getFrameRate()/50);

}


function obstacles1(){
  if(frameCount%100==0){
    obstacle1 = createSprite(400,355,20,50)
    obstacle1.shapeColor="green";
    obstacle1.velocityX=-6;
    obstacle1.setCollider("circle",0,0,20);
    O1G.add(obstacle1);
  }
}


function obstacles2(){
  if(frameCount%140==0){
    obstacle2 = createSprite(400,370,50,20)
    obstacle2.shapeColor="purple";
    obstacle2.velocityX=-6;
    obstacle2.setCollider("circle",0,0,20);
    O2G.add(obstacle2);
  }
}


function obstacles3(){
    if(frameCount%170==0){
    obstacle3 = createSprite(400,355,50,50)
    obstacle3.shapeColor="black";
    obstacle3.velocityX=-6;
    obstacle3.setCollider("circle",0,0,20);
      O3G.add(obstacle3);
  }
}


function obstacles4(){
    if(frameCount%250==0){
    obstacle4 = createSprite(400,345,10,80)
    obstacle4.shapeColor="red";
    obstacle4.velocityX=-6;
    obstacle4.setCollider("circle",0,0,20);
      O4G.add(obstacle4);
  }
}