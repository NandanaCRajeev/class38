var hypnoticBall, database;
var position;
var gameState=0;
var playerCount;
var database;
var form,player,game;
var allPlayers;

var cars,car1,car2,car3,car4;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-10,displayHeight-30);
   game=new Game();
   game.getState();
   game.start();


}

function draw(){
 if(playerCount===4){
  game.update(1);

 } 
  if(gameState===1){
   clear();
   game.play();
  }
   
  
}

