function setup() {
        createCanvas(400,400)
}

function draw () {
    background("#8a2be2")

    smileFaceCalin();
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
