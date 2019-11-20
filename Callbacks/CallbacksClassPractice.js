// acum se printeaza in consola '1' '2' '3' '4' '5' .
// Vrem sa fie ordinea '3' '5' '2' '1' '4'
//hint setTimeout

const func1 = () => {
    setTimeout ( function () {
        console.log('1');
    }, 400 );
}
  
const func2 = () => {
    setTimeout ( function () {
        console.log('2');
    }, 300 );
}
  
const func3 = () => {
    setTimeout ( function () { 
      console.log('3');
    }, 100 );
}
  
const func4 = () => { 
    setTimeout ( function () {
      console.log('4');
    }, 500 );
}
  
const func5 = () => {
    setTimeout ( function () {
      console.log('5');
      }, 200 );
}

func1();
func2();
func3();
func4();
func5();

/*
1. Write a function that accepts 3 params(1 - array, 2 - function, 3 - function). 
- first param defines an array of items: ex: an array of rooms:  ['bedroom', 'bathroom', 'lounge']
- second param defines an action that has to be executed for each item - 
// ex: I want to clean the house,I want to display in console 'I cleaned x', 'I cleaned y', 'I cleaned z', for each room
- third param defines an action that has to be executed at the end, when I finished doing the action for each item - 
// ex: I want to print 'yey, now I can drink and play games!'
*/
const firstFn = value => console.log(value)
const secondFn = () => console.log("yey, now I can drink and play games!")

function doSomething (arr, firstAction, secondAction) {
    for (i = 0; i< arr.length; i++) {
        const toDisplay = `I cleaned ${arr[i]}`;
        firstAction(toDisplay)
    };

    secondAction()
}

doSomething(['bedroom', 'bathroom', 'lounge'], firstFn, secondFn)

// 2
function customMap(array, mycallback) {
	var arr = [];
	for(var index in array){
		arr.push(mycallback(array[index]));
	}
	return arr;
}

var randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const square = a => a*a;
console.log(customMap(randomArray, square));

const double = a => a*2;
console.log(customMap(randomArray, double));

const increment = a => ++a;
console.log(customMap(randomArray, increment));


console.log(customMap(randomArray, increment));  // Implement the function named print so that thos console.log would display the result [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ] in the console
console.log(myMap(randomArray, double));  // Implement the function named double so that thos console.log would display the result [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]
console.log(myMap(randomArray, square));  // Implement the function named square so that thos console.log would display the result [ 1, 4, 9, 16, 25, 36, 49, 64, 81 ]

// Now translate the upper function to ES6 syntax

/*`
// 3. This function will go over every element in an array one by one, calling the
// callback with each item, adding the element to a new array only if
// the callback returns true, and finally returning the new array.
var filter = function(____, ____) {
  var filteredArray = [];
  for (var ____ = ____; ____ < ____.____; ____++) {
    var ____ = ____[____];
    if (____(____)) {
      filteredArray.push(____);
    }
  }
  return filteredArray;
};

Call the filter function in 5 different cases 
( 5 different filtering functions - example: filters the odd items, filter the items which are divisible by 3, etc... )

Now translate the upper function to ES6 syntax
*/

var filter = function(arr, conditionalFn) {

  var filteredArray = [];
  for (var i = 0; i < arr.length; i++) {
    var value= arr[i];
    if (conditionalFn(value)) {
      filteredArray.push(value);
    };
  };
  return filteredArray;
};

let randomArr = [1, 2, 5, 7, 8, 10, 9, 11, 14]

const odd = n => (n % 2 === 0);
console.log(filter(randomArr, odd));

const divisible = n => (n % 3 === 0);
console.log(filter(randomArr, divisible));

const even = n => (n % 2 !== 0);
console.log(filter(randomArr, even));

const square = n => (Math.sqrt(n) % 1 === 0);
console.log(filter(randomArr, square));

const integer = n => Number.isInteger(n);
console.log(filter(randomArr, integer));

