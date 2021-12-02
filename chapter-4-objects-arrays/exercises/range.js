/* Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end. */

function range(start, end) {
	if (start === end) {
		return [start];
	}
	else
		return [start].concat(range(start+1, end));
}

console.log(range(1, 10));