
var monkey , monkey_running
var banana ,bananaImage, obstacleImage
var foodGroup, obstacleGroup;
var sprite_0;
var ground;
var score=0;



function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  sprite_0 = loadImage("sprite_0.png");
 
  obstacleGroup=new Group();
 foodGroup=new Group();
}



function setup() {
  createCanvas (400,400);
  ground=createSprite(200,350,400,10);
  
  ground.velocityX=-4;
  ground.x = ground.width/2;
  
  monkey=createSprite(70,315,20,10);
  monkey.addAnimation(".",monkey_running);
  monkey.scale=0.1;
  monkey.debug=true;
  
  
  
}


function draw() {
background("lightgrey");
  
  
   score = score + Math.round(getFrameRate()/50);
  
  if (ground.x<399){
    ground.x=200;
    ground.velocityX=-4;
    ground.lifetime=400;
  }
  
  if (frameCount%70===0)
    {
      var banana = createSprite(405,(Math.round(random(150,260))),10,10);
      banana.addImage("..",bananaImage);
      banana.scale=0.1;
      banana.velocityX= -4;
      banana.lifetime=100;
      console.log(banana.y);
      foodGroup.add(banana);
    }
  
  if (frameCount%100===0)
{
  var obstacle=createSprite(404,315,20,80);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.2;
  obstacle.velocityX= -4;
  obstacle.debug=true;
 obstacle.setCollider("rectangle",0,15,400,400);
  //obstacle.collide(monkey);
  obstacle.lifetime= 110;
  obstacleGroup.add(obstacle);
    if (monkey.isTouching(obstacleGroup))
 {
  score=score+0;
 monkey.velocityY=0;
   foodGroup.setVelocityXEach(0);
   
   obstacleGroup.setVelocityXEach(0);
   obstacleGroup.setLifetimeEach(-1);
    foodGroup.setLifetimeEach(-1);
 ground.velocityX=0;
   monkey.changeImage(sprite_0);
   
 }
}  
  if(keyDown("space") && monkey.y >= 250) {
      monkey.velocityY = -15;
    }
  
  
    monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  
  
  
  drawSprites();
  textSize(20);
  text("Survival Time:"+ score,100,50);
 

}







