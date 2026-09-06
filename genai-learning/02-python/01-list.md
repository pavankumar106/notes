# cmd for creating virtual env

to create venv

- python -m venv venv_name

to activate

- venv_name\Scripts\activate

# Data structures in python

1. list - is a collection which is ordered and changeable. Allows duplicate members.
2. tuple - is a collection which is ordered and unchangeable. Allows duplicate members.
3. set - is a collection which is unordered, unchangeable\*, and unindexed. No duplicate members.
4. dictionary - is a collection which is ordered\*\* and changeable. No duplicate members.

# LIST

- List items are ordered,
- changeable,
- allow duplicate values.

```py
mylist = ["apple", "banana", "cherry"]

```

## get length of the list

```py
thislist = ["apple", "banana", "cherry"]
print(len(thislist))

type(thislist) # <class 'list'>
```

## The list() Constructor

```py
thislist = list(("apple", "banana", "cherry")) # note the double round-brackets
print(thislist)
```

## Access Items

```py
thislist = ["apple", "banana", "cherry"]
print(thislist[1])

# Negative Indexing
thislist = ["apple", "banana", "cherry"]
print(thislist[-1])

#Range of Indexes
thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[2:5])

# Range of Negative Indexes
thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[-4:-1])

# Check if Item Exists
thislist = ["apple", "banana", "cherry"]
if "apple" in thislist:
  print("Yes, 'apple' is in the fruits list")
```

## Change List Items

```py
thislist = ["apple", "banana", "cherry"]
thislist[1] = "blackcurrant"
print(thislist)

# Change a Range of Item Values
thislist = ["apple", "banana", "cherry", "orange", "kiwi", "mango"]
thislist[1:3] = ["blackcurrant", "watermelon"]
print(thislist)

# Insert Items
thislist = ["apple", "banana", "cherry"]
thislist.insert(2, "watermelon")
print(thislist)

```

## Add List Items

```py
# Append Items -append method adds an item to the end of the list
thislist = ["apple", "banana", "cherry"]
thislist.append("orange")
print(thislist)

# To insert a list item at a specified index, use the insert() method.
thislist = ["apple", "banana", "cherry"]
thislist.insert(1, "orange")
print(thislist)

# To append elements from another list to the current list, use the extend() method.
thislist = ["apple", "banana", "cherry"]
tropical = ["mango", "pineapple", "papaya"]
thislist.extend(tropical)
print(thislist)
```

## Remove List Items

```py
#Remove Specified Item
# The remove() method removes the specified item.
thislist = ["apple", "banana", "cherry"]
thislist.remove("banana")
print(thislist)

# Remove Specified Index
thislist = ["apple", "banana", "cherry"]
thislist.pop(1)
print(thislist)

# If you do not specify the index, the pop() method removes the last item.
thislist = ["apple", "banana", "cherry"]
thislist.pop()
print(thislist)

# The del keyword also removes the specified index:
thislist = ["apple", "banana", "cherry"]
del thislist[0]
print(thislist)

# The del keyword can also delete the list completely.
thislist = ["apple", "banana", "cherry"]
del thislist

# The clear() method empties the list. The list still remains, but it has no content.
thislist = ["apple", "banana", "cherry"]
thislist.clear()
print(thislist)
```

## Loop Lists

```py
# You can loop through the list items by using a for loop:
thislist = ["apple", "banana", "cherry"]
for x in thislist:
  print(x)

# Loop Through the Index Numbers
thislist = ["apple", "banana", "cherry"]
for i in range(len(thislist)):
  print(thislist[i])

# Using a While Loop
thislist = ["apple", "banana", "cherry"]
i = 0
while i < len(thislist):
  print(thislist[i])
  i = i + 1

# Looping Using List Comprehension
thislist = ["apple", "banana", "cherry"]
[print(x) for x in thislist]



```

## List Comprehension

List comprehension offers a shorter syntax when you want to create a new list based on the values of an existing list.

```py
fruits = ["apple", "banana", "cherry", "kiwi", "mango"]

newlist = [x for x in fruits if "a" in x]

print(newlist)


```

## Sort Lists

List objects have a sort() method that will sort the list alphanumerically, ascending, by default:

```py
thislist = ["orange", "mango", "kiwi", "pineapple", "banana"]
thislist.sort()
print(thislist)

# numbers list
thislist = [100, 50, 65, 82, 23]
thislist.sort()
print(thislist)

# To sort descending, use the keyword argument reverse = True:
thislist = ["orange", "mango", "kiwi", "pineapple", "banana"]
thislist.sort(reverse = True)
print(thislist)
```

## Copy Lists

You cannot copy a list simply by typing list2 = list1, because: list2 will only be a reference to list1, and changes made in list1 will automatically also be made in list2.

```py
# Use the copy() method
thislist = ["apple", "banana", "cherry"]
mylist = thislist.copy()
print(mylist)

# Use the list() method
thislist = ["apple", "banana", "cherry"]
mylist = list(thislist)
print(mylist)

# Use the slice Operator
thislist = ["apple", "banana", "cherry"]
mylist = thislist[:]
print(mylist)


```

## Join Lists

```py
# One of the easiest ways are by using the + operator.
list1 = ["a", "b", "c"]
list2 = [1, 2, 3]

list3 = list1 + list2
print(list3)

# Append list2 into list1:
list1 = ["a", "b" , "c"]
list2 = [1, 2, 3]

for x in list2:
  list1.append(x)

print(list1)

# Use the extend() method to add list2 at the end of list1:
list1 = ["a", "b" , "c"]
list2 = [1, 2, 3]

list1.extend(list2)
print(list1)


```
