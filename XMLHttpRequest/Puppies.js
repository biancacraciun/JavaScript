const puppiesData = () => {
    const URL = "https://www.reddit.com/r/aww/search.json?q=cat&restrict_sr=trues";
    const puppiesRequest = new XMLHttpRequest();

    puppiesRequest.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            let puppiesData = JSON.parse(this.responseText);
            
            const addImg = () => {
                const imgPlace = document.getElementsByClassName('text')[0];

                const clearText = () => {
                    imgPlace.innerText = "";
                };

                document.getElementsByTagName('button')[0].onclick = clearText();

                for(i = 0; i < puppiesData.data.children.length; i++) {
                    const createImg = document.createElement('img');
                    createImg.src = puppiesData.data.children[i].data.thumbnail; // Puppies.js:27 Uncaught TypeError: Cannot read
                    // property 'data' of undefined at HTMLButtonElement.addImg (Puppies.js:27), dar totusi imi afiseaza
                    imgPlace.appendChild(createImg);
                };
            };
            
            addImg()
            // const button = document.getElementsByClassName('btn')[0];
            // button.addEventListener('click', addImg, true)
            // console.log(puppiesData)
        };
    };
    
    puppiesRequest.open("GET", URL, true);
    puppiesRequest.send();
};



const button = document.getElementsByClassName('btn')[0];
button.addEventListener("click", puppiesData, true);