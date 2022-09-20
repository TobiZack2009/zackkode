var canvas = document.createElement("canvas")
var ctx = canvas.getContext("2d")
document.body.appendChild(canvas)
canvas.width = innerWidth
canvas.height = innerHeight


world = {};
world.width = 720;
world.height = 480;
world.shape = {
    type: "",
    width: 0,
    height: 0,
    x: 0,
    y: 0,
}

world.rect = function(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.id = Math.random(10000);
    this.type = "rect"
    return this;
}

world.drawQueue = []

world.draw = function(x) {
    for(var i=0;i<world.drawQueue.length;i++){
        if(x.id==world.drawQueue[i].id){
            world.drawQueue[i]=x;
            return;//If the object is alredy in drawqueue, the just update it instead of adding a new entry.
        }
    }
    world.drawQueue.push(x)
}

main = function() {
    var fillStyle = ctx.fillStyle;
    ctx.fillStyle = "white"
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = fillStyle
    //Clear the canvas before redrawing
    for (var i = 0; i < world.drawQueue.length; i++) {
        d = world.drawQueue[i]
        if (d.type == "rect") {
            ctx.fillRect(d.x, d.y, d.width, d.height)
        }
    }
    requestAnimationFrame(main)//Clear the canvas and draw shapes with calles with draw at the framerate/

}
requestAnimationFrame(main)

onresize = function() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    ctx.scale(canvas.width / world.width, canvas.height / world.height)
}
