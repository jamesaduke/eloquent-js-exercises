/* A function definition is a regular binding where the value of the binding is
a function. For example, this code defines square to refer to a function that
produces the square of a given number: */
const square = function(x){
    return x * x;
};

// console.log(square(12));

// Functions should have RETURN statement. Functions without return statements return "undefined".
// const power = function(base, exponent){
//     let result = 1;
//     for(let counter = 0; count < exponent; counter++){
//         result *= base;
//     }
//     return result;
// };

// NESTED SCOPE in functions
const humus = function(factor){
    const ingredient = function(amount, unit, name){
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1){
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`)
    };
    ingredient(1,"can", "chickpeas");
    ingredient(2,"tablespoon", "olive oil");
};
// console.log(humus(2));

// ARROW Functions
// const power = (base, exponent) =>{
//     for (let count = 0; count < exponent; count++) {
//         result *= base;
//     }
//     return result;
// };

// RECURSION functions - power fuhnctions
function power(base, exponent) {
    if(exponent == 0) {
        return 1;
    } else{
        return base * power(base, exponent-1);
    }
}

// another example 
function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        }else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history})+5`) ||
                   find(current * 3, `(${history}) * 3`);
        }
        
    }
    return find(1, "1");
}

console.log(findSolution(48));
