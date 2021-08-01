var img,bg,space1,space2,space3,space4;

var iss,spacecraft;
var hasDocked = false;

function preload(){
  img = loadImage("iss.png");
  bg = loadImage("spacebg.jpg");
  space1 = loadImage("spacecraft1.png");
  space2 = loadImage("spacecraft2.png");
  space3 = loadImage("spacecraft3.png");
  space4 = loadImage("spacecraft4.png");

}

function setup() {
  createCanvas(800,400);

  iss = createSprite(330,190);
  iss.addImage(img);
  iss.scale = 0.7;

  spacecraft = createSprite(285,350);
  spacecraft.addImage(space1);
  spacecraft.scale = 0.22;

}

function draw() {
  background(bg); 
  
  if(!hasDocked){
    spacecraft.x = spacecraft.x +random(-1,1);
  

  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y - 2;
  }
  if(keyDown("DOWN_ARROW")){
    spacecraft.addImage(space2);
    spacecraft.y = spacecraft.y + 2;
  }
  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(space3);
    spacecraft.x = spacecraft.x + 2;
  }
  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(space4);
    spacecraft.x = spacecraft.x - 2;
  }
  }
  if(spacecraft.y<=(iss.y+70)&& spacecraft.x<=(iss.x-10)){
     hasDocked = true;
     textSize(25);
     fill("red");
     text("docking succesfull",400,350);
  }
  drawSprites();
}