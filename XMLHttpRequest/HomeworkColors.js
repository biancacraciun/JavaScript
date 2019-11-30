const colorsList = () => {
    let requestedColors = new XMLHttpRequest();

    requestedColors.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let colors = JSON.parse(this.responseText);

            const colorName = Object.keys(colors);
            const colorCode = Object.values(colors);

            const body = document.getElementsByTagName('body')[0];

            const bigList = document.createElement('section');
            body.appendChild(bigList);
            
            const title = document.createElement('h1');
            title.innerText = "Colors List";
            title.style.fontFamily = "Julius Sans One, sans-serif";
            bigList.appendChild(title);

            const colorsList = document.createElement('ul');
            bigList.appendChild(colorsList);
            
            for (let i = 0; i < colorName.length; i++) {
                const li = document.createElement('li');
                li.style.fontFamily = "Satisfy, cursive";

                const colorBox = document.createElement('div');
                colorBox.style.borderColor = colorCode[i];
                colorBox.style.backgroundColor = colorCode[i];

                li.innerText = colorName[i];
                li.appendChild(colorBox);
                colorsList.appendChild(li);
            }
        };
    };

    requestedColors.open("GET", "https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json", true);
    requestedColors.send();
};

colorsList();
