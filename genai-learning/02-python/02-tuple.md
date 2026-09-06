# tuple

- A tuple is a collection which is ordered and unchangeable.
- Ordered
- Unchangeable
- Allow Duplicates

```py
mytuple = ("apple", "banana", "cherry")

# Tuples can also be created without the parentheses:
thistuple = "apple", "banana", "cherry"
print(thistuple)

# Tuple Length
thistuple = ("apple", "banana", "cherry")
print(len(thistuple))

# Create Tuple With One Item
thistuple = ("apple",)
print(type(thistuple))

#NOT a tuple
thistuple = ("apple")
print(type(thistuple))

# Create an Empty Tuple
thistuple = ()
print(type(thistuple))

# type() -> <class 'tuple'>
thistuple = tuple(("apple", "banana", "cherry")) # note the double round-brackets
print(thistuple)

```

# Access Tuple Items

```py
thistuple = ("apple", "banana", "cherry")
print(thistuple[1])

# Negative Indexing
thistuple = ("apple", "banana", "cherry")
print(thistuple[-1])

# Range of Indexes
thistuple = ("apple", "banana", "cherry", "orange", "kiwi", "melon", "mango")
print(thistuple[2:5])

# Check if Item Exists
thistuple = ("apple", "banana", "cherry")
if "apple" in thistuple:
  print("Yes, 'apple' is in the fruits tuple")
```

# Update Tuples

Tuples are unchangeable, meaning that you cannot change, add, or remove items once the tuple is created.

```py
x = ("apple", "banana", "cherry")
y = list(x)
y[1] = "kiwi"
x = tuple(y)

print(x)

# Add Items
thistuple = ("apple", "banana", "cherry")
y = list(thistuple)
y.append("orange")
thistuple = tuple(y)

# Remove Items
thistuple = ("apple", "banana", "cherry")
y = list(thistuple)
y.remove("apple")
thistuple = tuple(y)

thistuple = ("apple", "banana", "cherry")
del thistuple
print(thistuple) #this will raise an error because the tuple no longer exists



```

# Unpack Tuples

When we create a tuple, we normally assign values to it. This is called "packing" a tuple:

```py
fruits = ("apple", "banana", "cherry")

(green, yellow, red) = fruits

print(green)
print(yellow)
print(red)

# Using Asterisk* If the number of variables is less than the number of values, you can add an * to the variable name and the values will be assigned to the variable as a list:

fruits = ("apple", "banana", "cherry", "strawberry", "raspberry")

(green, yellow, *red) = fruits

print(green)
print(yellow)
print(red)

```

# Loop Tuples

```py
thistuple = ("apple", "banana", "cherry")
for x in thistuple:
  print(x)

# Loop Through the Index Numbers
thistuple = ("apple", "banana", "cherry")
for i in range(len(thistuple)):
  print(thistuple[i])

# Using a While Loop
thistuple = ("apple", "banana", "cherry")
i = 0
while i < len(thistuple):
  print(thistuple[i])
  i = i + 1


```

# Join Tuples
```py
tuple1 = ("a", "b" , "c")
tuple2 = (1, 2, 3)

tuple3 = tuple1 + tuple2
print(tuple3)


```