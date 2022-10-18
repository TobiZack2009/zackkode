 var drawList=[]
 var div=document.createElement("div")

 document.appendChild(div)

 function rect(x,y,w,h){
     this.x=x
     this.y=y
     this.width=w
     this.height=h;
     this.z=0
     this.type="rect"
     drawList.push(this)
 }



 function update(){
    for(i in drawList){
      a=drawList[i]
      if(a.type=="rect"){
        elem=document.createElement("div")
        elem.style.width=a.width+"%"
        elem.style.height=a.height+"%"
        elem.style.top=elem.x+"%"
        elem.style.left=elem.y="%"
        div.appendChild(elem)
      }
      div.innerHTML=''
    } 

    requestAnimationFrame(update)
 }


 requestAnimationFrame(update)