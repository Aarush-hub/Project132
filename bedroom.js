
img="";
status="";

function back(){
    window.location= "index.html";
    }
    

function preload(){
img = loadImage("IMG_0796.JPG");
}


function setup(){
canvas=createCanvas(640,300);
canvas.center();
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
 document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function modelLoaded(){
    console.log("ModelLoaded");
    status=true;
    objectDetector.detect( img, gotResult);
    }

function gotResult(error,results){
    if(error){
    console.log(error);
    }
    console.log(results);
    }

function draw(){
image(img,0,0,640,300);
fill("#FF0000");
text("Bed",320,150);
noFill();
stroke("#FF0000");
rect(30,60,610,450);
fill("#FF0000");
text("Drawer",400,85);
noFill();
stroke("#FF0000");
rect(350,60,180,50);
}
 