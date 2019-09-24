
//hide checkboxes
document.getElementById("checkboxes").style.visibility = "hidden";

var turn = 0 //turn counter
var roll = [0,0,0,0,0]; //Store Rolls
var checkboxes = [false,false,false,false,false]; //Checkboxes


/* function setValues(rollArray){
    if(!Array.isArray(roll)){
        console.log("This is not an array");
    }
    else{
        roll = rollArray;
    } 
}*/

function getRollValues() {
    return roll;
}

//Rolls 5 Dices
function rollDice() {

    //Hold die/dices
    checkboxes[0] = document.getElementById("checkbox1").checked;
    checkboxes[1] = document.getElementById("checkbox2").checked;
    checkboxes[2] = document.getElementById("checkbox3").checked;
    checkboxes[3] = document.getElementById("checkbox4").checked;
    checkboxes[4] = document.getElementById("checkbox5").checked;
    
    for (var i = 0; i < roll.length; i++) {

        if (checkboxes[i] === false) {
            roll[i] = Math.floor((Math.random() * 6) + 1);
        }
              
    }

    document.getElementById("checkboxes").style.visibility = "visible";
    document.getElementById("rollDice").innerHTML = getRollValues();
    
    console.table(getRollValues()); // Create a table for overview of rolls and their index number
    
    turn++;
    console.log("Turn " + turn); // Check What turn user is rolling

    console.log(checkboxes[1]); //Check if Value is set to true or false
    console.log(checkboxes[2]);
    console.log(checkboxes[3]);
    console.log(checkboxes[4]);
    console.log(checkboxes[5]);
    
}

// :::::::::::::::::::::::::ANALYZE THIS PART:::::::::::::::::::::::
// Returns an int[7] containing the frequency of face values.
// Frequency at index v is the number of dice with the face value v, 1 <= v
// <= 6.
// Index 0 is not used.
function calcCounts() {
    var diceCounts = [0,0,0,0,0,0,0];
 
    for(var i = 0; i<roll.length; i++)
    {
        var throws = roll[i];
        diceCounts[throws]++;
    }
    return diceCounts;
}


//One Pair
function onePairSum() {

    var diceCounts = calcCounts()
    var onePair = 0;

    for (var i = 1; i < diceCounts.length; i++) {
        if (diceCounts[i]>=2) {
            onePair = i*2;
        }
    }
    //return onePair
    console.log("sum of one pair is " + onePair);
    document.getElementById("onePairSum").innerHTML = "The Sum of one pair is " + onePair;
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//Two Pair
//Three Even
//Four Even
//Full House
//Small Straight
//Large Straight

//Chance
function chanceSum() {
    
    var points = 0;

    for (var i = 0; i < roll.length; i++) {
        points = points + roll[i]
    }
    console.log("sum of chance is " + points);
    document.getElementById("chanceSum").innerHTML = "The Sum of Chance is " + points;
}

//Yatzy






/* To do:
IN PROCESS - Make Checkboxes that equals the indexnumber of the rollLib array
             Set the them to false if checked and true if unchecked
             
DONE -       Add above code to rollDice command

IN PROCESS - Add a counter for 2x reroll puporse - set to 1 ++ for each roll - when it reaches 3 remove roll dice button 

MISSING -    Make new array that stores total combinations - each combination should have a arrayindex number that turn to true if taken

IN PROCESS - Use function to check the array for combinations
*/