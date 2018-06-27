var reviews = [];

function addReview(gameplayScore, visualScore, storyScore, comment){
    reviews.push({
        "gameplayScore": gameplayScore,
        "visualScore": visualScore,
        "storyScore": storyScore,
        "overallScore": Math.floor((gameplayScore + visualScore + storyScore)/3),
        "comment": comment
    });
    console.log(reviews);
}


//It should have a function that averages total overallScore    
    function averageScores(reviewPosition) {
        var gameplayScoreValue = reviews[reviewPosition].gameplayScore;
        var visualScoreValue = reviews[reviewPosition].visualScore;
        var storyScoreValue = reviews[reviewPosition].storyScore;
        var totalScore = gameplayScoreValue + visualScoreValue + storyScoreValue;

        var overallScore = Math.floor(totalScore /3);
        return overallScore;
    }
//It should have a function to edit a review
    //need to access review index and individual review property and then property keys value.
        function editReview(reviewPosition, newGameplayScore, newVisualScore, newStoryScore, newCommentText){
            reviews[reviewPosition].gameplayScore = newGameplayScore;
            reviews[reviewPosition].visualScore = newVisualScore;
            reviews[reviewPosition].storyScore = newStoryScore;
            reviews[reviewPosition].comment = newCommentText;
            console.log(reviews);
        }

// It should have a function to remove a review
