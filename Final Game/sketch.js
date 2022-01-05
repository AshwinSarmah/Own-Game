var policeCar, thiefCar ; 

var policeCarImg, thiefCarImg ; 

var bullet, bulletImg;

function preload(){
    policeCarImg = loadImage("images/policeCar.png");
    thiefCarImg = loadImage("images/thiefCar.png");

    bulletImg = loadImage("images/bullet2.png");
}

  

function setup(){
    createCanvas(windowWidth, windowHeight);

    bullet = createSprite(windowWidth/2, windowHeight - 400, 10, 10);
    bullet.addImage(bulletImg);
    bullet.scale = 0.3;
    bullet.visible  = false;

    policeCar = createSprite(windowWidth/2 , windowHeight - 286, 10, 10)
    policeCar.addImage(policeCarImg);

    thiefCar = createSprite(windowWidth/2, windowHeight - 1100, 20, 20);
    thiefCar.addImage(thiefCarImg)
    thiefCar.scale = 0.4;
    
  
}


function draw(){
    background("white");

    thiefCar.velocityX = random(2,6);

   

    drawSprites();

}