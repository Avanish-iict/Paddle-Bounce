//Creating variables.
var ballImage,paddleImage;
var edges;

function preload() {
ballImage = loadImage("ball.png");
paddleImage = loadImage("paddle.png");
}

function setup() {
  createCanvas(400, 400);
   ball = createSprite(0,200,10,10);
   ball.addImage("ball.png",ballImage);
   
   paddle = createSprite(390,200,10,10);
    paddle.addImage("paddle.png",paddleImage);
  
    ball.velocityX = 9;
     

}

function draw() {
  background(205,153,0);
  
 edges =  createEdgeSprites();
   ball.bounceOff(edges[0]);
   ball.bounceOff(edges[2]);
   ball.bounceOff(edges[3]);
    paddle.bounceOff(edges[2]);
    paddle.bounceOff(edges[3]);
   
   
   if(ball.bounceOff(paddle)){
      ball.velocityY = -2||2;
}
 
   if(keyDown(UP_ARROW)){
    paddle.velocityY = -3;
    paddle.velocityX = 0;    
    
  }
  
  if(keyDown(DOWN_ARROW)){
    paddle.velocityY = 3;
    paddle.velocityX = 0;
    
  }
  
  
  
  randomVelocity();
  drawSprites();
  
  if(ball.x>400){
     fill("red");
    textSize(30);
     text("You Loose...",150,200);
}
}

function randomVelocity(){

  if(ball.bounceOff(paddle)){
     ball.VelocityY = 2;
    ball.y = randomNumber(250,360);
}
}

