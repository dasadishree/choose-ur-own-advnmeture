/* VARIABLES */
let enterButton;
let checkOutButton;
let ignoreButton;
let stayDownButton;
let yellowEyesButton;
let checkOut2Button;
let lightsOnButton;
let ignore2Button;
let openDoorButton;
let callParentsButton;
let lockRoomButton;
let screen = 0;
let bgColor = "black";
let buttonColor = "white";


/* SETUP RUNS ONCE */
function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  textSize(20);
  noStroke();

  // Set up the home screen
  background("black");
  fill(255)
  text("HOME ALONE 1:\n A HORROR CHOICE STORY",width / 2,height / 2 - 100);

  // Create all the buttons
  enterButton = new Sprite();
  enterButton.y = 350;

  checkOutButton = new Sprite();
  checkOutButton.y = -200;
  checkOutButton.x = -200;
  
  checkOut2Button = new Sprite();
  checkOut2Button.y = -200;
  checkOut2Button.x = -200;

  lightsOnButton = new Sprite();
  lightsOnButton.y = -200;
  lightsOnButton.x = -200;

  openDoorButton = new Sprite();
  openDoorButton.y = -200;
  openDoorButton.x = -200;

  callParentsButton = new Sprite();
  callParentsButton.y = -200;
  callParentsButton.x = -200;

  ignoreButton = new Sprite();
  ignoreButton.x = -50;
  ignoreButton.y = -50;

  ignore2Button = new Sprite();
  ignore2Button.x = -50;
  ignore2Button.y = -50;

  stayDownButton = new Sprite();
  stayDownButton.x = -100;
  stayDownButton.y = -100;

  yellowEyesButton = new Sprite();
  yellowEyesButton.x = -150;
  yellowEyesButton.y = -150;

  lockRoomButton = new Sprite();
  lockRoomButton.x = -150;
  lockRoomButton.y = -150;
}

/* DRAW LOOP REPEATS */
function draw() {
  // Display enter button
  enterButton.w = 100;
  enterButton.h = 50;
  enterButton.collider = 'k';
  enterButton.color = buttonColor;
  enterButton.text = "BEGIN";

  //Button logic
  if (enterButton.mouse.presses()) {
    //background & text & enter button
    startScreen();
    screen = "start";
  }
  if(screen == "start"){
    if(checkOutButton.mouse.presses()){
      screen = "checkOut";
      checkOut();
    } 

    else if (ignoreButton.mouse.presses()){
      screen = "ignore";
      ignore();
    }
  } 
  else if (screen =="checkOut") {
    if (stayDownButton.mouse.presses()) {
      stayDown();
      screen ="stayDown";
    } 
    else if (yellowEyesButton.mouse.presses()) {
      screen = "yellowEyes";
      yellowEyes();
    }
  }
  else if(screen =="ignore") {
    if(checkOut2Button.mouse.presses()) {
      screen = "checkOut";
      checkOut();
    }
    else if(lockRoomButton.mouse.presses()) {
      screen = "yellowEyes";
      yellowEyes();
    }
  }
  else if(screen == "yellowEyes") {
    if(lightsOnButton.mouse.presses()) {
      scene = "evilGrandma";
      evilGrandma();   
    }
    else if(ignore2Button.mouse.presses()) {
      scene = "kidnapped";
      kidnapped();
    }
  }
  else if(screen=="stayDown") {
    if(openDoorButton.mouse.presses()) {
      screen = "bloodyEyes";
      bloodyEyes();
    }
    else if(callParentsButton.mouse.presses()) {
      screen = "friendEscape";
      friendEscape();
    }
  }
  }


