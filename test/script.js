function onload() { //når siden loader op
  var message = document.getElementById('message');
  message.innerHTML = "Hello Player! This is the Hangman Game";
}

function enterLetter() { // når jeg trykker på knappen
  var word = ["w", "e", "b", "u", "d", "v", "i", "k", "l", "i", "n", "g"];
  var text = document.getElementById('text');
  var one = document.getElementById('one');
  var two = document.getElementById('two');
  var three = document.getElementById('three');
  var four = document.getElementById('four');
  var five = document.getElementById('five');
  var six = document.getElementById('six');
  var seven = document.getElementById('seven');
  var eight = document.getElementById('eight');
  var nine = document.getElementById('nine');
  var ten = document.getElementById('ten');
  var elleven = document.getElementById('elleven');
  var twelve = document.getElementById('twelve');

  if (text.value == word[0]) {
    one.innerHTML = "W"
  } else if (text.value == word[1]) {
    two.innerHTML = "E"
  } else if (text.value == word[2]) {
    three.innerHTML = "B"
  } else if (text.value == word[3]) {
    four.innerHTML = "U"
  } else if (text.value == word[4]) {
    five.innerHTML = "D"
  } else if (text.value == word[5]) {
    six.innerHTML = "V"
  } else if (text.value == word[6]) {
    seven.innerHTML = "I"
    ten.innerHTML = "I"
  } else if (text.value == word[7]) {
    eight.innerHTML = "K"
  } else if (text.value == word[8]) {
    nine.innerHTML = "L"
  } else if (text.value == word[10]) {
    elleven.innerHTML = "N"
  } else if (text.value == word[11]) {
    twelve.innerHTML = "G"
  }
}
