// Program that calculates 2 ^10 to demonstrate a WHILE LOOP
let result = 1;
let counter = 0;

while (counter < 10) {
    result = result * 2;
    counter++;
}

console.log(result);

// DO LOOP

let yourName;
do {
    yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);


// Program that calculates 2 ^10 to demonstrate a FOR LOOP

let result = 1;
for(let counter = 0; counter < 10; counter++) {
    result = result * 2;
}

console.log(result);