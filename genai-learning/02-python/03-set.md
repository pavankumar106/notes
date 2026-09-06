# Sets

```py
myset = {"apple", "banana", "cherry"}

# length of set
thisset = {"apple", "banana", "cherry"}

print(len(thisset))

# type() _. <class 'set'>

thisset = set(("apple", "banana", "cherry")) # note the double round-brackets
print(thisset)



```

# Access Set Items

```py
# Access Items

thisset = {"apple", "banana", "cherry"}

for x in thisset:
  print(x)


# Check if "banana" is present in the set:
thisset = {"apple", "banana", "cherry"}

print("banana" in thisset)
```

# Add Set Items

```py
thisset = {"apple", "banana", "cherry"}

thisset.add("orange")

print(thisset)


# To add items from another set into the current set, use the update() method.

thisset = {"apple", "banana", "cherry"}
tropical = {"pineapple", "mango", "papaya"}

thisset.update(tropical)

print(thisset)
```

# Remove Set Items
```py
# Remove "banana" by using the remove() method:
thisset = {"apple", "banana", "cherry"}

thisset.remove("banana")

print(thisset)

# If the item to remove does not exist, remove() will raise an error.
thisset = {"apple", "banana", "cherry"}

thisset.discard("banana")

print(thisset)

# The clear() method empties the set:
thisset = {"apple", "banana", "cherry"}

thisset.clear()

print(thisset)


# The del keyword will delete the set completely:

thisset = {"apple", "banana", "cherry"}

del thisset

print(thisset)
```

# Loop Sets

```py
thisset = {"apple", "banana", "cherry"}

for x in thisset:
  print(x)

```
# Join Sets

```py
# The union() method returns a new set with all items from both sets.
set1 = {"a", "b", "c"}
set2 = {1, 2, 3}

set3 = set1.union(set2)
print(set3)


# You can use the | operator instead of the union() method, and you will get the same result.
set1 = {"a", "b", "c"}
set2 = {1, 2, 3}

set3 = set1 | set2
print(set3)


# Join Multiple Sets
set1 = {"a", "b", "c"}
set2 = {1, 2, 3}
set3 = {"John", "Elena"}
set4 = {"apple", "bananas", "cherry"}

myset = set1.union(set2, set3, set4)
print(myset)

# When using the | operator, separate the sets with more | operators:
set1 = {"a", "b", "c"}
set2 = {1, 2, 3}
set3 = {"John", "Elena"}
set4 = {"apple", "bananas", "cherry"}

myset = set1 | set2 | set3 |set4
print(myset)

# The union() method allows you to join a set with other data types, like lists or tuples.

x = {"a", "b", "c"}
y = (1, 2, 3)

z = x.union(y)
print(z)


# The update() method inserts the items in set2 into set1:
set1 = {"a", "b" , "c"}
set2 = {1, 2, 3}

set1.update(set2)
print(set1)

# Intersection - The intersection() method will return a new set, that only contains the items that are present in both sets.

# You can use the & operator instead of the intersection() method, and you will get the same result.

set1 = {"apple", "banana", "cherry"}
set2 = {"google", "microsoft", "apple"}

set3 = set1.intersection(set2)
print(set3)
```