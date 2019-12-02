const gimmeQuote = () => {
    const URL = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
    let quoteGenerator = new XMLHttpRequest();

    quoteGenerator.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let quote = JSON.parse(this.responseText)
            
            const appendQuote = () => {
                const quotePlace = document.getElementById('quote');
                quotePlace.innerText = quote[0];
            };

            const selectButton = document.getElementById('xhr');
            selectButton.addEventListener("click", appendQuote, false);
        };
    };
    quoteGenerator.open("GET", URL, true);
    quoteGenerator.send();
};

gimmeQuote()

const selectButton = document.getElementById('xhr');
selectButton.addEventListener("click", gimmeQuote, true);