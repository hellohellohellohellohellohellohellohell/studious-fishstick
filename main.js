function preload(){
    clown_nose = loadImage('https://i.postimg.cc/9Qd0qT7T/clown-nose-removebg-preview.png');
}

function setput() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on ('pose', gotPoses); 
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw(){
    image(video, 0, 0, 300, 300);
    fill(255, 0, 0)
    stroke(255, 0, 0)
    circle(noseX, noseY, 20);
    image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot(){
    save('myFilterImage.png')
}

function gotPoses(results) 
{
    if(result.lenght > 0)
    {
        console.log(result);
        noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;
        console.log("nose x = " + result[0].pose.nose.x);
        console.log("nose y = " + result[0].pose.nose.y);
    }
}

