function setup() {
        createCanvas(400,400)
}

function draw () {
    background("#a0daa9")
    smileyFaceTimo();
    smileFaceCalin();
}

function smileyFaceTimo () {
    //head
    fill ("#99999")
    circle(200, 350, 30);
    //eyes
    fill ("#000000")
    circle(205, 346, 4);
    circle(196, 346, 4);
    //pupiles

    //mouth
    fill ("#000000")
    arc(200, 352, 20, 20, 0, Math.PI);
    
    fill ("#fffff")
    rect(200, 352.5, 4, 4);
    fill ("#fffff")
    rect(196, 352.5, 4, 4);
    
    //sprancene
    //line(192, 343, 330,290, );
}

function smileFaceCalin() {
//skin
fill("#fe00f6");
circle(200,360,35);

//right eye
circle(205,357,4);
circle(205,357,1);  //pupil

//left eye
circle(195,357,4);
circle(195,357,1);  //pupil
//mouth

arc(200,364,12,10,0, Math.PI);
}
