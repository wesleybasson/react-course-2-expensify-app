const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Wesley Basson',
        //     age: 32
        // });
        reject('Something went wrong!');
    }, 3000);
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
    return 'some data';
}).then((str) => {
    console.log('does this run', str);
}).catch((error) => {
    console.log('Error: ', error);
});

promise.then((data) => {
    console.log('1', data);
}, (error) => {
    console.log('Error: ', error);
});

console.log('after');

