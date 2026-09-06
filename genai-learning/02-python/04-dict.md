```py

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}

# length of dict

print(len(thisdict))

# type() -> <class 'dict'>


thisdict = dict(name = "John", age = 36, country = "Norway")
print(thisdict)
```

# access

```py
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
x = thisdict["model"]

x = thisdict.get("model")

# The keys() method will return a list of all the keys in the dictionary.
x = thisdict.keys()

# The values() method will return a list of all the values in the dictionary.
x = thisdict.values()


# The items() method will return each item in a dictionary, as tuples in a list.
x = thisdict.items()

# Check if Key Exists
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
if "model" in thisdict:
  print("Yes, 'model' is one of the keys in the thisdict dictionary")
```

# Change Dictionary Items

```py
# You can change the value of a specific item by referring to its key name:
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict["year"] = 2018

# The update() method will update the dictionary with the items from the given argument.
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict.update({"year": 2020})
```

# Add Dictionary Items

```py
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict["color"] = "red"
print(thisdict)

# Add a color item to the dictionary by using the update() method:
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict.update({"color": "red"})

```

# Remove Dictionary Items

```py
# The pop() method removes the item with the specified key name:
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict.pop("model")
print(thisdict)


# The popitem() method removes the last inserted item (in versions before 3.7, a random item is removed instead):
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict.popitem()
print(thisdict)


# The del keyword removes the item with the specified key name:
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
del thisdict["model"]
print(thisdict)


# The clear() method empties the dictionary:
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict.clear()
print(thisdict)
```

# Loop Dictionaries

```py
# You can loop through a dictionary by using a for loop.
for x in thisdict:
  print(x)

for x in thisdict:
  print(thisdict[x])

# You can also use the values() method to return values of a dictionary:
for x in thisdict.values():
  print(x)

# You can use the keys() method to return the keys of a dictionary:
for x in thisdict.keys():
  print(x)

# Loop through both keys and values, by using the items() method:
for x, y in thisdict.items():
  print(x, y)
```

# Copy Dictionaries

You cannot copy a dictionary simply by typing dict2 = dict1, because: dict2 will only be a reference to dict1, and changes made in dict1 will automatically also be made in dict2.

```py
# Make a copy of a dictionary with the copy() method:
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
mydict = thisdict.copy()
print(mydict)

# Make a copy of a dictionary with the dict() function:
hisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
mydict = dict(thisdict)
print(mydict)
```
