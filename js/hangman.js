var words = ["kolding", "skole", "webudvikling", "fest", "kodning"]
var word = words[Math.floor(Math.random() * words.length)]; //regne ud et index nummer mellem 0 - 5 fra words.
console.log(word)

/*for loopet skaber _ _ _ _ _ ud fra det index nummer der er blevet regnet ud.
eks. kolding vil være _ _ _ _ _ _ _ */
var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
  console.log(answerArray)
}

function loadFunction() {
  var underscore = document.getElementById("underscore");
  underscore.innerHTML = answerArray.join(" ");
}

function enter() {
  var guess = document.querySelector("#letter");
  if (guess.value < 10) {
    var error = document.querySelector("#error");
    error.innerHTML = "Please enter a letter";
    error.style.color = "red";
  }
  for (var j = 0; j < word.length; j++) {
    if (guess.value == word[j]) {
      answerArray[j] = guess.value;
      console.log("Hey you got it right");
    }
  }

}
