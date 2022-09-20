var ctx=document.getElementById("c").getContext("2d")
        mole={}
        text=""
        score=0
        highScore=Number(localStorage.getItem("score"))

    ctx.canvas.width=innerWidth; ctx.canvas.height=innerHeight
    mole.image=new Image()
    mole.x=0
    mole.y=0
    mole.image.src="mole.png"
function isMouseInside(obj,e){
      var pos={}
          rect=obj
          pos.x=e.x;
          pos.y=e.y;
    return pos.x > rect.x && pos.x < rect.x+rect.image.width && pos.y < rect.y+rect.image.height && pos.y > rect.y
}
    function mainLoop(){
        ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
        ctx.drawImage(mole.image,mole.x,mole.y)
        ctx.font="30px Arial"
        ctx.fillText("Hits: "+score,40,40)
        ctx.fillText( "High Score: "+highScore,40,80)
        
        requestAnimationFrame(mainLoop)
    }
    function moveMole(){
        mole.x=Math.random()*(ctx.canvas.width-0)+0;
        mole.y=Math.random()*(ctx.canvas.width-0)+0;
    }
    function onclick(e){
      if(isMouseInside(mole,e)){
            score++;
            if(!localStorage.getItem("score")){
                   localStorage.setItem("score",score.toString())
            }
            else if(score>highScore){
                       localStorage.setItem("score",score.toString())
                       highScore=score
            }
        }
    }  
      requestAnimationFrame(mainLoop);setInterval(moveMole,2000);ctx.canvas.addEventListener("click",onclick)