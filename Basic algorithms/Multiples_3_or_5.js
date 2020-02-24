// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5
// below the number passed in.


const solution = (number) => {
    
    let sum = 0;

    if (typeof number !== "number") {
        return "Only numerical values is accepted!"
    }

    for (i=0; i<number; i++) {
        if(i % 3 === 0 || i % 5 === 0 || i % 3 === 0 && i % 5 === 0) {
            sum += i;
        }
    }

    return sum;
}

solution(10); // 23