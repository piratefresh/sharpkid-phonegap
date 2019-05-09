const finalScore = document.getElementById("finalScore");
let storage = window.localStorage;
const mostRecentScore = typeof (
  localStorage.getItem(mostRecentScore) !== "undefined"
)
  ? localStorage.getItem(mostRecentScore)
  : storage.getItem(key);

finalScore.innerText = mostRecentScore;
highScores = localStorage.JSON.parse(localStorage.getItem("highScores")) || [];
const MAX_HIGH_SCORES = 5;

saveHighScore = e => {
  const score = {
    score: mostRecentScore,
    name: UserName
  };
  highScores.push(score);

  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(5);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("/");
};
