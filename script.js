/* VARIABLES */
let enterButton;
let checkOutButton;
let ignoreButton;
let stayDownButton;
let yellowEyesButton;
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
  text(
    "GAME NAME",
    width / 2,
    height / 2 - 100
  );

  // Create buttons for all screens
  enterButton = new Sprite();
  enterButton.y = 350;

  checkOutButton = new Sprite();
  checkOutButton.y = -200;
  checkOutButton.x = -200;


  ignoreButton = new Sprite();
  ignoreButton.x = -50;
  ignoreButton.y = -50;

  stayDownButton = new Sprite();
  stayDownButton.x = -100;
  stayDownButton.y = -100;

  yellowEyesButton = new Sprite();
  yellowEyesButton.x = -150;
  yellowEyesButton.y = -150;
}

/* DRAW LOOP REPEATS */
function draw() {
  // Display enter button
  enterButton.w = 100;
  enterButton.h = 50;
  enterButton.collider = 'k';
  enterButton.color = buttonColor;
  enterButton.text = "BEGIN";

  // Check enter button
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
  } else if (screen =="checkOut") {
    if (stayDownButton.mouse.presses()) {
      stayDown();
      screen ="stayDown";
    } else if (yellowEyesButton.mouse.presses()) {
      screen = "yellowEyes";
      yellowEyes();
    }
  }
  }


/* FUNCTIONS TO DISPLAY SCREENS */
function startScreen(){
  background(bgColor);
  text("One night, you are watching Netflix home alone\n in your upstairs bedroom when a loud noise wakes you up.", width/2, height/2-100);
  enterButton.pos = {x:-100, y:-100};

  // Add A1 button
  checkOutButton.pos = {x: width/2-50, y:height/2+100};
  checkOutButton.w = 50;
  checkOutButton.h = 50;
  checkOutButton.collider = 'k';
  checkOutButton.color = buttonColor;
  checkOutButton.text = "Check out the noise"; 
  checkOutButton.textSize = 15;


  // Add A2 button
  ignoreButton.pos = {x: width/2+50, y:height/2+100};
  ignoreButton.w = 50;
  ignoreButton.h = 50;
  ignoreButton.collider = 'k';
  ignoreButton.color = buttonColor;
  ignoreButton.text = "Ignore it & keep watching your show";
  ignoreButton.textSize = 15;
}

function checkOut(){
  background(bgColor);
  text("You shine your phone's flashlight as you go\n downstairs, each floor creaking loudly. You double\n check the lock on your front door - it was open. You\n look around your living room, but nothing looks out of\n the ordinary.", width/2, height/2-100);

   checkOutButton.pos = {x: -200, y: -200};
  ignoreButton.pos = {x: -50, y: -50};
  // Add stayDown Button
  stayDownButton.pos = { x: width / 2 - 50, y: height / 2 + 100 };
  stayDownButton.w = 50;
  stayDownButton.h = 50;
  stayDownButton.collider = "k";
  stayDownButton.color = buttonColor;
  stayDownButton.text = "Stay downstairs";
  stayDownButton.textSize = 15;


   // Add  Button
  yellowEyesButton.pos = { x: width / 2 + 50, y: height / 2 + 100 };
  yellowEyesButton.w = 50;
  yellowEyesButton.h = 50;
  yellowEyesButton.collider = "k";
  yellowEyesButton.color = buttonColor;
  yellowEyesButton.text = "Go back up to your room";
  yellowEyesButton.textSize = 15;

}

function stayDown(){
  background(bgColor);
  text("Ending 1", width/2, height/2-100);
  stayDownButton.pos = { x: -100, y: -100 };
  yellowEyesButton.pos = { x: -150, y: -150 };
}

function yellowEyes() {
 background(bgColor);
 text("Ending 2", width / 2, height / 2 - 100);
  stayDownButton.pos = { x: -100, y: -100 };
  yellowEyesButton.pos = { x: -150, y: -150 };
}

function ignore(){
  background(bgColor);
  text("Ending 3", width/2, height/2-100);

  checkOutButton.pos = { x: -200, y: -200 };
  ignoreButton.pos = { x: -50, y: -50 };
}


/*
STORYLINE:
GENRE: HORROR
NAME: ????
One night, you are watching Netflix home alone in your upstairs bedroom when a loud noise wakes you up. (OPTION 1.1: Check out the noise, OPTION 1.2: Ignore it and keep watching your show)

OPTION 1.1 & 3.1 PATH: You shine your phone's flashlight as you go downstairs, each floor creaking loudly. You double check the lock on your front door - it was open. You look around your living room, but nothing looks out of the ordinary. (OPTION 2.1: Stay downstairs for a little, OPTION 2.2: Go back up to your room.)

OPTION 2.1: You stay downstairs, sitting on your living room couch reading a book. Nothing happens for a bit, but then you hear noises, and out of the corner of your eyes, you see movement. "Hello? Who's there?" you call out. Nobody answers. You text your parents asking them when they'll be back - and after ~15 minutes, they answer that they're home and you hear a car roll into the driveway.
(OPTION 5.1: Open the door for them, OPTION 5.2: Call them)

OPTION 5.1: You open the door, and they walk in. "Mom, Dad, I was so scared, I kept hearing weird noises, ......" you ramble on and on. They turn around, and you gasp as you look at their face - blood seeping out of their eyeballs and mouth. You scream and run away, but its too late. You're next. THE END.

OPTION 5.2: You call your parents, but there is no answer. That's weird, they just texted you. You call your grandma (whose house your parents were at). Your grandma say that they never came over. Starting to get really freaked out, you turn off all the lights and close the doors and windows. You text your parents number that you went to a friend's house to stay over. The next morning, you get a phone call - saying your parents died in the night. You survived, but you'll never know who you were texting then or the reason for their death. You will be haunted and traumatized and paranoide forever. THE END.

OPTION 1.2 PATH: You continue watching your show, unbothered for ~15 minutes. All of a sudden, you hear more noises - louder. (OPTION 3.1: Check out the noise, OPTION 3.2: Lock your bedroom door & windows)

OPTION 2.2 & 3.2 PATH: A little rattled, you lock your bedroom door and windows, and text your parents asking them when they'll be back. You feel a little cold, so you walk over to your closet to grab a sweater but, in the dark of your closet, you think you see a pair of glowing yellow eyes. (OPTION 4.1: Ignore it and go back into your bed with your show. OPTION 4.2: Turn on the lights)

OPTION 4.1 PATH: You eventually fall asleep, with your show on play. The next morning, you wake up in a basement, chained to the floor. Shaking, you yell and scream until your voice goes hoarse. But there is nothing to be done - nobody will ever know what happened to you. THE END. (you die)

OPTION 4.2: You turn on the lights, and look back at the "eyes" but it turns out it was just a light from your brother's old toys. You flop back into bed, and the noises seem to stop. You decide it was probably just you being paranoid. At around midnight, you get a knock on your door. You open the door, expecting your parents. But it's not them - it's your grandma. Tears fly down her face as she says, "It wasn't my fault, I swear, I didn't do anything!!". Your parents were eating dinner with your grandma when they dropped dead. Later it was found that the reason for death was posioning. Your grandma is your legal guardian for the rest of your life - and you will never find out what really happened that night. THE END. (you survive)
*/