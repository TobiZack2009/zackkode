import math

print("This is a quadractic equation solver, to solve equations in the format ax²+bx+c=0.")
a=int(input("Please enter your a "))
b=int(input("Please enter your b "))
c=int(input("Please enter your c "))
x1=0
x2=0
solution=(b*a**2)-(4*a*c)


def calc(): 
    x1=(-b+math.sqrt((b*a**2)-(4*a*c)))/(2*a)
    x2=(-b-math.sqrt(b*a**2)-(4*a*c))/(2*a)
    print("X is:",x1,"or",x2)


if solution<=0:
   solution=-solution
   x1=(-b+math.sqrt(solution))/(2*a)
   x2=(-b-math.sqrt(solution))/(2*a)
   print("X equals to :",x1,"or",x2)
