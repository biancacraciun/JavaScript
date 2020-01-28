// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.
// Zero isn't an odd number and you don't need to move it. 
// If you have an empty array, you need to return it.

function sortArray(array) {
    let oddArr = [];
    let evenArr = [];
    let sorted = [];
  
    for (i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        evenArr.push(array[i]);
      } else {
        oddArr.push(array[i]);
      }
    }
    
    oddArr.sort((a, b) => a - b )
    
    for (i = 0; i < array.length; i++) {
      if(array[i] % 2 === 0) {
        sorted.push(evenArr.shift());
      } else {
        sorted.push(oddArr.shift());
      }
    }
    
    return sorted;
}

//  or

const sortArray = (array) => {
    const oddNr = array.filter(odd => odd % 2).sort((a, b) => a - b );
    return array.map(x => {
      if (x % 2) {
        return oddNr.shift();
      } else {
        return x;
      }
    })
}