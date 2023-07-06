let drawList=[]

class Rect{
  constructor(x,y,w,h){
    this.x=x; this.y=y; this.width=w; this.height=h;
    drawList.push(this)
  }
}
const world = p => {

  p.setup = function() {
    p.createCanvas(480, 360);
  };

  p.draw = function() {
    p.background();
    p.fill(255);
    p.rect(x, y, 50, 50);
  };
};

new p5(s); 