# Exception Handling

When an error occurs, or exception as we call it, Python will normally stop and generate an error message.

The try block lets you test a block of code for errors.

The except block lets you handle the error.

The else block lets you execute code when there is no error.

The finally block lets you execute code, regardless of the result of the try- and except blocks.

```py
# The try block will generate an exception, because x is not defined:
try:
  print(x)
except:
  print("An exception occurred")

# In this example, the try block does not generate any error:
try:
  print("Hello")
except:
  print("Something went wrong")
else:
  print("Nothing went wrong")

# The finally block, if specified, will be executed regardless if the try block raises an error or not.
try:
  print(x)
except:
  print("Something went wrong")
finally:
  print("The 'try except' is finished")

```

# Raise an exception

To throw (or raise) an exception, use the raise keyword.

```py

x = -1

if x < 0:
  raise Exception("Sorry, no numbers below zero")


x = "hello"

if not type(x) is int:
  raise TypeError("Only integers are allowed")
```

| Exception             | When to use                                       | Example                                                    |
| --------------------- | ------------------------------------------------- | ---------------------------------------------------------- |
| `ValueError`          | Value is invalid, but the type is correct         | `raise ValueError("Age must be between 1 and 120")`        |
| `TypeError`           | Wrong data type                                   | `raise TypeError("Price must be a float")`                 |
| `KeyError`            | Required dictionary key is missing                | `raise KeyError("email is required")`                      |
| `IndexError`          | Invalid list/tuple index                          | `raise IndexError("Student index out of range")`           |
| `AttributeError`      | Object doesn't have the requested attribute       | `raise AttributeError("User has no attribute 'address'")`  |
| `NameError`           | Variable doesn't exist (usually raised by Python) | `print(user_name)` when `user_name` is undefined           |
| `FileNotFoundError`   | File doesn't exist                                | `raise FileNotFoundError("config.json not found")`         |
| `PermissionError`     | User isn't allowed to perform the action          | `raise PermissionError("You cannot delete this record")`   |
| `ZeroDivisionError`   | Division by zero (usually raised by Python)       | `10 / 0`                                                   |
| `ImportError`         | Import fails                                      | `raise ImportError("Failed to import plugin")`             |
| `ModuleNotFoundError` | Module isn't installed or found                   | `import tensorflow` (if not installed)                     |
| `RuntimeError`        | General runtime issue                             | `raise RuntimeError("Database connection lost")`           |
| `NotImplementedError` | Method should be implemented by subclasses        | `raise NotImplementedError("Override this method")`        |
| `AssertionError`      | An `assert` statement fails                       | `assert age >= 18, "Must be an adult"`                     |
| `TimeoutError`        | Operation took too long                           | `raise TimeoutError("Request timed out")`                  |
| `ConnectionError`     | Network or database connection failed             | `raise ConnectionError("Unable to connect to PostgreSQL")` |
