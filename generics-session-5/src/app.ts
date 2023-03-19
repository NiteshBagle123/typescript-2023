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

// custom generic function 2
interface Lengthy {
    length: number
}
function countAndPrint<T extends Lengthy>(ele: T): [T, string] {
    let description = 'Got no element'
    if(ele.length){
        description = `Got element with count: ${ele.length}`;
    }
    return [ele, description];
}
console.log(countAndPrint(['Sports', 'Cooking']));