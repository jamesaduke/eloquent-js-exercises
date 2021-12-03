/*
reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.
*/

function reverseArray(arr) {
	let result = [];
	for (let i = arr.length - 1; i >= 0; i--) {
		result.push(arr[i]);
	}
	return result;
}
console.log(reverseArray(["A", "B", "C"]));

function reverseArrayInPlace(array) {
	for (let i = 0; i < Math.floor(array.length / 2); i++) {
		let old = array[i];
		array[i] = array[array.length - 1 - i];
		array[array.length - 1 - i] = old;
	}
	return array;
}

let arrayValue = [1, 2, 3, 4];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);