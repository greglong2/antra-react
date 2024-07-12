## Why are closures useful in JavaScript? Give an example use case.
> Closures let inner functions access variables defined in the outer function's scope. This access persists even after the outer function completes execution and its scope is no longer accessible. This data access is helpful for maintaining private variables and encapsulation of data. For example, we could create a simple function, `UserDetails`, that returns an object with getter and setter methods for the user's name, age, and address. The inner functions can access the variables `name`, `age`, and `address` even after the `UserDetails` function has finished executing. This allows us to maintain the state of the user's details without exposing them to the global scope or other parts of the program, ensuring data privacy and encapsulation
> ```js
> function UserDetails() {
>     let name = '';
>     let age = 0;
>     let secretKey = '1234';
>     // ... etc
> 
>     return {
>         getName: function() {
>             return name;
>         },
>         getAge: function() {
>             return age;
>         },
>         setName: function(newName) {
>             name = newName;
>         }
>         // ... etc
>     };
> }
>
> const user = UserDetails();
> user.setName('John Doe');
> console.log(user.getName()); // 'John Doe'
> 
> user.setAge('73');
> console.log(user.getAge()); // '73'
>
> console.log(user.secretKey); // ''
> ```

## When should you choose to use “let” or “const”?
> Using `let` allows the variable to be reassigned later in the scope, while using `const` ensures that the variable's data remains constant. This is helpful when you want to ensure that a variable remains the same value. However, the contents of objects and arrays assigned to a `const` variable can still be modified, so `const` does not make the variable truly immutable.
>
> I would use `let` when I need to reassign the variable and don't necessarily care about the identifier remaining the same. This is helpful when the data is known to change and allows for greater flexability.
>
> I would use `const` when I want to ensure that the variable's data remains the same. This helps prevent accidental reassignments and makes for more predictable code. 

## Give an example of a common mistake related to hoisting and explain how to fix it.
> A common mistake is misunderstanding how a variable is hoiseted, especially with initialization. For example:
> ```js
> console.log(str); // undefined
> var str = 'hoisted';
> ```
> In this example, the variable `str` is hoisted to the top of its scope (in this case, the global scope), which means the declaration is processed before the code runs. However, the initialization remains where it is in the code, so when `console.log(str);` is executed, str exists but has not yet been assigned a value, resulting in undefined.
>
> To fix this, ensure both declaration and initialization are done before using the variable:
> ```js
> var str = 'hoisted';
> console.log(str); // 'hoisted'
> ```
> In this version, the variable `str` is declared and initialized before it is used, so it will have the correct value when accessed.

## What will the outcome of each console.log() be after the function calls? Why?
> ```js
> const arr = [1, 2];
> function foo1(arg) {
>   arg.push(3);
> }
> foo1(arr);
> console.log(arr); // [1, 2, 3]
> ```
> Output: [1, 2, 3] -- `arr` is passed by reference, so the `push` method modifies the original array.

> ```js
> const arr = [1, 2, 3];
> function foo2(arg) {
>   arg = [1, 2, 3, 4];
> }
> foo2(arr);
> console.log(arr); // [1, 2, 3]
> ```
> Output: [1, 2, 3] -- `arg` is a new reference to a new array, so the original array is not modified.

> ```js
> const arr = [1, 2, 3];
> function foo3(arg) {
>   let b = arg;
>   b.push(3);
> }
> foo3(arr);
> console.log(arr); // [1, 2, 3, 3]
> ```
> Output: [1, 2, 3, 3] -- `b` is assigned as a reference to the original array, so the `push` method modifies the original array.

> ```js
> const arr = [1, 2, 3, 3];
> function foo4(arg) {
>   let b = arg;
>   b = [1, 2, 3, 4];
> }
> foo4(arr);
> console.log(arr); // [1, 2, 3, 3]
> ```
> Output: [1, 2, 3] -- `b` initially is a reference to the original array, but then it is reassigned to a new reference to a new array, so the original array is not modified.