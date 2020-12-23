class Game {
  constructor() {
    this.cloudPos = [[498, -1503], [50, 400], [746, -500], [134, 524], [50, 63], [580, 540], [365, 450], [312, -876], [439, -675]]
  }

  getState() {
    var gameStateRef = database.ref(secret + '/gameState');
    gameStateRef.on("value", function (data) {
      if (data.val() === null) {
        gameState = 0;
      } else {
        gameState = data.val();
      }
    })

  }

  update(state) {
    database.ref(secret + '/').update({
      gameState: state
    });
  }
  updateSecret(secret) {
    database.ref('/').update({
      secret: secret
    });
  }

  start() {
    if (gameState === 0) {
      player = new Player();
      // player.getCount();
      form = new Form()
      form.display();
      player.updateEndCount(0);
    
    }
  }

  play() {
    background("#696969");
    // line(x1,y1,x2,y2)
    player.getProgress();
    player.getEndCount();
    if(allPlayers !== undefined){

      push();
      strokeWeight(50);
      stroke("red");
      line(0, -2000, windowWidth, -2000);
      textSize(50)
      text("END",windowWidth/2,-2000)
      pop();

      for (var i = 0; i < this.cloudPos.length; i++) {
        image(cloudImg, this.cloudPos[i][0], this.cloudPos[i][1], 150, 100)
      }
      drawSprites();
      image(cloudImg, 50, 50, 150, 100)
  
      if (playerCount === 1) {
        camera.position.x = displayWidth / 2;
        camera.position.y = airplane.y;
        airplane2.x = allPlayers["player2"].position.x;
        airplane2.y = allPlayers["player2"].position.y;
        if (keyDown(UP_ARROW)) {
          airplane.y = airplane.y - 10;
          player.updateProgress();
        }
        if (keyDown(RIGHT_ARROW)) {
          airplane.x = airplane.x + 10;
          player.updateProgress();
        }
        if (keyDown(LEFT_ARROW)) {
          airplane.x = airplane.x - 10;
          player.updateProgress();
        }
        if(airplane.y<-2000){
          EndCount = EndCount + 1;
          player.updateEndCount(EndCount);
          gameState = 2;
          player.rank = EndCount;
        }
        
      }
      if (playerCount === 2) {
        camera.position.x = displayWidth / 2;
        camera.position.y = airplane2.y;
        airplane.x = allPlayers["player1"].position.x;
        airplane.y = allPlayers["player1"].position.y;
        if (keyDown(UP_ARROW)) {
          airplane2.y = airplane2.y - 10;
          player.updateProgress();
        }
        if (keyDown(RIGHT_ARROW)) {
          airplane2.x = airplane2.x + 10;
          player.updateProgress();
        }
        if (keyDown(LEFT_ARROW)) {
          airplane2.x = airplane2.x - 10;
          player.updateProgress();
        }
        if(airplane2.y<-2000){
          EndCount = EndCount + 1;
          player.updateEndCount(EndCount);
          gameState = 2;
          player.rank = EndCount;
        }
      }

      
  
    }
    
  }
}
