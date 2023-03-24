function setup() {
        createCanvas(400,400)
}

function draw () {
    background("#a0daa9")
    smileyFaceTimo();
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

