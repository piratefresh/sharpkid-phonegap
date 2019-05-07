const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice_text"));
var choiceStyle = Array.from(document.getElementsByClassName("choice_prefix"));
const menuButtons = Array.from(document.getElementsByClassName("menu-block"));
//console.log(choices);
let score = 0;
var category = null;
/*Fact Page Visual*/
var factVisual = document.getElementById("fact_visual");
var fact_box = document.getElementById("fact_box");

if (fact_box) {
  fact_box.addEventListener("click", factBox);
}

function factBox() {
  factVisual.style.opacity = 1;
}
/*Fact Page Visual*/

/*Category chosen, will save user choice in var "category" and I have put the API id there not sure what to do with it though lol*/
menuButtons.forEach(menuButton => {
  menuButton("click", e => {
    selectedButton = e.target;

    selectedButton.classList.add("animated", "slideOutUp");
  });
});
