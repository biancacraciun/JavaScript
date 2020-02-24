// Write an algorithm that takes an array and moves all of the zeros 
// to the end, preserving the order of the other elements.

const moveZeros = arr => {
    
    let notZero = [];
    let zeroArr = [];

    for (i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            notZero.push(arr[i]);
        } else {
            zeroArr.push(arr[i]);
        }
    };
    
    return [...notZero, ...zeroArr]
};

moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]);