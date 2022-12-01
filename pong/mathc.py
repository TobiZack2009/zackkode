import math


def quad(a,b,c): 
    sol=(b*a**2)-(4*a*c)
    if sol<0:
        sol=-sol
    x1=(-b+math.sqrt(sol))/(2*a)
    x2=(-b-math.sqrt(sol))/(2*a)
    return [x1,x2]

def rectarea(l,b):
    return l*b

def circarea(r):
    return math.pi*r**2

def triarea(b,h):
    return .5*b*h

