var canvas, backgroundImage;

var gameState = 0; //when game starts
var playerCount;

var database,secret='';

var form, player, game;

var airplane;
var airplane2;

var airplaneImg;
var cloudImg;
var EndCount;
var title1; 

var allPlayers; 
function preload(){
  bg = loadImage("images/1.jpg");
  airplaneImg =  loadImage("images/sprite_0.png");
  airplane2Img =  loadImage("images/sprite_1.png");
  cloudImg= loadImage ("images/cloud.png");

}
function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();
  playerCount=1;

  airplane=createSprite(windowWidth/2,140,30,30);
  airplane.addImage(airplaneImg);
  
  
  airplane2=createSprite(windowWidth/4,140,30,30);
  airplane2.addImage(airplane2Img);
   
  
}


function draw(){
  background(bg);



  //playercount =0 
  if(gameState === 0 ){
    game.getState()
  }
  if(playerCount === 2 && player.name && gameState === 0){
    gameState=1;
    game.update(1);
  }
   if(gameState === 1){
     game.play();
   }
   if(EndCount === 2){
    game.update(2);
   }
    if(gameState === 2){
      background("purple");
      title1 = createElement('h1')
      title1.html(player.name + " got the Rank " + player.rank);
      title1.position(displayWidth/2, displayHeight/2);      
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
}