/*
4. Write a function named multipleCallbacks that accepts 3 arguments:
  - an object containing a key name status that can have 2 different values: success or error
  - a function that should be called if the value of the status key is success
  - a function that should be called if the value of the status key is error

The function should be written directly into ES6 specific syntax
*/
const successCase = () => console.log("Success!!");
const errorCase = () => console.log("Error!!");

const multipleCallbacks = (object, successCase, errorCase) => {
  if (object.status === 'success') {
    return successCase();
  } else if (object.status === 'error') {
    return errorCase();
  } else {
    return "TRY AGAIN!";
  };
};

multipleCallbacks ({ status: 'success' }, successCase, errorCase);
multipleCallbacks ({ status: 'error' }, successCase, errorCase);

// const object = {
//   status: ["success", "error"],
// };

// const successCase = () => console.log("Success!!");
// const errorCase = () => console.log("Error!!");

// const multipleCallbacks = (object, fn1, fn2) => {
//   if (object.status[0]) {
//     return successCase();
//   } else if (object.status[1]) {
//     return errorCase();
//   } else {
//     return "Try again!"
//   };
// };

// multipleCallbacks ({ status: 'success' }, successCase, errorCase); // Success!!
// multipleCallbacks ({ status: 'error' }, successCase, errorCase); // Success!!

// 5
/*
-- FAKE DATA FETCHER --

const simulateServerCall = (url, params) {
	console.log(`Fetching data for ${params.userId} from: `, url);
	setTimeout(() => {
    console.log('Server responded with success');
    const fakeData = {
      numberOfEmployees: 4,
      employees: [
      	{
        	name: 'Employee1',
          age: 33,
          title: 'Developer',
        },
        {
        	name: 'Employee2',
          age: 28,
          title: 'Manager',
        },
        {
        	name: 'Employee3',
          age: 32,
          title: 'Tester',
        },
        {
        	name: 'Employe4',
          age: 31,
          title: 'Developer',
        },
      ]
   };
   // now what ?
  });
};

const fetchDataFor = userId => {
  simulateServerCall('https://server.com/employee', { userId: userId });
};

Adjust the upper functions so that a callback that filters the employees if they have a developer role
is executed within the setTimeout that simulates a request to the server; The callback should be implemented by you
and should print on the browser's console only the employees that are developers; 
Requirement: reuse the filtering function that you have already implemented
*/

const simulateServerCall = (url, params) {
	console.log(`Fetching data for ${params.userId} from: `, url);
	setTimeout(() => {
    console.log('Server responded with success');
    const fakeData = {
      numberOfEmployees: 4,
      employees: [
      	{
        	name: 'Employee1',
          age: 33,
          title: 'Developer',
        },
        {
        	name: 'Employee2',
          age: 28,
          title: 'Manager',
        },
        {
        	name: 'Employee3',
          age: 32,
          title: 'Tester',
        },
        {
        	name: 'Employe4',
          age: 31,
          title: 'Developer',
        },
      ]
   };
   // now what ?
  });
};

const fetchDataFor = userId => {
  simulateServerCall('https://server.com/employee', { userId: userId });
};

// 6.
/*
Read about setInterval here: https://www.w3schools.com/jsref/met_win_setinterval.asp
Using setInterval, implement a function called theFinalCountdown that accepts as a parameter a numeric value and counts down until 0 every 1s.
The countdown will be displayed in the console.
Ex:
theFinalCountdown(10); call will display:

10
(...after 1s)
9
(...after 1s)
8
(...after 1s)
7
...
...
0 

and then stops
*/

// nu se opreste
const theFinalCountdown = (number) => {
  setInterval(function () {
    console.log(number);
    number--;
    if(number === 0) {
      clearInterval(theFinalCountdown);
    };
  }, 1000)
};

theFinalCountdown(10)

let number = 10
const theFinalCountdown = setInterval(function () {
    console.log(number);
    number--;
    if(number === -1) {
      clearInterval(theFinalCountdown);
    };
}, 1000);



