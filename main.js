function preload(){

}
function setup(){
    canvas= createCanvas(600, 480);
    canvas.position(150, 250);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 30, 20, 550, 430);
    fill('green'); stroke('green');
    rect(0, 0, 50, 550);
    rect(550, 0, 50, 550);
    rect(50,0, 550, 50);
    rect(50, 430, 550, 50);
}
function take_snapshot(){
    save('photo.png');

}
