let moveS1x = 200;
let moveS1y = 200;

let moveS2x = 200;
let moveS2y = 200;

let limitTop = 15;
let limitBottom = 385;
let limtRight = 385;
let limitLeft = 15;

let sensS1x = 1;
let sensS1y = 1;
let sensS2x = 1;
let sensS2y = 1;

let 
function setup() {
        createCanvas(400,400)
}

function draw () {

    background("#a0daa9")
    //verificare limita Top S1
    if (moveS1y < limitTop) {
        //schimbare de sens
        sensS1y *= -1
    }

    //verificare limita Bottom S1
    if (moveS1y > limitBottom) {
        //schimbare de sens
        sensS1y *= -1;
    }

     //verificare limita Left S1
     if (moveS1x < limitLeft) {
        //schimbare de sens
        moveS1x *= -1;
    }
    
    //verificare limita Right S1
    if (moveS1x > limitRight) {
        //schimbare de sens
        sensS1x *= -1;
    }

    moveS1x += sensS1x;
    moveS1y += sensS1y;

    smileyFaceTimo(moveS1x++, moveS1y++);
    smileFaceCalin(moveS2x++, moveS2y++);

   
}

function smileyFaceTimo (x, y) {
    //head
    fill ("#99999")
    circle(x, y+150, 30);
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
