function setup()
{
    video = createCapture(VIDEO);
    video.size(400,400);

    canvas = createCanvas(400,400);
    canvas.position(560,180);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is successfully initialized!");
}

function draw()
{
    background('gray');
}

function gotPoses()
{
    if(results.length > 0)
    {
        console.log(resutls);
    }
}