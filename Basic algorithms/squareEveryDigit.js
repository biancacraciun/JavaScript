// You are asked to square every digit of a number.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

function squareDigits(num){

    let numStr = num.toString();
    let result = "";
    for (i = 0; i < numStr.length; i++) {
        result += numStr[i] * numStr[i];
    };

    return parseInt(result);
};

squareDigits(1997) // 1818149