## Advanced Javascript: Objects and Functions

### Javascript has 2 types

-   Primitives (Numbers, Strings, Booleans, Undefined, Null)
-   Values (Arrays, Functions, Objects, Dates, Wrappers for Numbers, Strings, Boolean)

### Object oriented programming

-   Objects interacting with one another through methods and properties.
-   Used to store data, structure appications into modules and keeping code clean.

### Prototypes

-   Every JavaSript object has a prototype property, which makes inheritaance possible in JavaScript.
-   The prototype property of an object is where we put methods and properties that we want other objects to inherit.
-   The Constructor's prototype property is `NOT` the prototype of the Constructor itself, it's the prototype of `ALL` instances that are created through it.
-   When a certain method (or property) is called, the search starts in the object itself, and if cannot be found, the search moves on to the object's prototype. This continues until the method is found: `prototype chain`

### Function

-   Function is an instance of the object type.
-   A function behaves like any other object.
-   We can store functions in a variable.
-   We can pass a function as an argument to another function.
-   We can return a function from a function.

### Closure

-   An inner function has always access to the variables and parameters of its outer function, even after the outer function has returned.
