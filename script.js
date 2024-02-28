import {Score} from "./score.js";

function updateSummaryValues(){
    const getScores = new Score();
    // grab all the summary__container__content from HTML
    const scoreContainers = document.querySelectorAll('.summary__container__content');

    // run through each summary__container__content container
    scoreContainers.forEach(container => {
        // call the generateRandomScore method from Score() class
        const scoreValue = getScores.generateRandomScore();

        // update the scoreValue HTML content
        container.textContent = `${scoreValue}`;
    });
}

// Now we add an event listener to our continue button that will run our updateSummaryValues function
const continueButton = document.querySelector('button');
continueButton.addEventListener('click', updateSummaryValues);