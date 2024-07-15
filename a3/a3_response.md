## Explain a prototype and what the prototype chain is.

>A prototype is an object that is associated with every function and object within JavaScript as soon as they are created. It is a way to share properties and methods among similar objects. It is utuilzed as a constructor when objects are instantiated with the `new` keyword. It can be accessed using `ConstructorFunction.prototype`, `Object.getProrotypeOf(instance)`, or `instance.__proto__`.
>
>The prototype chain is a series of prototype objects linked together. When a method is accessed, JavaScript will first look for the method in the object itself. If it cannot find the method, it will look for the method in the object's prototype. If the method also could not be found, it will continue down the chain accessing each object's prototype until the prototype object is null.

## Implement your version of Array.pop().

>```js
>let arr = [1, 2, 3];
>
>arr.__proto__.myPop = function () {
>    if (this.length === 0) {
>        return undefined;
>    }
>    let tail = this[this.length - 1];
>    this.length--;
>    return tail;
>}
>
>console.log(arr.myPop()); // 3
>console.log(arr); // [1, 2]
>```

## Implement your version of Array.filter().

>```js
>let arr = [1, 1, 2, 3];
>
>arr.__proto__.myFilter = function (callbackFn, thisArg) {
>    // ** type checking for callbackFn goes here **
>    let result = [];
>    for (let i = 0; i < this.length; i++) {
>        if (callbackFn.call(thisArg, this[i], i, this)) {
>            result.push(this[i]);
>        }
>    }
>    return result;
>}
>
>console.log(arr.myFilter(function (num) { return num === this.val }, { val: 1 })); // [1, 1]
>console.log(arr.myFilter((num) => num > 1)); // [2, 3]
>console.log(arr); // [1, 2, 3]
> ```

## Implement your version of Array.map().

>```js
>let arr = [1, 2, 3,];
>
>arr.__proto__.myMap = function (callbackFn, thisArg) {
>    // ** type checking for callbackFn goes here **
>    let result = [];
>
>    for (let i = 0; i < this.length; i++) {
>        result.push(callbackFn.call(thisArg, this[i], i, this));
>    }
>
>    return result;
>}
>
>
>console.log(arr.myMap(function (num) { return num === this.val }, { val: 1 })); // [t, f, f]
>console.log(arr.myMap((num) => num + 1)); // [2, 3, 4]
>console.log(arr); // [1, 2, 3]
>```

## Implement your version of Array.slice().

>```js
>let arr = [1, 2, 3];
>
>arr.__proto__.mySlice = function (start, end) {
>    let result = [];
>    if (start < 0) {
>        start = this.length + start;
>    }
>    if (end < 0) {
>        end = this.length + end;
>    }
>    if (end === undefined) {
>        end = this.length;
>    }
>    for (let i = start; i < end; i++) {
>        result.push(this[i]);
>    }
>    return result;
>}
>
>console.log(arr.mySlice(1, -1)); // [2]
>console.log(arr); // [1, 2, 3]
>```

## Implement your version of Array.includes().

>```js
>let arr = [1, 2, 3];
>
>arr.__proto__.myIncludes = function (search, from) {
>    let result = false;
>    // assume we want to search from the beginning
>    if (from === undefined) {
>        from = 0;
>    }
>    if (from < 0) {
>        from = this.length + from;
>    }
>    for (let i = from; i < this.length; i++) {
>        if (this[i] === search) {
>            result = true;
>            break;
>        }
>    }
>    return result;
>}
>
>console.log(arr.myIncludes(1, -3)); // true
>console.log(arr); // [1, 2, 3]
>```

## Implement your version of Array.join().

>```js
>let arr = [1, 2, 3];
>
>arr.__proto__.myJoin = function (delimiter = ',') {
>    let result = '';
>    for (let i = 0; i < this.length; i++) {
>        result += this[i];
>        if (i < this.length - 1) {
>            result += delimiter;
>        }
>    }
>    return result;
>}
>
>console.log(arr.myJoin('-')); // 1-2-3
>console.log(arr); // [1, 2, 3]
>```