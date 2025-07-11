/* Arrow Function */
const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}

const result = sum(1, 5)
console.log(result)

const square = p => p * p
console.log("Square of 4 is " + square(4))

/* Normal Function */
function product(a, b){
    return a * b
}
console.log("Product of 3 and 4 is " + product(3, 4))

/* Function Expression */
const average = function(a, b) {
    return (a + b) / 2
}
console.log("Average of 3 and 4 is " + average(3, 4))