var reviews = [];

function addReview(gameplayScore, visualScore, storyScore, comment){
    reviews.push({
        "gameplayScore": gameplayScore,
        "visualScore": visualScore,
        "storyScore": storyScore,
        "scoreAverage": Math.floor((gameplayScore + visualScore + storyScore)/3),
        "comment": comment
    });
    console.log(reviews);
}


//It should have a function that averages total overallScore of reviews
function overallScore() {
    debugger;
    var overallScoresArray = []; 
    for(var i = 0; i < reviews.length; i++) {
       overallScoresArray.push(reviews[i].scoreAverage); 
       };
    function getSum(total, num) {
        return total + num;
    }
    var totalScores = overallScoresArray.reduce(getSum, 0);
    var overallScore = totalScores /reviews.length;
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
