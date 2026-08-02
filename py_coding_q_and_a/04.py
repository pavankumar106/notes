#  Count the number of vowels in a string.

vowels = ["a", "e", "i", "o", "u"]

string = "Hello python"

def count_vowels(text,vowels):
    count=0

    for char in text:
        if char == " " : continue

        if char in vowels: count+=1

    return count


print(count_vowels(string,vowels))