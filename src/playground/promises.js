const promise = new Promise((resolve, reject) => {
  setTimeout(()=> {
    resolve('This is my resolved data');
    // reject('Something went wrong')
  }, 5000);
});

console.log('before then');

promise.then((data)=> {
  console.log('1', data);
  
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve('This is my another promise');
    }, 5000);
  });
}).then((str) => {
  console.log('does this run?', str);  //promise chainning
}).catch((error) => {
  console.log(error);
});

console.log('after then');