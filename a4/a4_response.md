## What is the difference between instance methods and static methods?

>Static methods can be accessed without initialization. They are called on the class itself.
>
>Instance methods need to be instantated before they can be called.
>
>For example:
>
>```js
>class Example {
>    static staticMethod() {
>        return 'this is a static method';
>    }
>
>    instanceMethod() {
>        return 'this is an instance method';
>    }
>}
>
>console.log(Example.staticMethod()); // 'this is a static method'
>console.log(Example.instanceMethod()); // TypeError: Example.instanceMethod is not a function
>console.log(new Example().instanceMethod()); // 'this is an instance method'
>```

## How does JS Handle concurrency?

>JavaScript is single-threaded, so it will only run one operation at a time. Through the use of the event loop, JavaScript can handle async operations. A function will run synchronously until it reaches an async operation, at which point it will be given to a web API (or similar async manager). When the async function completes, it will be added to the task queue. Once the synchronous operations are complete, the event loop will check the queue and run the next function in line.
>
>```js
>function foo(num) { console.log("foo", num); };
>function bar(num) { console.log("bar", num); };
>
>foo(1); // runs insatntly
>setTimeout(() => bar(2), 0); // queues bar to task queue pos: 1
>setTimeout(() => foo(3), 0); // queues foo to task queue pos: 2
>bar(4); // runs instantly
>
>// Output:
>// foo 1
>// bar 4
>// bar 2
>// foo 3
>```

## What is async/await? How does it differ from using the promise instance methods?

>Async/await is syntax sugar that makes working with promises easier. Instead of using `.then()` and `.catch()`, you can use the `async` keyword to create an asynchronous function and the `await` keyword to pause execution until the promise is resolved. This makes the code easier to read and write.
>
>```js
>// promise syntax
>function get(url) { return new Promise((resolve, reject) => { 
>    fetch(url)
>        .then(response => resolve(response))
>        .catch(error => reject(error));
> }); }
>
>get('https://jsonplaceholder.typicode.com/todos/1')
>    .then(response => response.json()
>        .then(json => console.log(json)))
>        .catch(error => console.error(error));
>    .catch(error => console.error(error));
>
>// async/await syntax
>async function get(url) {
>    try {
>        const response = await fetch(url);
>        const json = await response.json();
>        console.log(json);
>    } catch (error) {
>        console.error(error);
>    }
>}
>
>get('https://jsonplaceholder.typicode.com/todos/1');
>```

## Can you use await outside of an async function?

>No, `await` can only be used inside an `async` function. If you try to use it outside of an `async` function, you will get a syntax error.
>
>```js
>// Syntax error
>function get(url) {
>    const response = await fetch(url); // SyntaxError: await is only valid in async function
>    console.log(response);
>}
>```

## What is callback hell and why is it considered a problem?

>Callback hell is when you have multiple nested callbacks. This can stack and eventually become increasingly difficult to read and maintain. The code ends up looking more like a pyramid than linear.
>
>```js
>function readDir(dir, callback) {
>    fs.readdir(dir, (err, files) => { // first callback
>        if (err) {
>            callback(err);
>        } else {
>            files.forEach((file, index) => { // second callback
>                fs.readFile(file, (err, data) => { // third callback
>                    if (err) {
>                        callback(err);
>                    } else {
>                        console.log(data);
>                    }
>                });
>            });
>        }
>    });
>}
>```