# find the occurances count of all character in a text

text = "Hello javascript python"

def count_chars(text):
    res={}
    text.replace(" ","")
    for char in text:
        if char == " ": continue
        if char in res:
            res[char]+=1
        else:
            res[char]=1
    return res

print(count_chars(text))