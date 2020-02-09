## Some important notes

### Execution Context Object
- Variable Object (VO)
- Scope Chain
- "This" variable

### There are 2 phases:
1. Creation Phase
    - Creation of the variable object
        - The argument object is created, containing all the arguments that were passed into the function.
        - Code is scanned for function declarations. For each function, a property is created in the variable object, pointing to that function.
        - Code is scanned for variable declarations. For each variable a property is created in the variable object, and set to ```undefined```
        - Above 2 points together are called ```hoisting```.
    - Creation of the scope chain
    - Determine value of the "this" variable

2. Execution Phase
    - The code of the function that generated the current execution context is ran line by line.

### Scoping

- Scoping answers the question "where can we access a certain variable?"
- Each new function creates a scope i.e the space environment, in which the variable it defines are accessible.
- Lexical Scoping: a function that is lexically within another function gets access to the scope of the outer function.

### This variable / keyword

- Regular function call: the ```this``` keyword points at the global object (the window object in the browser)
- Method Call: the ```this``` variable points to the object that is calling the method.
- The ```this``` keyword is not assigned a value until a function where it is defined is actually called.