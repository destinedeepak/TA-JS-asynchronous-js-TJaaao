Create the execution context diagram of the following code. Also write the output of the code below. Keep in mind to have call stack, web browser API and event loop in the diagram. After creating the execution context diagram add the image to the `img` folder.

1.

```js
console.log('First');
setTimeout(() => console.log('Second'), 0);
console.log('Third');
```

2.

```js
console.log('First');
function secondCall() {
  console.log('Second');
}
setTimeout(secondCall, 2000); // execute this code after 2000 ms
setTimeout(() => console.log('Third'), 0); // execute this code after 2000 ms
console.log('Third');
```

3.

```js
console.log('First');
function secondCall() {
  console.log('Second');
}
setTimeout(secondCall, 1000); // execute this code after 1000 ms
setTimeout(() => console.log('Third'), 0);
console.log('Fourth');
```

4.

```js
console.log('First');
function secondCall() {
  console.log('Second');
}
setTimeout(secondCall, 1000); // execute this code after 1000 ms
setTimeout(() => console.log('Third'), 0);
console.log('Fourth');
```

5. What will be the output of the code below and why? Also write the timing of the output starting with 0 ms.

```js
function runWhileLoopForNSeconds(sec) {
  let start = Date.now(),
    now = start;
  while (now - start < sec * 1000) {
    now = Date.now();
  }
}
console.log('First'); //0 sec
setTimeout(function exec() {
  console.log('Second');// after 3sec
}, 0);
runWhileLoopForNSeconds(3);//3 sec
console.log('Third'); // after 3sec
```
output:- 
first 
third 
second

6. Convert the synchronous code given below into asynchronous. If you execute this code it will print one, two and three. Change the code in such a way that it should print `one`, `three` and `two`. You are not allowed to move the code up and down.

```js
// console.log('one');
// console.log('two');
// console.log('three');

console.log('one');
setTimeout(()=>{console.log('two')},0)
console.log('three');
```

7. Convert the synchronous code given below into asynchronous. If you execute this code it will print one, two and three. Change the code in such a way that it should print `one`, `three` and `two`. You are not allowed to move the code up and down.

```js
console.log('one');
console.log('two');
console.log('three');
```

8. Write a function named `asyncForEach` that is similar to `forEach`. But `asyncForEach` is asynchronous in nature rather than synchronous.

```js
function asyncForEach(arr, callback){
  for(let i = 0; i < arr.length; i++){
    setTimeout(()=>callback(arr[i]) , 0);
  }
}

console.log('one');
asyncForEach([1, 2, 3], (num) => console.log(num));
console.log('three');
//  Output of the function below should be
// one
// three
//  1, 2, 3
```

9. Convert the following function into asynchronous. The output of the function will be

```js
Array.prototype.firEach = function(callback){
  for(let i = 0; i < this.length; i++){
    callback(this[i])
  }
}
```

<!-- First Call -->
<!-- 1, 2, 3, 4, 5 -->
<!-- Last Call -->

Convert the code below in such way that the output should be the one below

```js
Array.prototype.firEach = function(callback){
  for(let i = 0; i < this.length; i++){
    setTimeout(() => callback(this[i]), 0)
  }
}
```

<!-- First Call -->
<!-- Last Call -->
<!-- 1, 2, 3, 4, 5 -->

```js
console.log('First Call');
[1, 2, 3, 4, 5].firEach((num) => console.log(num));
console.log('Last Call');
```
