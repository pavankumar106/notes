# 1. What are the key differences between Python 2 and Python 3?

| Feature  | Python 2         | Python 3           |
| -------- | ---------------- | ------------------ |
| Print    | Statement        | Function           |
| Strings  | ASCII by default | Unicode by default |
| Division | Integer division | True division      |
| range    | List             | Lazy iterator      |
| input    | Unsafe           | Safe               |
| Status   | Deprecated       | Active             |

# 2. Explain the difference between list, tuple, set, and dictionary

| Feature                  | **List**                           | **Tuple**                        | **Set**                              | **Dictionary**                          |
| ------------------------ | ---------------------------------- | -------------------------------- | ------------------------------------ | --------------------------------------- |
| **Syntax**               | `[1, 2, 3]`                        | `(1, 2, 3)`                      | `{1, 2, 3}`                          | `{"a": 1, "b": 2}`                      |
| **Ordered?**             | ✅ Yes                             | ✅ Yes                           | ❌ No (unordered)\*                  | ✅ Yes (Python 3.7+)                    |
| **Mutable?**             | ✅ Yes                             | ❌ No                            | ✅ Yes                               | ✅ Yes                                  |
| **Allows Duplicates?**   | ✅ Yes                             | ✅ Yes                           | ❌ No                                | ❌ No duplicate keys                    |
| **Indexing?**            | ✅ Yes                             | ✅ Yes                           | ❌ No                                | ❌ No (use keys instead)                |
| **Key–Value Pairs?**     | ❌ No                              | ❌ No                            | ❌ No                                | ✅ Yes                                  |
| **Use Case**             | Ordered collection that may change | Fixed data that shouldn’t change | Unique items, fast membership checks | Storing related data as key–value pairs |
| **Performance (lookup)** | O(n)                               | O(n)                             | O(1) average                         | O(1) average                            |

# 3. What is the difference between is and ==?

| Feature          | `==`                      | `is`                                                |
| ---------------- | ------------------------- | --------------------------------------------------- |
| **Purpose**      | Compares **values**       | Compares **identity (memory location)**             |
| **Checks**       | “Are the contents equal?” | “Are they the same object?”                         |
| **Used For**     | Value comparison          | Checking if two variables reference the same object |
| **Overridable?** | ✅ Yes (via `__eq__`)     | ❌ No (identity is fixed)                           |

# 4. Mutable vs Immutable Types in Python

| Feature                    | **Mutable**                    | **Immutable**                         |
| -------------------------- | ------------------------------ | ------------------------------------- |
| **Meaning**                | Can be modified after creation | Cannot be modified after creation     |
| **Memory Behavior**        | Same object is updated         | New object is created if changed      |
| **Hashable?**              | Usually ❌                     | Usually ✅ (if contents are hashable) |
| **Common Examples**        | `list`, `dict`, `set`          | `int`, `float`, `str`, `tuple`        |
| **Can be dictionary key?** | ❌                             | ✅ (if hashable)                      |
