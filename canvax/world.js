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
    drawQueue.push(this)
    return this;
}

world.sprite = function(x, y,img, w, h) {
    this.img=img
    this.x = x;
    this.y = y;
    this.width = this.img.width;
    this.height = this.image.height;
    this.id = Math.random(10000);
    this.type = "image"
    drawQueue.push(this)
    return this;
}

world.drawQueue = []




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
        else if(d.type==image){
            ctx.drawImage(d.img,d.x,d.y)
        }
    }
    requestAnimationFrame(main)//Clear the canvas and draw shapes with calles with draw at the framerate/

}
requestAnimationFrame(main)
