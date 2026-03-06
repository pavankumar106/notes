# flatten array

arr=[1,[2,3,4],5,[6,7,8,9]]

def flattenArr(arr):
    res=[]
    for x in arr:
        if type(x) != list:
            res.append(x)
        else:
            res+=x
    return res


print(flattenArr(arr))