
//Store Rolls
var rollLib = [];

//Rolls 5 Dices
function rollDice() {

    var dice = " ";
    var i;

    for (i = 1; i < 6; i++) {
        var roll = Math.floor(Math.random() * 6) + 1;
        rollLib[i-1] = roll // - 1 makes sure the roll is stored in the right index
        dice += "You rolled " + roll + " on dice number " + i + "<br />"
        
    }
    console.table(rollLib);
    document.getElementById("rollDice").innerHTML = dice;    
}
/* To do:
Make Checkboxes that equals the indexnumber of the rollLib array
Set the them to false if checked and true if unchecked
Replace false with new rolls rollLib.pop command

Add above code to rollDice command

Add a counter for 2x reroll puporse - set to 1 ++ for each roll - when it reaches 3 remove roll dice button 

Use function to check the array for combinations

Make new array that stores total combinations - each combination should have a arrayindex number that turn to true if taken*/