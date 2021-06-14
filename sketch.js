//variables
var bg,bgImg;
var playerImg,player;

function preload(){
  bgImg=loadImage("bg.jpg");
}

function setup() {
  createCanvas(1000,600);

  bg=createSprite(500,200,1000,600);
  bg.addImage(bgImg);
  bg.scale=3.7;
  bg.velocityX=-5;

  player=createSprite(100,500,10,40);
}

function draw() {
  background(0);
  
  if(bg.x<0){
    bg.x=500;
  }

  if(keyDown("space")){
     player.velocityY=-10;
  }

  
  drawSprites();
}