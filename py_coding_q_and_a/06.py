# // Find the sum of all numbers in an array.

from functools import reduce

arr = [1, 2, 3, 2, 3, 1, 2, 3, 4, 4, 4, 3, 2, 4, 5, 5, 66, 98]

def sum_of_all_elements(arr):
    sum=0
    for x in arr:
        sum=sum+x
    return sum

print(sum_of_all_elements(arr))

# using reduce
total = reduce(lambda x,y: x+y,arr)
print(total)

# using sum

res=sum(arr)
print(res)