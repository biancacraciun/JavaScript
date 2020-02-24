const wave = str => {

    let array = [];

    for (i = 0; i <str.length; i++) {
        if (str[i] !== " ") {
            array.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1))
        }
    };

    return array;
}

wave("hello"); // ['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO']
wave("two words");