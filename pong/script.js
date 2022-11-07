var canvas = document.getElementById("c");
ctx = canvas.getContext("2d");
scaleX = innerWidth / canvas.width;
scaleY = innerHeight / canvas.height;
scaleToFit = Math.min(scaleX, scaleY);
scaleToCover = Math.max(scaleX, scaleY);
const degToRad = Math.PI / 180;

function collidedWith(object){
   rect1=this; rect2=object
    return rect1.x < rect2.x + rect2.width &&
   rect1.x + rect1.width > rect2.x &&
   rect1.y < rect2.y + rect2.height &&
   rect1.height + rect1.y > rect2.y
}

//canvas.style.transformOrigin = '0 0';
//scale from top left
//canvas.style.transform = `scale(${(scaleToFit)})`;

world = {};
world.width = 720;
world.height = 480;
world.shape = {
  type: "",
  width: 0,
  height: 0,
  x: 0,
  y: 0,
};

rect = function (x, y, w, h, color = "rgb(0 0 0)") {
  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
  this.id = Math.random(10000);
  this.type = "rect";
  this.color = color;
  this.xVel = 0;
  this.yVel = 0;
  this.angle = 0;
  this.collidedWith=collidedWith
  this.bound=true
  drawQueue.push(this);
  return this;
};
circle = function (x, y, r, color = "rgb(0 0 0)") {
  this.x = x;
  this.y = y;
  this.radius = r;
  this.id = Math.random(10000);
  this.type = "circle";
  this.color = color;
  this.xVel = 0;
  this.yVel = 0;
  this.bound=true

  this.collidedWith=collidedWith
  drawQueue.push(this);
  return this;
};

sprite = function (x, y, img, w, h) {
  this.img = img;
  this.x = x;
  this.y = y;
  this.width = this.img.width;
  this.height = this.image.height;
  this.id = Math.random(10000);
  this.type = "image";
  this.angle = 0;
  this.xVel = 0;
  this.yVel = 0;
  this.bound=true
  this.collidedWith=collidedWith
  drawQueue.push(this);
  return this;
};

drawQueue = [];

main = function () {
 // console.timeEnd("dt");
  var fillStyle = ctx.fillStyle;
  ctx.fillStyle = "white";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = fillStyle;
  //Clear the canvas before redrawing
  for (i in drawQueue) {
    d = drawQueue[i];
    d.x += d.xVel;
    d.y += d.yVel;
    if(d.bound){
      if(d.x<=0||d.y<=0){
        d.x=d.x
        d.y=d.y
     }
     if(this.x>=360||this.y>=240){
       d.x=d.x;
       d.y=d.y;
     }
    }
    ctx.rotate(d.angle * degToRad);
    if (d.type == "rect") {
      ctx.fillStyle = d.color;
      ctx.fillRect(d.x, d.y, d.width, d.height);
    } else if (d.type == "image") {
      ctx.drawImage(d.img, d.x, d.y);
    } else if (d.type == "circle") {
      ctx.fillStyle = d.color;
      ctx.strokeStyle = d.color;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  //console.time("dt")
  tick();
  requestAnimationFrame(main);
  //Clear the canvas and draw shapes with calles with draw at the framerate
};
requestAnimationFrame(main);

addEventListener("resize", function () {
  scaleX = window.innerWidth / canvas.width;
  scaleY = window.innerHeight / canvas.height;

  scaleToFit = Math.min(scaleX, scaleY);
  scaleToCover = Math.max(scaleX, scaleY);
  //   canvas.style.transformOrigin = '0 0';
  //scale from top left
  // canvas.style.transform = `scale(${(scaleToFit)})`;
});
//Define all events and variables nessecary for them to work.

var mouseX = 0;
mouseY = 0;
keycode = "";
frameID = 0;

canvas.addEventListener("mousemove", function (e) {
  mouseX = e.offsetX;
  mouseY = e.offsetY;
});

canvas.addEventListener("mousedown", function (e) {
  x = e.offsetX;
  y = e.offsetY;
  mouseDown();
  e.preventDefault();
});

addEventListener("keydown", function (e) {
  keycode = e.code;
  console.log(e.code);
});

addEventListener("keyup", function (e) {
  keycode = "";
});

function mouseClick() {}
function mouseDown() {}
function tick() {}

canvas.addEventListener("click", function (e) {
  x = e.offsetX;
  y = e.offsetY;
  mouseClick();
  e.preventDefault();
});
