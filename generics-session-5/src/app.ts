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
function countAndPrint<T extends Lengthy>(ele: T) {
    let description = 'Got no element';
    if(ele.length){
        description = `Got element with count: ${ele.length}`;
    }
    return [ele, description];
}
console.log(countAndPrint(['Sports', 'Cooking']));

// custom genetic function 3
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}

console.log(extractAndConvert({ name: 'Nitesh' }, 'name'));

// generic classes
class DataStorage<T> {
    private data: T[] = [];
    addItem(item: T){
        this.data.push(item);
    }
    removeElement(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Nitesh');
textStorage.addItem('Shraddha');
textStorage.removeElement('Nitesh');
console.log('Print textStorage', textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(100);
numberStorage.addItem(2);
numberStorage.removeElement(100);
console.log('print numberStorage', numberStorage.getItems());

// generics utility types
// Partial type is optional types wherever we define
interface CourseGoal {
    title: string;
    description: string;
    completionUntil: Date;
}

function createCourseGoal(title: string, description: string, completionUntil: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completionUntil = completionUntil;
    return courseGoal as CourseGoal;
}

const nameType: Readonly<string[]> = ['Nitesh', 'Shraddha'];
// nameType.push();
// nameType.pop();

