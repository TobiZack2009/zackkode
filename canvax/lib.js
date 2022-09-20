function App(canvas,w,h){
    this.canvas=canvas
    this.width=w
    this.height=h
    var ctx=canvas.getContext("2d")
    var drawQueue=[]
    ctx.scale(this.width/canvas.width,this.height/canvas.height)
    
    this.shapeProto= {
        type: "",
        width: 0,
        height: 0,
        x: 0,
        y: 0,
    }
    this.rect=function(x,y,w,h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.type = "rect"
        this.fillColor="black"
        this.strokeColor="black"
        drawQueue.push(this)
        return this;
    
    }
    
    var main=function(){
        var fillStyle = ctx.fillStyle;
        ctx.fillStyle = "white"
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = fillStyle
        //Clear the canvas before redrawing
        for (var i = 0; i < drawQueue.length; i++) {
            d = drawQueue[i]
            if (d.type == "rect") {
                ctx.fillStyle=d.fillColor
                ctx.strokeStyle=d.strokeColor
                ctx.fillRect(d.x, d.y, d.width, d.height)
            }
        }
        requestAnimationFrame(main)//Clear the canvas and draw shapes with calles with draw at the framerate/
    
    }
    
    requestAnimationFrame(main)
    
    return this;
    
    }