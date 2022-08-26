var a,b,c;
var pc;
var casita;

function preload(){
casita = loadImage("images/casita.jpeg");
}
function setup(){
createCanvas (600,600);
a = createSprite(250,250,20,100);
b = createSprite(250,200,100,20);
c = createSprite(250,50,20,100);

pc = createSprite(100,100,10,10);

}

function draw(){
background("black");
image(casita, -100, -100,2400,1155);
if(keyDown(RIGHT_ARROW)){
  pc.x+=10;
}
if(keyDown(LEFT_ARROW)){
  pc.x-=10;
}
if(keyDown(UP_ARROW)){
  pc.y-=10;
}
if(keyDown(DOWN_ARROW)){
  pc.y+=10;
}
camera.position.x = pc.x;
camera.position.y = pc.y;
drawSprites();
}