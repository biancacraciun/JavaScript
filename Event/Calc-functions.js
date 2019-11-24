// case 1
const squareInput = document.getElementById('square');

const squareResult = () => {
    const squareValue = squareInput.value;

    alert(squareValue * squareValue);
};

const squareButton = document.getElementById('squareButton');
squareButton.addEventListener('click', squareResult);
// BONUS
squareInput.addEventListener('keypress', squareResult);

// case 2
const halfInput = document.getElementById('half');

const halfResult = () => {
    const halfValue = halfInput.value;

    alert(halfValue / 2);
};

const halfButton = document.getElementById('halfButton');
halfButton.addEventListener('click', halfResult);
// BONUS
halfInput.addEventListener('keypress', halfResult);


// case 3
const percentInput = document.getElementById('percent');
const numberInput = document.getElementById('number');

const percentResult = () => {
    const percentValue = percentInput.value;
    const numberValue = numberInput.value;

    alert ((percentValue * numberValue) / 100);
};

const percentButton = document.getElementById('percentButton');
percentButton.addEventListener('click', percentResult);
// BONUS
numberInput.addEventListener('keypress', percentResult);

// case 4
const areaInput = document.getElementById('area');

const areaResult = () => {
    const radius = areaInput.value;

    alert(radius * radius * Math.PI);
};

const areaButton = document.getElementById('areaButton');
areaButton.addEventListener('click', areaResult);
// BONUS
areaInput.addEventListener('keypress', areaResult);