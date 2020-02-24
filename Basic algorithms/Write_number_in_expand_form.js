const expandedForm = (num) => {

    if (typeof num !== "number") {
        return "Try w/ a numerical value!";
    };

    if (num < 0) {
        return "All numbers will be whole numbers greater than 0!";
    };

    let string_number = num.toString();
    const array = [];
    const multiplier = 1;

    for (let i = 1; i <= string_number.length; i++) {
        const digit = string_number[string_number.length - i];
        digit > 0 && equation.unshift(digit * multiplier);

        multiplier *= 10;
    }

    return equation.join(" + ");
};

expandedForm(12); // '10 + 2'
expandedForm(42); // '40 + 2'
expandedForm(70304); // '7000 + 300 + 4'