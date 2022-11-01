var MathJS={}

MathJS.factorOf=function(int){
    var list=[]
    if(isNaN(int)){
        return;} //Return a null if the supplied value is a NaN.
    else{
        for(var i=1;i<=int/2;i++){
            if(int/i==Math.round(int/i)){
            list.push(i)
                
    }
   

    }  list.push(int)
    return list;
}}//Finds the factor of an integer.

MathJS.isPrime=function(int){
    if(isNaN(int)){
return false;
    }
    return MathJS.factorOf(int).length==2
}//Checks if a number is prime, by verifying it has 2 factors.

MathJS.doubleAngle=function(x1,y1,x2,y2){
    if(isNaN(x1) ||isNaN(x2) || isNaN(y1) || isNaN(y2)){
return null
    }
  return Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
}//Find the angle between 2 points. Uses modified code from code grepper.

MathJS.countNum=function(a,b){
    var num1=a,num2=b,list=[];
    if(isNaN(a)){
  return;
    }
    if(isNaN(b)){
        num1=0,num2=a
    }
    for(var i=num1+1;i<num2;i++){
        list.push(i)
    }
    return list;

}//Counts all numbers between a and b and returns a list, or find all numbers between 0 and A if a is not given. A and B are not include in said list.

MathJS.countPrimeNum=function(a,b){
    var num1=a,num2=b,list=[];
    if(isNaN(a)){
  return;
    }
    if(isNaN(b)){
        num1=0,num2=a
    }
    for(var i=num1+1;i<num2;i++){
       if(MathJS.isPrime(i)){ list.push(i)}
    }
    return list;

}//Does the exact same thing as countNum, except now prime numbers get counted.
