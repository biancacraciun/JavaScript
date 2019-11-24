const firstInput = document.getElementById('name');
const secondInput = document.getElementById('adjectiv');
const thirdInput = document.getElementById('random-word');

// 2)
// Adaugati un event listener pentru buton care apeleaza o functie
// postTheGossip cand este apasat
const buttonTarget = document.getElementById('exButton');
const postTheGossip = () => {
    const firstValueInput = firstInput.value;
    alert(firstValueInput);
};

buttonTarget.addEventListener('click', postTheGossip);

// const buttonTarget = document.getElementById('exButton');
// buttonTarget.addEventListener('click', postTheGossip);

// 3)
// In aceasta functie luati toate valorile fieldurilor si faceti un story din ele
// ex "Xulescu este innebunit dupa bere neagra"

const createStory = () => {
    const firstValueInput = firstInput.value;
    const secondValueInput = secondInput.value;
    const thirdValueInput = thirdInput.value;

    const story = document.getElementById('story');
    story.innerHTML = `${firstValueInput} ${secondValueInput} ${thirdValueInput} `;
};

buttonTarget.addEventListener('click', createStory);