/* VARIABLES */
let enterButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let screen = 0;
let bgColor = "green";
let buttonColor = "white";

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  textSize(20);
  noStroke();

  // Set up the home screen
  background(bgColor);
  fill(255)
  text(
    "START SENTENCE",
    width / 2,
    height / 2 - 100
  );

  // Create buttons for all screens
  enterButton = new Sprite();
  enterButton.y = 350;

  a1Button = new Sprite();
  a1Button.y = -200;
  a1Button.x = -200;


  a2Button = new Sprite();
  a2Button.x = -50;
  a2Button.y = -50;

  b1Button = new Sprite();
  b1Button.x = -100;
  b1Button.y = -100;

  b2Button = new Sprite();
  b2Button.x = -150;
  b2Button.y = -150;
}

/* DRAW LOOP REPEATS */
function draw() {
  // Display enter button
  enterButton.w = 100;
  enterButton.h = 50;
  enterButton.collider = 'k';
  enterButton.color = buttonColor;
  enterButton.text = "START";

  // Check enter button
  if (enterButton.mouse.presses()) {
    //background & text & enter button
    showScreen1();
    screen = 1;
  }
  if(screen == 1){
    if(a1Button.mouse.presses()){
      screen = 2;
      showScreen2();
    } 

    else if (a2Button.mouse.presses()){
      screen = 5;
      showScreen5();
    }
  } else if (screen ==2) {
    if (b1Button.mouse.presses()) {
      showScreen3();
      screen =3;
    } else if (b2Button.mouse.presses()) {
      showScreen4();
    }
  }
  print(screen);
  }


/* FUNCTIONS TO DISPLAY SCREENS */
function showScreen1(){
  background(bgColor);
  text("Question 1", width/2, height/2-100);
  enterButton.pos = {x:-100, y:-100};

  // Add A1 button
  a1Button.pos = {x: width/2-50, y:height/2+100};
  a1Button.w = 50;
  a1Button.h = 50;
  a1Button.collider = 'k';
  a1Button.color = buttonColor;
  a1Button.text = "Option 1.1"; 
  a1Button.textSize = 15;


  // Add A2 button
  a2Button.pos = {x: width/2+50, y:height/2+100};
  a2Button.w = 50;
  a2Button.h = 50;
  a2Button.collider = 'k';
  a2Button.color = buttonColor;
  a2Button.text = "Option 1.2";
  a2Button.textSize = 15;
}

function showScreen2(){
  background(bgColor);
  text("Question 2?", width/2, height/2-100);

   a1Button.pos = {x: -200, y: -200};
  a2Button.pos = {x: -50, y: -50};
  // Add b1 Button
   b1Button.pos = { x: width / 2 - 50, y: height / 2 + 100 };
   b1Button.w = 50;
   b1Button.h = 50;
   b1Button.collider = "k";
   b1Button.color = buttonColor;
   b1Button.text = "Option 2.1";
   b1Button.textSize = 15;


   // Add b2 Button
   b2Button.pos = { x: width / 2 + 50, y: height / 2 + 100 };
   b2Button.w = 50;
   b2Button.h = 50;
   b2Button.collider = "k";
   b2Button.color = buttonColor;
   b2Button.text = "Option 2.2";
   b2Button.textSize = 15;

}

function showScreen3(){
  background(bgColor);
  text("Ending 1", width/2, height/2-100);
  b1Button.pos = { x: -100, y: -100 };
  b2Button.pos = { x: -150, y: -150 };
}

function showScreen4() {
 background(bgColor);
 text("Ending 2", width / 2, height / 2 - 100);
 b1Button.pos = { x: -100, y: -100 };
 b2Button.pos = { x: -150, y: -150 };
}

function showScreen5(){
  background(bgColor);
  text("Ending 3", width/2, height/2-100);

  a1Button.pos = { x: -200, y: -200 };
  a2Button.pos = { x: -50, y: -50 };
}


/*
STORYLINE:
GENRE: HORROR
NAME: ????
One night, you are watching Netflix home alone in your upstairs bedroom when a loud noise wakes you up. (OPTION 1.1: Check out the noise, OPTION 1.2: Ignore it and keep watching your show)

OPTION 1.1 & 3.1 PATH: You shine your phone's flashlight as you go downstairs, each floor creaking loudly. You double check the lock on your front door - it was open. You look around your living room, but nothing looks out of the ordinary. (OPTION 2.1: Stay downstairs for a little, OPTION 2.2: Go back up to your room.)

OPTION 1.2 PATH: You continue watching your show, unbothered for ~15 minutes. All of a sudden, you hear more noises - louder. (OPTION 3.1: Check out the noise, OPTION 3.2: Lock your bedroom door & windows)

OPTION 3.2 PATH: A little rattled, you lock your bedroom door and windows, and text your parents asking them when they'll be back. You feel a little cold, so you walk over to your closet to grab a sweater but, in the dark of your closet, you think you see a pair of glowing yellow eyes. (OPTION 4.1: Ignore it and go back into your bed with your show. OPTION 4.2: Turn on the lights)

OPTION 4.1 PATH: You eventually fall asleep, with your show on play. The next morning, you wake up in a basement, chained to the floor. Shaking, you yell and scream until your voice goes hoarse. But there is nothing to be done - nobody will ever know what happened to you. THE END.
*/