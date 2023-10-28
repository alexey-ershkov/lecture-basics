const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('promise resolved');
    }, 2000)
});

// some code

console.log('Before promise');

promise.then((data) => {
    console.log(data);
    return 'some data';
}).then((infoFromPrevPromise) => {
    console.log(infoFromPrevPromise);

    throw new Error('Error in promise')
}).catch(err => {
    console.log(err);
}).then(() => {
    console.log('after catch')
})

console.log('After promise');