```py
def my_function():
  print("Hello from a function")


my_function() # calling function


def my_function(name): # name is a parameter
  print("Hello", name)

my_function("Emil") # "Emil" is an argument


#Default Parameter Values

def my_function(name = "friend"):
  print("Hello", name)

my_function("Emil")
my_function("Tobias")
my_function()
my_function("Linus")
```

# Keyword Arguments

You can send arguments with the key = value syntax.

```py
def my_function(animal, name):
  print("I have a", animal)
  print("My", animal + "'s name is", name)

my_function(animal = "dog", name = "Buddy")
```

# Positional Arguments

When you call a function with arguments without using keywords, they are called positional arguments.

```py
def my_function(animal, name):
  print("I have a", animal)
  print("My", animal + "'s name is", name)

my_function("dog", "Buddy")

```

# Python \*args and \*\*kwargs

- By default, a function must be called with the correct number of arguments.
- \*args and \*\*kwargs allow functions to accept a unknown number of arguments.
- Arbitrary Arguments - \*args
- If you do not know how many arguments will be passed into your function, add a \* before the parameter name.

## \*\*args

- The \*args parameter allows a function to accept any number of positional arguments.

```py
def my_function(*kids):
  print("The youngest child is " + kids[2])

my_function("Emil", "Tobias", "Linus")


def my_function(*args):
  print("Type:", type(args))
  print("First argument:", args[0])
  print("Second argument:", args[1])
  print("All arguments:", args)

my_function("Emil", "Tobias", "Linus")
```

# Python Lambda

- A lambda function is a small anonymous function.
- A lambda function can take any number of arguments, but can only have one expression.
