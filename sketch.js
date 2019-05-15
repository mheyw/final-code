var feedArray
var img
var imgLoaded
var images = []
var scaler
function preload()
{
    for(var i = 1; i<425; i++){
        images.push(loadImage('assets/'+i+'.jpg'))
    }
}

function setup()
{   
    createCanvas(screen.width,screen.height);
    background(255);
    noCursor();
    //how much to reduce image size
    scaler = 4000;
    //how quick it changes image
    frameRate(5);
}
function draw()
{
    let rng = int(random(1,images.length));
    
    image(images[rng],
        //xpos
        (faceX+faceW/2+width/2),
        //ypos
        (faceY+faceH/2),
        //width
        (images[rng].width*faceW)/scaler,
        //height
        (images[rng].height*faceW)/scaler);
}