# // Check if a string is a palindrome.

string="elle"

def reverse_string(text):
    result=""
    for c in text:
        result=c+result
    return result


def check_for_palindrome(string):
    new_string=reverse_string(string)

    return string == new_string

print(check_for_palindrome(string))