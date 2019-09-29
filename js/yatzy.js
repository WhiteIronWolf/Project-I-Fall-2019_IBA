//hide checkboxes
document.getElementById("checkboxes").style.visibility = "hidden";
document.getElementById("upperScoreSection").style.visibility = "hidden";
document.getElementById("lowerScoreSection").style.visibility = "hidden";
var turn = 0
var roll = [0, 0, 0, 0, 0]; //Store Rolls
var checkboxes = [false, false, false, false, false]; //Checkboxes


//Store dice rolls in a function
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

    document.getElementById("upperScoreSection").style.visibility = "visible";
    document.getElementById("lowerScoreSection").style.visibility = "visible";
    consoleLog();

    if (turn < 2) {} else {
        document.getElementById("checkboxes").style.visibility = "hidden";
        document.getElementById("rollButton").style.visibility = "hidden";
        
        //Shows possible points for each combination
        document.getElementById("upperScoreSection").style.visibility = "visible";
        document.getElementById("lowerScoreSection").style.visibility = "visible";
        consoleLog();
        //document.getElementById("ScoreSum").innerHTML = getResults().join(" | ");
    }
    turn++;
}


// :::::::::::::::::::::::::ANALYZE THIS PART:::::::::::::::::::::::
function getResults() {

    var results = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (var i = 0; i <= 5; i++) {
        results[i] = this.sameRollSum(i + 1);
    }
    results[6] = this.onePairSum();
    results[7] = this.twoPairsSum();
    results[8] = this.threeEvenSum();
    results[9] = this.fourEvenSum();
    results[10] = this.fullHouseSum();
    results[11] = this.smallStraightSum();
    results[12] = this.largeStraightSum();
    results[13] = this.chanceSum();
    results[14] = this.yatzySum();

    return results;
}


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

/**
 * Returns same-value points for the given face value. Returns 0, if no dice
 * has the given face value. Requires: 1 <= value <= 6;
 */
function sameRollSum(intValue) {
    var same = 0;

    for (var i = 0; i < roll.length; i++) {
        if (roll[i] === intValue) {
            same = same + roll[i];
        }
    }
    return same;
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//One Pair
function onePairSum() {

    var diceCounts = calcCounts()
    var onePair = 0;

    for (var i = 1; i < diceCounts.length; i++) {
        if (diceCounts[i] >= 2) {
            onePair = i * 2;
        }
    }
    return onePair
    //console.log("The sum of one pair is " + onePair);
}

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
        return pair;
        //console.log("The sum of two pairs is " + pair);
    } else {
        return 0;
        //console.log("The sum of two pairs is 0");
    }
}

//Three Even
function threeEvenSum() {
    var diceCounts = calcCounts();
    var threeEven = 0;

    for (var i = 1; i < diceCounts.length; i++) {
        if (diceCounts[i] >= 3) {
            threeEven = i * 3;
        }
    }
    return threeEven;
    //console.log("The sum of three even is " + threeEven);
}
//Four Even
function fourEvenSum() {
    var diceCounts = calcCounts();
    var fourEven = 0;

    for (var i = 1; i < diceCounts.length; i++) {
        if (diceCounts[i] >= 4) {
            fourEven = i * 4;
        }
    }
    return fourEven;
    //console.log("The sum of four even is " + fourEven);
}

//Full House
function fullHouseSum() {
    var diceCounts = calcCounts();
    var three = 0;
    var threeCounter = 0;
    var two = 0;
    var twoCounter = 0;

    for (var i = 1; i < diceCounts.length; i++) {
        if (diceCounts[i] === 3) {
            three = i * 3;
            threeCounter++;
        } else if (diceCounts[i] === 2) {
            two = i * 2;
            twoCounter++;
        }
    }
    if (twoCounter === 1 && threeCounter === 1) {
        return two + three;
        //console.log("The sum of full house is " + parseInt(two + three));
    } else {
        return 0;
        //console.log("The sum of full house is 0");
    }

}

//Small Straight
function smallStraightSum() {
    var diceCounts = calcCounts();
    var smallStraight = 0;
    var counter = 0;
 
 
    for(var i = 1; i<=5; i++)
    {
        if(diceCounts[i]===1)
        {
            counter++;
        }
 
    }
    if (counter===5)
    {
        smallStraight = 15;
    }
    return smallStraight;
}

