
const summaryConsole = {

resultsScore      : 0,
resultsPercentage : 0,
reactionScore     : 0,
memoryScore       : 0,
verbalScore       : 0,
visualScore       : 0,    
submitButtonState : "unpressed",

    toggleButton: function(buttonStatus){
        this.submitButtonStatebuttonState = buttonStatus;
    }
}