var img;
var balloonimg;
var balloon = [];

function preload() {
  img = loadImage('images/profilepic.jpg');
  balloonimg = loadImage('images/balloon.png');
  }

function setup() {
  createCanvas(436, 436);
  }

function draw() {
 background(img);
 
 for (var i=0; i<balloon.length; i++){
   balloon[i].display();
 }
  }
  
  function mousePressed(){
  
  var newballoon = new Balloon(mouseX, mouseY);
  balloon.push(newballoon);

}