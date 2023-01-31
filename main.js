function setup()
{
    canvas=createCanvas(500,500);
    canvas.position(510,100);
    background("white");

    video=createCapture(VIDEO);
    video.size(500,500);

    poseNet=ml5.poseNet(video,modelLoded);
    poseNet.on('pose',gotPoses);
}

function draw()
{
    background("black");
}

function modelLoded()
{
    console.log("The Model is loded");
}

function gotPoses(results)
{
if(results.length>0)
{
    console.log(results);
}
}

