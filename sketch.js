var bg, bgImg;
var spaceship, spaceshipImg;
var Alien, alienImg1,alienImg2, alienImg3, alienImg4, alienImg5, alienImg6
var life1, life2, life3
var life1Img, life2Img, life3Img;
var alienGroup
var gameState = 0;

function preload(){
    bgImg = loadImage("./images/background.jpg");
    spaceshipImg = loadImage("./images/rocket pc.png");

}

function setup(){
    createCanvas(windowWidth,windowHeight);
}

function draw() {
    if (gameState === 0 ){
    background(bgImg);

    startButton = createButton("START");
    startButton..position(width / 2 - 90, height / 2 - 20);

    startButton.mousePressed(()=>{
        gameState = 1
    })
}

if (gameState === 1){
    background(bgImg);

    spaceship=createSprite(width/2, height/4+20, 30, 30);
    spaceship.addImage("PlayImage", spaceshipImg)

}
}