var fixedRect, movingRect;
var w1, w2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(200,400,80,30);
  movingRect.shapeColor = "green";
  w1 = createSprite(200,300,50,50);
  w2 = createSprite(200,600,50,50);
  movingRect.debug = true;
  fixedRect.velocityX = -2
  movingRect.velocityX=2
  w1.velocityY=1
  w2.velocityY=-1


}

function draw() {
  background(0,0,0);  
 

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
      && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  bounceOff(movingRect, fixedRect)
  bounceOff(w1, w2)
  drawSprites();
}
function bounceOff(obj1, obj2){
  if(obj1.x-obj2.x<obj1.width/2 +obj2.width/2&&
    obj2.x-obj1.x<obj2.width/2+obj1.width/2){
      obj1.velocityX= (-1) *obj1.velocityX
      obj2.velocityX= (-1) *obj2.velocityX 

    }
    if(obj1.y-obj2.y<obj1.height/2+obj2.height/2&&
      obj2.y-obj1.y<obj2.height/2+obj1.height/2){
        obj1.velocityY= (-1)*obj1.velocityY
        obj2.velocityY= (-1)*obj2.velocityY
      }
}