//Large Straight
function largeStraightSum() {
    var diceCounts = calcCounts();
    var largeStraight = 0;
    var counter = 0;


    for(var i = 2; i<diceCounts.length; i++)
    {
        if(diceCounts[i]===1)
        {
            counter++;
        }

    }
    if (counter===5)
    {
        largeStraight = 20;
    }
    return largeStraight;
}

//Chance
function chanceSum() {

    var points = 0;

    for (var i = 0; i < roll.length; i++) {
        points = points + roll[i]
    }
    return points;
    //console.log("sum of chance is " + points);
}

//Yatzy
function yatzySum() {
    var diceCounts = calcCounts();
    var yatzy = 0;

    for(var i = 1; i<diceCounts.length; i++)
    {
        if(diceCounts[i]>=5)
        {
            yatzy=i*5;
        }
    }
    if(yatzy!==0)
    {
        return 50;
    }
    else
        return 0;
}

function consoleLog() {
    console.log(roll);
    console.log("Count of each number rolled = " + calcCounts());
    
    //Upper Section Score
    console.log("Same value points = " + sameRollSum(1));
    document.getElementById("sameRollSumOne").innerHTML = "The Sum of 1's is " + sameRollSum(1);

    console.log("Same value points = " + sameRollSum(2));
    document.getElementById("sameRollSumTwo").innerHTML = "The Sum of 2's is " + sameRollSum(2);

    console.log("Same value points = " + sameRollSum(3));
    document.getElementById("sameRollSumThree").innerHTML = "The Sum of 3's is " + sameRollSum(3);

    console.log("Same value points = " + sameRollSum(4));
    document.getElementById("sameRollSumFour").innerHTML = "The Sum of 4's is " + sameRollSum(4);

    console.log("Same value points = " + sameRollSum(5));
    document.getElementById("sameRollSumFive").innerHTML = "The Sum of 5's is " + sameRollSum(5);

    console.log("Same value points = " + sameRollSum(6));
    document.getElementById("sameRollSumSix").innerHTML = "The Sum of 6's is " + sameRollSum(6);
    
    //Lower Section Score
    console.log("One pair points = " + onePairSum());
    document.getElementById("onePairSum").innerHTML = "The Sum of One pair is " + onePairSum();
    
    console.log("Two pair points = " + twoPairsSum());
    document.getElementById("twoPairsSum").innerHTML = "The Sum of Two pairs is " + twoPairsSum();
    
    console.log("Three same points = " + threeEvenSum());
    document.getElementById("threeEvenSum").innerHTML = "The Sum of Three even is " + threeEvenSum();
    
    console.log("Four same points = " + fourEvenSum());
    document.getElementById("fourEvenSum").innerHTML = "The Sum of Four even is " + fourEvenSum();
    
    console.log("Full house points = " + fullHouseSum());
    document.getElementById("fullHouseSum").innerHTML = "The Sum of Full house is " + fullHouseSum();
    
    console.log("Small Straight points = "+smallStraightSum());
    document.getElementById("smallStraightSum").innerHTML = "The Sum of Small straight is " + smallStraightSum();
    
    console.log("Large straight point = "+ largeStraightSum());
    document.getElementById("largeStraightSum").innerHTML = "The Sum of Large straight is " + largeStraightSum();
    
    console.log("Chance points = " + chanceSum());
    document.getElementById("chanceSum").innerHTML = "The Sum of Chance is " + chanceSum();
    
    console.log("Yatzy points = "+yatzySum());
    document.getElementById("yatzySum").innerHTML = "The Sum of Yatzy is " + yatzySum();
}

/* To do:
DONE -       Make Checkboxes that equals the indexnumber of the rollLib array
             Set the them to false if checked and true if unchecked

DONE -       Add above code to rollDice command

DONE -       Add a counter for 2x reroll puporse - set to 1 ++ for each roll - when it reaches 3 remove roll dice button

DONE -       Make new array that stores total combinations - each combination should have a arrayindex number that turn to true if taken

DONE -       Use function to check the array for combinations
*/