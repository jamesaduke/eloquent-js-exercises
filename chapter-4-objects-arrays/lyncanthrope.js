/* Jacques is trying to find a correlation for why he is turning into a squirrel. He is logging the events and trying to find the correlation for each of the events
 */

import JOURNAL from "./journal.js";

import "./journal.js";

let journal = [];

function addEntry(events, squirrel) {
	journal.push({events, squirrel});
}

/* function that computes a correlation coeffcient of a four element array */

function phi(table) {
	return(table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) * (table[1] + table[3]) * (table[0] + table[2]));
}
console.log(phi([76, 9, 4, 1]));

// extract two by two table for specific event on the journal

function tableFor(event, journal) {
	let table = [0, 0, 0, 0];
	for (let i = 0; i < journal.length; i++) {
		let entry = journal[i], index = 0;
		if (entry.events.includes(event)) index += 1;
		if (entry.squirrel) index += 2;
		table[index] += 1;
	}
	return table;
}
console.log(tableFor("pizza", JOURNAL));

// Find every type of event in the journal

function journalEvents(journal) {
	let events = [];
	for (let entry of journal) {
		for (let event of entry.events) {
			if (!events.includes(event)) events.push(event);
		}
	}
	return events;
}
console.log(journalEvents(JOURNAL));

// SEE CORRELATION FOR EACH EVENT

for (let event of journalEvents(JOURNAL)) {
	let correlation = phi(tableFor(event, JOURNAL));
	if (correlation > 0.1 || correlation < -0.1){
		console.log(event + ":", correlation)
	}
}

// check what happens when the Jazques takes peanuts and does not brush his teeth

for (let entry of JOURNAL){
	if (entry.events.includes("peanuts") && !entry.events.includes("brushed teeth")){
		entry.events.push("peanut teeth");
	}
}
console.log(phi(tableFor("peanut teeth", JOURNAL)));
