class Player {
  constructor(){
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref(secret+'/playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
      console.log(playerCount);
    })
  }    

  updateCount(count){
    database.ref(secret+'/').update({
      playerCount: count
    });
  }

  update(name){
    var playerIndex =  secret+ "/players/player" + playerCount;
    // console.log(playerIndex);
    this.name = name;
    database.ref(playerIndex).set({
      name:name,
      position: {
        x: 50*playerCount,
        y:140
      }
    });
  }
  updateProgress(){
    var playerIndex =  secret+ "/players/player" + playerCount;
    // console.log(playerIndex);
    if(playerCount === 1){
      database.ref(playerIndex + "/position/").set({
        x: airplane.x,
        y: airplane.y
      });
    }
    if(playerCount === 2){
      database.ref(playerIndex + "/position/").set({
        x: airplane2.x,
        y: airplane2.y
      });
    }
  }
  getProgress(){
    var playerRef = database.ref(secret+"/players");
    playerRef.on("value",function(data){
      allPlayers = data.val();                                                                                                                                                                                                                                                                                                                                                                                              
    })    

  }
}

