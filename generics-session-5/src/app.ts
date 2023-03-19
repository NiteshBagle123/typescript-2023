// Generic types
const names: Array<string> = ['Nitesh', 'Shraddha'];

// Promise generic type
const promise: Promise<string> = new Promise((reject, resolve) => {
    setTimeout(() => {
        resolve('After 2 milliseconds');
    }, 2000);
    reject('Failed');
});

promise.then(() => {
    console.log('Promise resolved');
}).catch(() => {
    console.log('Promise rejected');
})

// custom generic function
function mergeObjects<T extends object, U extends object>(objA: T, objB: U) {
    return {
        ...objA,
        ...objB
    }
};

const mergedObject = mergeObjects({ name: 'Nitesh'}, { age: 27 });
console.log(mergedObject);