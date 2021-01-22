//Create variables here
var Food=20;
var database;
var a=Food;
function preload()
{
  //load images here
  dog1=loadImage("Dog.png");
  dog2=loadImage("happydog.png");
}

function setup() {
  database=firebase.database();
  createCanvas(800, 700);
  dog=createSprite(400,350,30,30);
  dog.addImage(dog1);
  dog.scale=0.2;
  //dog.scale(1);
  Foodref=database.ref("Food");
  Foodref.on("value",readStock);
  

  
}


function draw() {  
  background("red");
  fill("blue");
  textSize(25);
  text("Press up arrow to feed the pet",10,30);
  text("Food remaining:"+Food,400,30);

  drawSprites();
  

  //add styles here
  if (keyWentDown(UP_ARROW)){
    writeStocks(Food);
    dog.addImage(dog2);
}
}
 function readStock(data){
  Food=data.val();
}
 function writeStocks(x){

  if (x<=0){
   
  }
  else{
    x=x-1;
    console.log(x)
  
  }
  
  database.ref('/').update({
Food:x
  })
}


