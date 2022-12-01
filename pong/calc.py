import mathc

code=input("""This is a progam to calculate mathematical formulas.
         Type the code for the formula you want to calculate, either,
         OPERATION                 CODE
         Quadractic formula,       q
         Area of a circle,         c
         Area of triangle, or      t
         Area of rectangle.        r
         Code: 
"""
)



if code=="q":
    a=int(input("Enter a "))
    b=int(input("Enter b "))
    c=int(input("Enter c "))
    print("X1:",mathc.quad(a,b,c)[0],"or",mathc.quad(a,b,c)[1])

elif code=="c":
    r=int(input("Enter radius "))
    print(mathc.circarea(r))

elif code=="t":
     b=int(input("Enter your base "))
     h=int(input("Enter your height "))
     print("Area is",mathc.triarea(b,h))

elif code=="r":
     l=int(input("Enter your length "))
     b=int(input("Enter your breadth "))
     print("Area is",mathc.rectarea(b,l))

else:
    print("Invalid code!")