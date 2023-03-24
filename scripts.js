let moveS1x = 200;
let moveS1y = 200;

let moveS2x = 200;
let moveS2y = 200;

let speedS1 = 3;
let speedS2 = 2; 

let limitTop = 0;
let limitBottom = 400;
let limitRight = 400;
let limitLeft = 0;

let sensS1x = 1;
let sensS1y = 1;
let sensS2x = 1;
let sensS2y = 1;

let rayS1 = 15;
let rayS2 = 100;

function setup() {
        createCanvas(400,400)
}

function draw () {

    background("#a0daa9")
    //verificare limmita Top S1
  if (moveS1y < limitTop+rayS1) {
    sensS1y = 1; //schimbare de sens
  }
  //verificare limmita Bottom S1
  if (moveS1y > limitBottom-rayS1) {
    sensS1y = -1; //schimbare de sens
  }
  //verificare limmita Left S1
  if (moveS1x < limitLeft+rayS1) {
    sensS1x = 1; //schimbare de sens
  }
  //verificare limmita Right S1
  if (moveS1x > limitRight-rayS1) {
    sensS1x = -1; //schimbare de sens
  }

    moveS1x += sensS1x*speedS1;
    moveS1y += sensS1y*speedS1;

    smileyFaceTimo(moveS1x, moveS1y, rayS1*2);
    smileFaceCalin(moveS2x, moveS2y, rayS2);

    console.log(moveS1x, moveS1y)
   
}

function smileyFaceTimo (x, y, d) {
    //head
    fill ("#99999")
    circle(x, y+150, d);
    //eyes
    fill ("#000000")
    circle(x+5, y+146, 4);
    circle(x-4, y+146, 4);
    //pupiles

    //mouth
    fill ("#000000")
    arc(x, y+152, 20, 20, 0, Math.PI);
    
    fill ("#fffff")
    rect(x, y+152.5, 4, 4);
    fill ("#fffff")
    rect(x-4, y+152.5, 4, 4);
    
    //sprancene
    //line(192, 343, 330,290, );
}

function smileFaceCalin(x, y) {
//skin
fill("#fe00f6");
circle(x,y+160,30);

//right eye
circle(x+5,y+157,4);
circle(x+5,y+157,1);  //pupil

//left eye
circle(x-5,y+157,4);
circle(x-5,y+157,1);  //pupil
//mouth

arc(x,y+164,12,10,0, Math.PI);
}
