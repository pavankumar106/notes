# // Remove duplicates from an array

arr = [1, 2, 3, 2, 3, 1, 2, 3, 4, 4, 4, 3, 2, 4, 5, 5, 66, 98]

def remove_duplicates(arr):
    res=[]

    for num in arr:
        if num not in res:
            res.append(num)
    return res

print(remove_duplicates(arr))

# using set 
# x=set(arr)
# x=list(x)
# print(x)