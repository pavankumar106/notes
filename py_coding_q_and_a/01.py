# // Reverse a string without using built-in reverse functions.

text="Coding in python"

def reverse_string(text):
    result=""
    for c in text:
        result=c+result
    return result

print(reverse_string(text))