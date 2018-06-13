var reviews = [];

function addReview(gameplayScore, visualScore, storyScore, overallScore, comment){
    reviews.push({
        "gameplayScore": gameplayScore,
        "visualScore": visualScore,
        "storyScore": storyScore,
        "overallScore": overallScore,
        "comment": comment
    })
}