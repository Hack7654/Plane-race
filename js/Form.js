class Form {
  constructor() {
  }

  display(){
    var title = createElement('h1')
    title.html("Plane Racing Game");
    title.position(90, 0);
    
    var nameInput = createInput("Name");
    var playButton = createButton('Play');
    
    nameInput.position(130, 160);
    playButton.position(250, 200);

    playButton.mousePressed(function(){
      nameInput.hide();
      playButton.hide();

      var name = nameInput.value();
      
      player.update(name)
      player.updateCount(playerCount);
      var greeting = createElement('h1');
      greeting.html("Ready To Play " + name )
      greeting.position(70, 160)
    });
      playButton.hide();
      nameInput.hide();

      var teacherButton = createButton("Teacher");
      var studentButton = createButton("Student");
      teacherButton.position(150, 200);
      studentButton.position(250, 200);
      teacherButton.mousePressed(function(){
        secret = "";
        var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijk"
        for(var i=0;i<6;i++){
          var rand = Math.round(random(1,37));
          secret = secret + chars[rand];
        }
        var sw = createElement('h2');
        sw.html("Secret word " + secret )
        sw.position(70, 100);

        playerCount = 1;
        // game.updateSecret(secret);

        teacherButton.hide();
        studentButton.hide();                                                                                                                                                                          

        playButton.show();
        nameInput.show();
      });


      studentButton.mousePressed(function(){
        var greeting = createElement('h2');
        greeting.html("Enter Secret Code") // secret code is available after teacher joins
        greeting.position(135, 130);

        teacherButton.hide();
        studentButton.hide();

        var wordInput = createInput("");
        var enterButton = createButton('Enter');
        
        wordInput.position(140, 180);
        enterButton.position(250, 210);

        enterButton.mousePressed(()=>{
          secret = wordInput.value();
          playerCount=2; //After student joins
          wordInput.hide();
          enterButton.hide();
          greeting.hide();
          playButton.show();
          nameInput.show();

        })

      });
  }
}
