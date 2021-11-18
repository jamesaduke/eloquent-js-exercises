/* Write a function countBs that takes a string as its only argument and returns
a number that indicates how many uppercase “B” characters there are in the
string. */

function countBs(word){
    let count = 0;
    for (let i = 0; i < word.length; i++){
        if (word[i] === "B") {
            count += 1;
        }
        console.log(count);
    }

}

// console.log(countBs("BBB"));

/*  Next, write a function called countChar that behaves like countBs , except
it takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase “B” characters). Rewrite countBs to
make use of this new function. */

function countChars(word, letter){
    let countCharacters = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter){
            countCharacters += 1;
        }
    }
    console.log(countCharacters);
}

console.log(countChars("BBzz", "B"));