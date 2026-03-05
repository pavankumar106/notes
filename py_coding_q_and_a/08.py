# // Print the Fibonacci sequence up to n terms.

def fibo(n):
    res=[0,1]
    first,second=res

    while n >=2:
        newNum=first+second
        first=second
        second=newNum
        res.append(newNum)
        n=n-1
    return res

print(fibo(5))