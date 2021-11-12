var canvasSize = 400;

function setup() {
    var canvas = createCanvas(canvasSize, canvasSize);
    canvas.parent("p5container");
}

function draw() {

    var eyeX = map(mouseX, 0, canvasSize,125,175)
    var eyeY = map(mouseY, 0, canvasSize,125,175)
    background(220);

    //console.log(mouseX,mouseY)

    stroke(100)
    strokeWeight(10)

    //head
    fill(255, 255, 0);
    ellipse(width / 2, height/2, 300);

    //eyes
    fill(255);
    ellipse(eyeX,eyeY,50,60)
    ellipse(eyeX+100,eyeY,50,60)

    //pupils
    
    
    //cheeks
    noStroke()

    fill(255,215,0)
    ellipse(110,220,45)
    ellipse(290,220,45)
    
    //smile


    //fill(100)
    //ellipse(200,260,100,50)
    //fill(255,255,0)

    //ellipse(200,250,100,50)

    stroke(100)
    strokeWeight(10)
    noFill()
    arc( 200, 220, 180, 180, radians(30), radians(150))
}