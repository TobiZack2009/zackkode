var ctx=document.getElementById("c").getContext("2d")
        mole={}
        text=""
        score=0
        highScore=Number(localStorage.getItem("score"))
        misses=0
        initCrement=1
        scoreIncrement=initCrement
        moveSpeed=2000

        //Initialize the context and all variables.

    ctx.canvas.width=innerWidth; ctx.canvas.height=innerHeight
    mole.image=new Image()
    mole.x=0
    mole.y=0
    mole.image.src="mole.png"
    //Resize the canvas and initialize the mole's properties.
function isMouseInside(obj,e){
      var pos={}
          rect=obj
          pos.x=e.x;
          pos.y=e.y;
    return pos.x > rect.x && pos.x < rect.x+rect.image.width && pos.y < rect.y+rect.image.height && pos.y > rect.y
}//A function for checking if the mouse is in the mole.
    function mainLoop(){
        ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
        ctx.drawImage(mole.image,mole.x,mole.y)
        ctx.font="30px Arial"
        ctx.fillText("Hits: "+score,40,40)
        ctx.fillText( "Misses: "+misses,40,80)
        ctx.fillText("High Score: "+highScore,40,120)
        //A main loop for redrawing the canvas and drawing all objects.
        
        requestAnimationFrame(mainLoop)//Calls the main loop at the framerate.
    }
    function moveMole(){
        mole.x=Math.random()*(ctx.canvas.width-0)+0;
        mole.y=Math.random()*(ctx.canvas.width-0)+0;
        setTimeout(moveMole,moveSpeed)
    }//A function to move the mole to a random position.

    function onclick(e){
      if(isMouseInside(mole,e)){
            score++;scoreIncrement--;
            if(!localStorage.getItem("score")){
                   localStorage.setItem("score",score.toString())
            }
            else if(score>highScore){
                       localStorage.setItem("score",score.toString())
            }
        }
        else{
            misses++;
        }//When there's a click, increment score and highscore (only if score is bigger than highscore) Else increment misses

       if(0==scoreIncrement){
           scoreIncrement=initCrement
           moveSpeed*=.2
       } 
    }  

    function onresize(){
      ctx.canvas.width=innerWidth
      ctx.canvas.height=innerHeight
      //Whenever the page is resized, resize canvas.
    }

      requestAnimationFrame(mainLoop)
      setTimeout(moveMole,moveSpeed)
      ctx.canvas.addEventListener("click",onclick)
      addEventListener("resize",onresize)
      //Add all loops to their appropriate functions.
