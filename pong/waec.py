
age=0
print("This is a program designed to calculate whether you can go to university.")
age=int(input("Enter your age: "))
passes=int(input("Enter your your credit passings in your WAEC or NECO result: "))
purpose=[]

if passes<5:
    purpose.append("nopass")

if age<16:
    purpose.append("age")
z=0
while z<len(purpose):
    if purpose[z]=="nopass":
     print("You cannot go to university because you don't have enough credit passes.")
    
    if purpose[z]=="age":
        print("You can't go to university because you are too young.")
    z+=1

if len(purpose)==0:
    print("You can go to university.")