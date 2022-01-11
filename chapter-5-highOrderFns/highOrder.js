/* ABSTRACTION */
// Abstracting repetition

const SCRIPTS = require("./scripts");

// function repeat(n, action) {
//     for (let i = 0; i < n; i++) {
//         action(i);
//     }
// }


// Below is a function that changes other function
// function noisy(f) {
//     return (...args) => {
//         console.log("calling with", args);
//         let result = f(...args);
//         console.log("called with", args, ", returned", result);
//         return result;
//     };
// }

// noisy(Math.min)(3,2,1);

// Functions that provide new type of control flow

// function unless(test, then) {
//     if (!test) then();
// }

// repeat(3, n=>{
//     unless(n%2 == 1, () => {
//         console.log(n, "is even");
//     })
// });

/* FILTERING ARRAY */

// function filter(array, test) {
//     let passed = [];
//     for (let element of array){
//         if (test(element)){
//             passed.push(element);
//         }
//     }
//     return passed;
// }

// console.log(filter(SCRIPTS, script => !script.living));

// Filter is a standard array method

/* Transforming arrays with map */
function map(array, transform) {
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));
    }
    return mapped;
}

let rtlScript = SCRIPTS.filter(s => s.direction == "rtl");
console.log(map(rtlScript, s => s.name));

/* SUMMARIZING AN ARRAY TO A SINGLE VALUE WITH REDUCE */
function reduceComp (array, combine, start) {
    let current = start;
    for (let element of array){
        current = combine(current, element);
    }
    return current;
}

console.log(reduceComp([1,2,3,4], (a,b)=>a+b),0);

// count characters in scripts using reduce
function characterCount(script){
    return script.ranges.reduce((count, [from, to])=>{
        return count + (to-from);
    }, 0)
}

console.log(SCRIPTS.reduce
    ((a,b) => {
    return characterCount(a) < characterCount(b) ? b : a;
}));

/* Function for average year of origin for living and dead SCRIPTS */

function averageFn(array) {
    return array.reduce((a,b) => a+b) /array.length;
}


console.log(Math.round(averageFn(
    SCRIPTS.filter(s=>s.living).map(s => s.year)
)));

console.log(Math.round(averageFn(
    SCRIPTS.filter(s=>!s.living).map(s => s.year)
)));

// the Above 👆 all done with one big loop

let total = 0, count = 0;
for (let script of SCRIPTS) {

}