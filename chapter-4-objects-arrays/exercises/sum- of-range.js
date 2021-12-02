/* Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end. */

// function range(start, end) {
// 	if (start === end) {
// 		return [start];
// 	}
// 	else
// 		return [start].concat(range(start+1, end));
// }

// console.log(range(1, 10));

/* Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55. */
function sum(numbers) {
	let result = 0;
	for (let i = 0; i < numbers.length; i++){
		result += numbers[i];
	}
	return result;
}
// console.log(sum(range(1, 10)));

/*  modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2]. */

function modRange(startRange, endRange, step = startRange < endRange ? 1 : -1) {
	let array = [];
	if (step > 0) {
		for (let i = startRange; i <= endRange; i+= step) array.push(i);
	} else {
		for (let i = startRange; i >= endRange; i += step) array.push(i);
	}
	return array;
}

console.log(modRange(5,2, -1));
console.log(modRange(1, 10, 2));