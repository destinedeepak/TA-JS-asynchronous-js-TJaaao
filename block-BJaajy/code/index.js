const p1 = new Promise((res, rej) => {
    setTimeout(res("one"),1000)
})
const p2 = new Promise((res, rej) => {
    setTimeout(res("two"),2000)
})
const p3 = new Promise((res, rej) => {
    setTimeout(res("three"),3000)
})
const p4 = new Promise((res, rej) => {
    setTimeout(res("four"),4000)
})

Promise.all([p1,p2,p3,p4]).then(res =>console.log(res));




// const userNames = ['destinedeepak'];

// let usersPromises  = Promise.all(userNames.map(user => {
//     return fetch(`https://api.github.com/users/${user}`)
//     .then(res=> res.json())
// }));

// Promise.all(usersPromises).then(users => {
//     users.forEach(user => console.log(user.followers))
// })



let urlList = [`https://random.dog/woof.json`,`https://aws.random.cat/meow`];

 Promise.race(urlList.map(url => fetch(url)))
 .then(console.log)





const one = new Promise((resolve, reject) =>
  setTimeout(() => resolve('Arya'), 1000)
);
const two = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error('Whoops!')), 2000)
);
const three = new Promise((resolve, reject) =>
  setTimeout(() => resolve('John'), 3000)
);

Promise.allSettled([one, two, three])
.then(data => console.log(data,' allSettled'))

let allPromises = Promise.all([one, two, three]);
// Not working with all becuse one of the promise is not fullfilled




Promise.all([
    new Promise((resolve, reject) => {
      setTimeout(() => resolve('Arya'), 1000);
    }),
    'Sam',
    { name: 'John' },
  ])
  .then(console.log)
  .catch(console.log)
  //output is a promise array with all the resolved values, 1sec

