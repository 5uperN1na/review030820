//Array.indexOf()
//The indexOf() method is available on all Arrays. It is used to determine the first index at which a given element exists in an Array. Typically people use it to determine whether or not an Array contains an element, but it can also be used to determine if an Array has more than one instance of an element.

const nums = [1, 2, 3, 2, 5];

const has2 = nums.indexOf(2);
const has2Twice = nums.indexOf(2, 2);
const has6 = nums.indexOf(6);

console.log(has2); // 1
console.log(has2Twice); // 3
console.log(has6); // -1

function contains(arr, element) {
    return arr.indexOf(element) !== -1;
}

console.log(contains([1, 2, 3], 2)); // true

//Array.lastIndexOf()
//The lastIndexOf() method is available on all Arrays. It is used to determine the last index at which a given element exists in an Array. In other words, it operates exactly as indexOf() only it searches the array backwards, starting at fromIndex.

const nums1 = [1, 2, 3, 2, 5];

const has22 = nums1.lastIndexOf(2);
const has22Twice = nums1.lastIndexOf(2, 2);
const has66 = nums1.lastIndexOf(6);

console.log(has22); // 3
console.log(has22Twice); // 1
console.log(has66); // -1

//Array.map()
//Calls a function for every element in an array and returns a new array with the return value of each function call.

const nums2 = [1, 3, 5, 7, 9];

const doubles = nums2.map((numm) => {
    return numm * 2;
});

console.log(nums2); // [1, 3, 5, 7, 9]
console.log(doubles); // [2, 6, 10, 14, 18]

//Array.reduce()
//The reduce() method is available on all Arrays. It is an incredibly useful method to understand and it pretty much does what it says. The purpose of the reduce method is to "reduce" an array into a single output value. It does this by executing a "reducer" function for each item in an array, and allowing you to keep an accumulator that serves as the final reduced value.

const array = [1, 2, 3, 4, 5];

function sum(a, b) {
    return a + b;
}

console.log(array.reduce(sum)); // 15
console.log(array.reduce(sum, 5)); // 20

const users = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jane', lastName: 'Smith' },
    { firstName: 'Jack', lastName: 'Nimble' },
    { firstName: 'James', lastName: 'Trickington' },
];

console.log(
    users.reduce((names, user) => {
        return names.concat(`${user.firstName} ${user.lastName}`);
    }, [])
); // ["John Doe", "Jane Smith", "Jack Nimble", "James Trickington"]