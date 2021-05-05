var canvas,bg;
var together;
var tom, tomImg1,tomImg2;
var jerry, jerryImg1,jerryImg2;

function preload() {
    bg = loadImage("images/garden.png");
    tomImg1= loadAnimation("images/cat1.png");
    tomImg2=loadAnimation("images/cat2.png","images/cat3.png");
    tomImg3= loadAnimation("images/cat4.png");
    jerryImg1=loadAnimation("images/mouse1.png");
    jerryImg2= loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImg3=loadAnimation("images/mouse4.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryImg1);
    jerry.scale = 0.15;

}

function draw() {

    background(bg);

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", tomImg3);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", jerryImg3);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage");
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tomImg2);
        tom.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryTeasing", jerryImg2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
}


// var bgImg;
// var cat;
// var together;
// var cat1, cat2, cat3, cat4;
// var mouse1, mouse2, mouse3, mouse4;
// function preload() {
// //load the images here
// bgImg=loadImage ("images/garden.png")
// catImg1=loadAnimation("images/cat1.png")
// mouseImg1=loadAnimation("images/mouse1.png")
// catImag2=loadAnimation("images/cat2.png")
// mouseImg2=loadAnimation("images/mouse2.png")
// catImg3=loadAnimation("images/cat3.png");
// mouseImg3=loadAnimation("images/mouse3.png")
// catImg4=loadAnimation("images/cat4.png")
// mouseImg4=loadAnimation("images/mouse4.png")
// }

// function setup(){
// createCanvas(1000,800);
// //create tom and jerry sprites here
// cat= createSprite("870,600");
// cat.addAnimation("catsleeping",catImg1);
// cat.scale=0.2;

// mouse= createSprite("200,600");
// mouse.addAnimation("mouseStanding",mouseImg1);
// mouse.scale=0.15;

// }

// function draw() {

// background(bgImg);
// //Write condition here to evalute if tom and jerry collide

// drawSprites();
// }

// function keyPressed(){

// //For moving and changing animation write code here

// }