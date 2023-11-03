from math import sqrt
print("Program to Find Area Of Triangle")
a=int(input("Enter The First Side:"))
b=int(input("Enter The Second Side:"))
c=int(input("Enter The Third Side:"))
s=(a+b+c)/2
area=sqrt(s*(s-a)*(s-b)*(s-c))
print('Resulting Area is:',area)