/* FUNCTIONS TO DISPLAY SCREENS */
function startScreen(){
  background(bgColor);
  text("One night, you are watching Netflix home alone\n in your upstairs bedroom when a loud noise wakes you up.", width/2, height/2-100);
  //remove enter button
  enterButton.pos = {x:-100, y:-100};

  // Add checkOut Button
  checkOutButton.pos = {x: width/2-50, y:height/2+100};
  checkOutButton.w = 75;
  checkOutButton.h = 50;
  checkOutButton.collider = 'k';
  checkOutButton.color = buttonColor;
  checkOutButton.text = "Check out \nthe noise"; 
  checkOutButton.textSize = 15;


  // Add ignore button
  ignoreButton.pos = {x: width/2+75, y:height/2+100};
  ignoreButton.w = 150;
  ignoreButton.h = 50;
  ignoreButton.collider = 'k';
  ignoreButton.color = buttonColor;
  ignoreButton.text = "Ignore it & keep\n watching your show";
  ignoreButton.textSize = 15;
}
function checkOut(){
  background(bgColor);
  text("You shine your phone's flashlight as you go\n downstairs, each floor creaking loudly. You double\n check the lock on your front door - it was open. You\n look around your living room, but nothing looks out of\n the ordinary.", width/2, height/2-100);

  //remove previous buttons
   checkOutButton.pos = {x: -200, y: -200};
   checkOut2Button.pos = {x: -200, y: -200};
  ignoreButton.pos = {x: -500, y: -50};
  lockRoomButton.pos = {x: -500, y: -50};

  
  // Add stayDown Button
  stayDownButton.pos = { x: width / 2 - 50, y: height / 2 + 100 };
  stayDownButton.w = 75;
  stayDownButton.h = 50;
  stayDownButton.collider = "k";
  stayDownButton.color = buttonColor;
  stayDownButton.text = "Stay \ndownstairs";
  stayDownButton.textSize = 15;


   // Add go back to your room Button
  yellowEyesButton.pos = { x: width / 2 + 50, y: height / 2 + 100 };
  yellowEyesButton.w = 100;
  yellowEyesButton.h = 50;
  yellowEyesButton.collider = "k";
  yellowEyesButton.color = buttonColor;
  yellowEyesButton.text = "Go back up \nto your room";
  yellowEyesButton.textSize = 15;

}
function stayDown(){
  background(bgColor);
  text("You stay downstairs, sitting on your living room couch\n reading a book. Nothing happens for a bit,\n but then you hear noises, and out of the corner of your eyes,\n you see movement. 'Hello? Who's there?' you call out. \nNobody answers. You text your parents asking\n them when they'll be back - and after ~15 minutes,\n they answer that they're home and you \nhear a car roll into the driveway.", width/2, height/2-100);

  //remove past buttons
  stayDownButton.pos = { x: -100, y: -100 };
  yellowEyesButton.pos = { x: -150, y: -150 };

  // Add openDoor Button
  openDoorButton.pos = { x: width / 2 -70, y: height / 2 + 120 };
    openDoorButton.w = 100;
    openDoorButton.h = 50;
    openDoorButton.collider = "k";
    openDoorButton.color = buttonColor;
    openDoorButton.text = "Open the door\n for them";
    openDoorButton.textSize = 15;


   // Add callParents Button
    callParentsButton.pos = { x: width / 2 + 50, y: height / 2 + 120 };
      callParentsButton.w = 100;
      callParentsButton.h = 50;
      callParentsButton.collider = "k";
      callParentsButton.color = buttonColor;
      callParentsButton.text = "Call your\n parents";
      callParentsButton.textSize = 15; 
}
function yellowEyes() {
 background(bgColor);
 text(" A little rattled, you lock your bedroom door and windows,\n and text your parents asking them\n when they'll be back. You feel a little cold, so you walk\n over to your closet to grab a sweater but, in the\n dark of your closet, you think \nyou see a pair of glowing yellow eyes.", width / 2, height / 2 - 100);

  //remove past buttons
  stayDownButton.pos = { x: -100, y: -100 };
  yellowEyesButton.pos = { x: -150, y: -150 };
  checkOut2Button.pos = { x: -100, y: -100 };
  lockRoomButton.pos = { x: -150, y: -150 };

  //add lights on button
  lightsOnButton.pos = { x: width / 2 - 50, y: height / 2 + 100 };
  lightsOnButton.w = 75;
  lightsOnButton.h = 50;
  lightsOnButton.collider = "k";
  lightsOnButton.color = buttonColor;
  lightsOnButton.text = "Turn on \n the lights";
  lightsOnButton.textSize = 15;

  // Add ignore Button
  ignore2Button.pos = { x: width / 2 + 50, y: height / 2 + 100 };
    ignore2Button.w = 100;
    ignore2Button.h = 50;
    ignore2Button.collider = "k";
  ignore2Button.color = buttonColor;
    ignore2Button.text = "Ignore the eyes,\nyou're paranoid";
    ignore2Button.textSize = 13;
}
function ignore(){
  background(bgColor);
  text("You continue watching your show, \nunbothered for ~15 minutes. \nAll of a sudden, you hear more noises - louder.", width/2, height/2-100);

   checkOutButton.pos = {x: -200, y: -200};
   ignoreButton.pos = {x: -200, y: -200};
  
  // Add checkOut2 Button
  checkOut2Button.pos = { x: width / 2 - 50, y: height / 2 + 100 };
  checkOut2Button.w = 75;
  checkOut2Button.h = 50;
  checkOut2Button.collider = "k";
  checkOut2Button.color = buttonColor;
  checkOut2Button.text = "Check out \n the noise";
  checkOut2Button.textSize = 15;

  // Add lockRoom Button
  lockRoomButton.pos = { x: width / 2 + 75, y: height / 2 + 100 };
    lockRoomButton.w = 135;
    lockRoomButton.h = 50;
    lockRoomButton.collider = "k";
    lockRoomButton.color = buttonColor;
    lockRoomButton.text = "Lock your bedroom\ndoor and windows";
    lockRoomButton.textSize = 15;
}

