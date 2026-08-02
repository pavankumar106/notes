# // Find the largest number in an array

numbers=[23,453,454,6,7,45,3,45455]

def find_largest(numbers):
    largest=numbers[0]

    for num in numbers:
        if largest < num:
            largest=num
    return largest

print(find_largest(numbers))