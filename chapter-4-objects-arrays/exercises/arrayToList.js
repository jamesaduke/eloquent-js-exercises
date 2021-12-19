/* Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element. If you haven’t already, also write a recursive version of nth.

(Page 130).

(Page 129).


*/

function arrayToList(array){
	/* INPUT: list
    OUTPUT: array */
	let list = null;
	for (let i =array.length - 1; i >= 0; i--){
		list = {value: array[i], rest: list};
	}
	return list;
}

console.log(arrayToList([1,2,3]));

// Produces array from a list
function listToArray(list) {
	let array = [];
	for(; list !== null; list = list.rest){
		array.push(list.value);
	}
	return array;
}
console.log(listToArray(arrayToList([1,2,3])));

// Helper function that takes and element and a list and adds the element to the front of the input list

function prepend(element, list) {
	return {element, rest: list};
}

console.log(prepend(30, prepend(10, null)));

/* nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element. If you haven’t already, also write a recursive version of nth. */

function nth(list, number) {
	if (!list) return undefined;
	else if(number == 0) return list.value;
	else return nth(list.rest, number-1);
}

console.log(nth(arrayToList([1,22,3]),1));