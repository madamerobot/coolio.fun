function Balloon(x, y) {
  
  this.x = x;
  this.y = y;
  this.balloonimg = balloonimg;
  this.w = 39;
  this.h = 79;
  
  this.display = function() {
    image(this.balloonimg, this.x, this.y, this.w, this.h);
    this.y = this.y - 1;
  }
  
  this.boom = function() {
    this.size = 0;
  }
  
}