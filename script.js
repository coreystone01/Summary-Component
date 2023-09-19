
// const summaryConsole = {

// resultsScore      : 0,
// resultsPercentage : 0,
// reactionScore     : 0,
// memoryScore       : 0,
// verbalScore       : 0,
// visualScore       : 0,    
// submitButtonState : "unpressed",

//     toggleButton: function(buttonStatus){
//         this.submitButtonStatebuttonState = buttonStatus;
//     }
// }

import Score from "./score";

function updateSummaryValues(){
    const getScores = new Score();
    // grab all the summary__container__content from HTML
    const scoreContainers = document.querySelectorAll('.summary__container__content');

    // run through each summary__container__content container
    scoreContainers.forEach(container => {
        // call our divs and their name attributes
        const divName = container.getAttribute('name');
        // call the generateRandomScore method from Score() class
        const scoreValue = getScores.generateRandomScore();

        // make a call to our summary__container_content classes and we're going to update their HTML content
        const elementValue = container.querySelector('.summary__container__content')
        elementValue.textContent = '${scoreValue}';
    });
}

// Now we add an event listener to our continue button that will run our updateSummaryValues function
const contineButton = document.querySelector('button');
contineButton.addEventListener('click', updateSummaryValues);