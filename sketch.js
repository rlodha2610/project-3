  var path;
  var runner,runner_run;
  var invisibleground;
  var invisiblegroundw;
  
function preload(){
  pathImg=loadImage("path.png");
  runner_run=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(800,800);
  path=createSprite(180,160);
  path.addImage("path",pathImg);
  path.velocityY = 6;
  path.scale = 1.2;

  runner=createSprite(280,300);
  runner.addAnimation("run",runner_run)
  runner.scale = 0.06;

  invisibleground=createSprite(70,250,10,500);
  invisibleground.visible=false;

 
  invisiblegroundw=createSprite(320,250,10,500);
  invisiblegroundw.visible=false;

}

function draw() {
  background('white');
  runner.x = World.mouseX;

  runner.collide(invisibleground);
  runner.collide(invisiblegroundw);

  

  path.velocityY=8;
  if (path.y>600){
  path.y=path.width/2
  }
  
  drawSprites();
}



