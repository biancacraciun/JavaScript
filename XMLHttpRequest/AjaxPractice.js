
function request() {
    let requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
    let request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let myHeroesData = JSON.parse(this.responseText)

            const header = document.getElementsByTagName('header')[0];
            const createTitle = document.createElement('h1');
            createTitle.innerText = myHeroesData.squadName;
            header.appendChild(createTitle);

            const homeTown = document.createElement('p');
            homeTown.innerText = `Hometown: ${myHeroesData.homeTown} // Formed:${myHeroesData.formed}`;
            header.appendChild(homeTown);

            const section = document.getElementsByTagName('section')[0];
            const article1 = document.createElement('article'); // ARTICLE1

            const firstHeroName = document.createElement('h2'); // FIRST COLUMN
            firstHeroName.innerText = myHeroesData.members[0].name;
            article1.appendChild(firstHeroName);

            const firstSecretIdentity = document.createElement('p');
            firstSecretIdentity.innerText = `Secret Identity: ${myHeroesData.members[0].secretIdentity}`;
            article1.appendChild(firstSecretIdentity);

            const firstHeroAge = document.createElement('p');
            firstHeroAge.innerText = `Age: ${myHeroesData.members[0].age}`;
            article1.appendChild(firstHeroAge);

            const firstSuperpower = document.createElement('p');
            firstSuperpower.innerText = "Superpowes:";
            article1.appendChild(firstSuperpower);

            const firstList = document.createElement('ul');

            const superpower1 = document.createElement('li');
            superpower1.innerText = myHeroesData.members[0].powers[0];
            firstList.appendChild(superpower1);
            const superpower2 = document.createElement('li');
            superpower2.innerText = myHeroesData.members[0].powers[1];
            firstList.appendChild(superpower2);
            const superpower3 = document.createElement('li');
            superpower3.innerText = myHeroesData.members[0].powers[2];
            firstList.appendChild(superpower3);

            article1.appendChild(firstList);
            section.appendChild(article1); // ADD ARTICLE1 TO SECTION

            const article2 = document.createElement('article'); // ARTICLE2

            const secondHeroName = document.createElement('h2'); // SECOND COLUMN
            secondHeroName.innerText = myHeroesData.members[1].name;
            article2.appendChild(secondHeroName);

            const secondSecretIdentity = document.createElement('p');
            secondSecretIdentity.innerText = `Secret Identity: ${myHeroesData.members[1].secretIdentity}`;
            article2.appendChild(secondSecretIdentity);

            const secondHeroAge = document.createElement('p');
            secondHeroAge.innerText = `Age: ${myHeroesData.members[1].age}`;
            article2.appendChild(secondHeroAge);

            const secondSuperpower = document.createElement('p');
            secondSuperpower.innerText = "Superpowers:";
            article2.appendChild(secondSuperpower);

            const secondList = document.createElement('ul');

            const hero2Superpower1 = document.createElement('li');
            hero2Superpower1.innerText = myHeroesData.members[1].powers[0];
            secondList.appendChild(hero2Superpower1);

            const hero2Superpower2 = document.createElement('li');
            hero2Superpower2.innerText = myHeroesData.members[1].powers[1];
            secondList.appendChild(hero2Superpower2);

            const hero2Superpower3 = document.createElement('li');
            hero2Superpower3.innerText = myHeroesData.members[1].powers[2];
            secondList.appendChild(hero2Superpower3);

            article2.appendChild(secondList);
            section.appendChild(article2); // ADD ARTICLE2 TO SECTION

            const article3 = document.createElement('article'); // ARTICLE3

            const thirdHeroName = document.createElement('h2'); // THIRD COLUMN
            thirdHeroName.innerText = myHeroesData.members[2].name;
            article3.appendChild(thirdHeroName);

            const thirdSecretIdentity = document.createElement('p');
            thirdSecretIdentity.innerText = `Secret Identity: ${myHeroesData.members[2].secretIdentity}`;
            article3.appendChild(thirdSecretIdentity);

            const thirdHeroAge = document.createElement('p');
            thirdHeroAge.innerText = `Age: ${myHeroesData.members[2].age}`;
            article3.appendChild(thirdHeroAge);

            const thirdSuperpower = document.createElement('p');
            thirdSuperpower.innerText = "Superpowers:";
            article3.appendChild(thirdSuperpower);

            const thirdList = document.createElement('ul');

            const hero3Superpower1 = document.createElement('li');
            hero3Superpower1.innerText = myHeroesData.members[2].powers[0];
            thirdList.appendChild(hero3Superpower1);

            const hero3Superpower2 = document.createElement('li');
            hero3Superpower2.innerText = myHeroesData.members[2].powers[1];
            thirdList.appendChild(hero3Superpower2);

            const hero3Superpower3 = document.createElement('li');
            hero3Superpower3.innerText = myHeroesData.members[2].powers[2];
            thirdList.appendChild(hero3Superpower3);

            const hero3Superpower4 = document.createElement('li');
            hero3Superpower4.innerText = myHeroesData.members[2].powers[3];
            thirdList.appendChild(hero3Superpower4);

            const hero3Superpower5 = document.createElement('li');
            hero3Superpower5.innerText = myHeroesData.members[2].powers[4];
            thirdList.appendChild(hero3Superpower5);

            article3.appendChild(thirdList);
            section.appendChild(article3); // ADD ARTICLE3 TO SECTION
        }; 
    };
    request.open("GET", requestURL, true);
    request.send();
};

request()