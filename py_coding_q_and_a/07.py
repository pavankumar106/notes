# // Find the factorial of a number.

def factorial(n):
    res=1
    while n>0:
        res=res* n
        n=n-1
    return res

def factorial1(n):
    if n>0 :
        return n * factorial1(n-1)
    else:
        return 1

print(factorial(5))
print(factorial1(5))