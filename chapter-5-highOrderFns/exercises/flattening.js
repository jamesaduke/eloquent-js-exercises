/* Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays. */


function flatten(arrays) {
    return arrays.reduce((flattenedArray, currentArray) => {
        return flattenedArray.concat(currentArray);
    }, []) // reduce takes 3 parameters the array to be previousValue, currentValue and optional startingPoint which by deafult is 0 if not provided
    // There is some shit I still don't get 🤦‍♂️
}

// cleaner way of doing it
const flattenClean = arrays => {
    return arrays.reduce((flatArray, currentArray) => {
         return flatArray.concat(currentArray);
    }, []);
};


console.log(flatten([[1, 2, 3], [4, 5]]));