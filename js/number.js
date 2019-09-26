//Calculates the number that the user has to guess
let theNumber = Math.floor(Math.random() * 1000 + 1);


//Admin mode - Put the line below into a comment after use
function adminMode() {
    var admin = document.getElementById("adminMode");
    admin.innerHTML = "The number is: " + theNumber;
}
function guessNumber() {
    var info = document.getElementById("info");
    var guess = document.getElementById("guess");

    if (guess.value == theNumber) {
        info.innerHTML = "Your guess " + guess.value + " - The right number is " + theNumber + " Congratulations you win";
    } else if (guess.value < theNumber) {
        info.innerHTML = "Your guess " + guess.value + " is lower than the number";
    } else if (guess.value > theNumber) {
        info.innerHTML = "Your guess " + guess.value + " is higher than the number";
    } else {
        info.innerHTML = guess.value + " isn't a number";
    }

}

//Cookies
// document.cookie="name=player1; expires=Mon, 23 Dec 2019 12:30:00 UTC; path/";

