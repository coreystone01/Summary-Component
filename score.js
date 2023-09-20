 export class Score {
    constructor(
        // params
        percentage,
        reactionScore,
        memoryScore,
        verbalScore,
        visualScore
    )
    {
        // define properties
        
        this.reactionScore = this.generateRandomScore();
        this.memoryScore = this.generateRandomScore();
        this.verbalScore = this.generateRandomScore();
        this.visualScore = this.generateRandomScore();
        this.percentage = this.calculateOverallScore();
    }

    // define methods
    generateRandomScore(){
        return Math.floor(Math.random() * 101);
    }

    calculatePerformancePercentage (){
        const performance = this.reactionScore + this.memoryScore + this.verbalScore + this.visualScore;
        return (performance / 465) * 100;
    }

    calculateOverallScore () {
        const score = this.reactionScore + this.memoryScore + this.verbalScore + this.visualScore;
        return (score / 400);
    }
    
}

// export default Score
// const score = new Score();