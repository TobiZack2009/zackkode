var ctx=document.getElementById("c").getContext("2d")
    canvas=document.getElementById("c")
    drawList=[]


function rect(x,y,w,h){
     this.x=x
     this.y=y
     this.width=w
     this.height=h
     this.color="black"
}