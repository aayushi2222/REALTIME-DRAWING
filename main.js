noseX=0;
noseY=0;
difference=0;
rightwristX=0;
leftwristX=0;

function setup(){
   canvas = createCanvas(500,450);
   canvas.position(580,180);

   video = createCapture(VIDEO);
   video.size(500,500);
   video.position(10,180);

   poseNet = ml5.poseNet(video,Modelloaded);
   poseNet.on('pose',gotPoses);
}

function draw(){
   background('grey');
   fill('#FB2FA1');
   stroke('#FB2FA1');
   square( noseX, noseY, difference);
   document.getElementById("blank").innerHTML = "The width and the height of the square is = "+ difference + "px";
}

function Modelloaded(){
   console.log("Posenet is connected");
}

function gotPoses(results){
if(results.length > 0){
console.log(results);

noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("noseX ="+ noseX + "noseY ="+ noseY);
rightwristX = results[0].pose.rightWrist.x;
leftwristX = results[0].pose.leftWrist.y;
difference = floor(rightwristX - leftwristX);
console.log("leftWrist ="+ leftwristX + "rightWrist ="+ rightwristX +"difference ="+ difference);
 }
}
