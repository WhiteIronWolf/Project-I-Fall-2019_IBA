//hide checkboxes
document.getElementById("checkboxes").style.visibility = "hidden";
var turn = 0
var roll = [0, 0, 0, 0, 0]; //Store Rolls
var checkboxes = [false, false, false, false, false]; //Checkboxes


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
    document.getElementById("rollDice").innerHTML = "|    " + getRollValues().join("    |    ") + "    |";

    console.table(getRollValues()); // Create a table for overview of rolls and their index number
    console.log("Turn " + turn); // Check What turn user is rolling

    console.log("Die 1 was put on hold " + checkboxes[0]); //Check if Value is set to true or false
    console.log("Die 2 was put on hold " + checkboxes[1]);
    console.log("Die 3 was put on hold " + checkboxes[2]);
    console.log("Die 4 was put on hold " + checkboxes[3]);
    console.log("Die 5 was put on hold " + checkboxes[4]);
    if (turn < 2) {
    } else {
        document.getElementById("checkboxes").style.visibility = "hidden";
        document.getElementById("rollButton").style.visibility = "hidden";
    }
        
    turn++;
} 


// :::::::::::::::::::::::::ANALYZE THIS PART:::::::::::::::::::::::
// Returns an int[7] containing the frequency of face values.
// Frequency at index v is the number of dice with the face value v, 1 <= v
// <= 6.
// Index 0 is not used.
function calcCounts() {
    var diceCounts = [0, 0, 0, 0, 0, 0, 0];

    for (var i = 0; i < roll.length; i++) {
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
        if (diceCounts[i] >= 2) {
            onePair = i * 2;
        }
    }
    //return onePair
    console.log("The sum of one pair is " + onePair);
    document.getElementById("onePairSum").innerHTML = "The Sum of one pair is " + onePair;
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//Two Pair
function twoPairsSum() {
    var diceCounts = calcCounts();
    var pair = 0;
    var twoPairs = 0;

    for (var i = 1; i < diceCounts.length; i++) {
        if (diceCounts[i] >= 2) {
            pair += i * 2;
            twoPairs++;
        }
    }

    //Validates if there is two pairs, else returns 0
    if (twoPairs === 2) {
        //return pair;
        console.log("The sum of two pairs is " + pair);
        document.getElementById("twoPairsSum").innerHTML = "The Sum of two pairs is " + pair;
    } else {
        //return 0;
        console.log("The sum of two pairs is 0");
        document.getElementById("twoPairsSum").innerHTML = "The Sum of two pairs is 0";
    }
}

//Three Even
function threeEvenSum() {
    var diceCounts = calcCounts();
    var threeEven = 0;
 
    for(var i = 1; i<diceCounts.length; i++)
    {
        if(diceCounts[i]>=3)
        {
            threeEven=i*3;
        }
    }
    //return threeEven;
    console.log("The sum of three even is " + threeEven);
    document.getElementById("threeEvenSum").innerHTML = "The Sum of three even is " + threeEven;
}
//Four Even
function fourEvenSum() {
    var diceCounts = calcCounts();
    var fourEven = 0;
 
    for(var i = 1; i<diceCounts.length; i++)
    {
        if(diceCounts[i]>=4)
        {
            fourEven=i*4;
        }
    }
    //return fourPoints;
    console.log("The sum of four even is " + fourEven);
    document.getElementById("fourEvenSum").innerHTML = "The Sum of four even is " + fourEven;
}

//Full House
    function fullHouseSum() {
        var diceCounts = calcCounts();
        var three = 0;
        var threeCounter = 0;
        var two = 0;
        var twoCounter = 0;
        
        for(var i = 1; i<diceCounts.length; i++)
        {
            if(diceCounts[i]===3)
            {
                three=i*3;
                threeCounter++;
            }
            else if (diceCounts[i]===2)
            {
                two=i*2;
                twoCounter++;
            }
        }
        if (twoCounter===1 && threeCounter===1)
        {
            //return two+three;
            console.log("The sum of full house is " + parseInt(two + three));
            document.getElementById("fullHouseSum").innerHTML = "The Sum of full house is " + parseInt(two + three);
        }
        else {
            //return 0;
            console.log("The sum of full house is 0");
            document.getElementById("fullHouseSum").innerHTML = "The Sum of full house is 0";
        }
    
    }

//Small Straight
//Large Straight

//Chance
function chanceSum() {

    var points = 0;

    for (var i = 0; i < roll.length; i++) {
        points = points + roll[i]
    }
    //return points;
    console.log("sum of chance is " + points);
    document.getElementById("chanceSum").innerHTML = "The Sum of Chance is " + points;
}

//Yatzy


/* To do:
IN PROCESS - Make Checkboxes that equals the indexnumber of the rollLib array
             Set the them to false if checked and true if unchecked

DONE -       Add above code to rollDice command

DONE -       Add a counter for 2x reroll puporse - set to 1 ++ for each roll - when it reaches 3 remove roll dice button

MISSING -    Make new array that stores total combinations - each combination should have a arrayindex number that turn to true if taken

IN PROCESS - Use function to check the array for combinations
*/