//endings
function evilGrandma() {
  background(bgColor);
  lightsOnButton.pos = { x: -250, y: -500 };
  ignore2Button.pos = {x:-250, y:-500}
  text("You turn on the lights, and look back at the 'eyes'\n but it turns out it was just a light \nfrom your brother's old toys. You flop back into bed, \nand the noises seem to stop. You decide it was \nprobably just you being paranoid. At around midnight, \nyou get a knock on your door. You open the door,\n expecting your parents. But it's not them - \nit's your grandma. Tears fly down her face as she\n says, 'It wasn't my fault, I swear,\n I didn't do anything!'. Your parents were eating dinner\n with your grandma when they dropped dead. \nLater it was found that the reason for death was poisoning\n. Your grandma is your legal guardian for the rest of your life \n- and you will never find out what really\n happened that night. THE END. (you survive)" ,width/2, 40);
}
function kidnapped() {
  background(bgColor);
  lightsOnButton.pos = { x: -250, y: -500 };
  ignore2Button.pos = {x:-250, y:-500}  
    text("You eventually fall asleep, with your show on play.\n The next morning, you wake up in a basement,\n chained to the floor. Shaking, you yell and scream\n until your voice goes hoarse. But there is nothing to be done\n - nobody will ever know what happened to you.\n THE END. (you die)" ,width/2, height/2-40);
}
function bloodyEyes() {
  background(bgColor);
  openDoorButton.pos = { x: -250, y: -500 };
  callParentsButton.pos = {x:-250, y:-500}  
    text("You open the door, and they walk in.\n 'Mom, Dad, I was so scared, I kept hearing weird noises, ......'\n you ramble on and on. They turn around, and you gasp\nas you look at their face - blood seeping out of their\n eyeballs and mouth. You scream and run away,\n but it's too late. You're next.\nTHE END. (you die)" ,width/2, height/2-40);
}
function friendEscape() {
  background(bgColor);
  openDoorButton.pos = { x: -250, y: -500 };
  callParentsButton.pos = {x:-250, y:-500}  
   text("You call your parents, but there is no answer.\n That's weird, they just texted you. You call your grandma\n (whose house your parents were at). Your grandma say\n that they never came over. Starting to get really freaked out,\n you turn off all the lights and close the doors and windows.\n You text your parents number that you went to a friend's house\n to stay over.The next morning, you get a phone call -\n saying your parents died in the night. You survived, \nbut you'll never know who you were texting then \nor the reason for their death. THE END. (you survive)" ,width/2, height/2-100);
}