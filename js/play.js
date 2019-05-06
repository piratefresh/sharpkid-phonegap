const question =  document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice_text"));
var choiceStyle = Array.from(document.getElementsByClassName("choice_prefix"));
//console.log(choices);
let score = 0;
var category = null;
/*Fact Page Visual*/
var factVisual = document.getElementById("fact_visual");
var fact_box = document.getElementById("fact_box");

if(fact_box){
  fact_box.addEventListener("click", factBox);
}

function factBox() {
  factVisual.style.opacity = 1;
}
/*Fact Page Visual*/

/*Category chosen, will save user choice in var "category" and I have put the API id there not sure what to do with it though lol*/
document.addEventListener('click', function (event) {
	if (event.target.matches('.menu-block')) {
		if (event.target.matches('#science')){
      cateogry = "science";
      event.target.style.animation = "3s slideout forwards";
      setTimeout(function(){
        window.location = 'quiz.html';
        /*Use https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple */
      }, 1000);
    }
    if (event.target.matches('#history')){
      category = "history";
      event.target.style.animation = "3s slideout forwards";
      setTimeout(function(){
        window.location = 'quiz.html';
        /*Use  https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple */
      }, 1000);
    }
    if (event.target.matches('#entertainment')){
      category = "entertainment";
      event.target.style.animation = "3s slideout forwards";
      setTimeout(function(){
        window.location = 'quiz.html';
        /*Use https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple */
      }, 1000);
    }
    if (event.target.matches('#geography')){
      category = "geography";
      event.target.style.animation = "3s slideout forwards";
      setTimeout(function(){
        window.location = 'quiz.html';
        /*Use https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple */
      }, 1000);
    }
	}
}, false);