function preload(){
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNET=ml5.poseNet(video,modelLoaded);
    poseNET.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,300,300);
}
function take_snapshot(){
    save('YourImage.png');
}
function modelLoaded(){
    console.log('poseNet is Initialized');
}
function gotPoses(result){
    if(result.length>0){
        console.log(result);
        console.log("nose_x= "+result[0].pose.nose.x);
        console.log("nose_y= "+result[0].pose.nose.y);
    }
}