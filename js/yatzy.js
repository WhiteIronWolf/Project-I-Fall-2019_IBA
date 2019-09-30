//hide checkboxes
document.getElementById("checkboxes").style.visibility = "hidden";
document.getElementById("upperScoreSection").style.visibility = "hidden";
document.getElementById("lowerScoreSection").style.visibility = "hidden";

var turn = 0
var roll = [0, 0, 0, 0, 0]; //Store Rolls
var checkboxes = [false, false, false, false, false]; //Checkboxes
var savedSection = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, ] //Section Scores

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

    if (turn >= 2) {
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


    for (var i = 1; i <= 5; i++) {
        if (diceCounts[i] === 1) {
            counter++;
        }

    }
    if (counter === 5) {
        smallStraight = 15;
    }
    return smallStraight;
}

//Large Straight
function largeStraightSum() {
    var diceCounts = calcCounts();
    var largeStraight = 0;
    var counter = 0;


    for (var i = 2; i < diceCounts.length; i++) {
        if (diceCounts[i] === 1) {
            counter++;
        }

    }
    if (counter === 5) {
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

    for (var i = 1; i < diceCounts.length; i++) {
        if (diceCounts[i] >= 5) {
            yatzy = i * 5;
        }
    }
    if (yatzy !== 0) {
        return 50;
    } else
        return 0;
}

function consoleLog() {
    console.log(roll);
    console.log("Count of each number rolled = " + calcCounts());

    //Upper Sections Score
    if (savedSection[0] === false) {
        console.log("Same value points = " + sameRollSum(1));
        document.getElementById("sameRollSumOne").innerHTML = sameRollSum(1);
    } else {
        document.getElementById("button1").style.visibility = "hidden";
    }

    if (savedSection[1] === false) {
        console.log("Same value points = " + sameRollSum(2));
        document.getElementById("sameRollSumTwo").innerHTML = sameRollSum(2);
    } else {
        document.getElementById("button2").style.visibility = "hidden";
    }

    if (savedSection[2] === false) {
        console.log("Same value points = " + sameRollSum(3));
        document.getElementById("sameRollSumThree").innerHTML = sameRollSum(3);
    } else {
        document.getElementById("button3").style.visibility = "hidden";
    }

    if (savedSection[3] === false) {
        console.log("Same value points = " + sameRollSum(4));
        document.getElementById("sameRollSumFour").innerHTML = sameRollSum(4);
    } else {
        document.getElementById("button4").style.visibility = "hidden";
    }

    if (savedSection[4] === false) {
        console.log("Same value points = " + sameRollSum(5));
        document.getElementById("sameRollSumFive").innerHTML = sameRollSum(5);
    } else {
        document.getElementById("button5").style.visibility = "hidden";
    }

    if (savedSection[5] === false) {
        console.log("Same value points = " + sameRollSum(6));
        document.getElementById("sameRollSumSix").innerHTML = sameRollSum(6);
    } else {
        document.getElementById("button6").style.visibility = "hidden";
    }

    //Lower Sections Score
    if (savedSection[6] === false) {
        console.log("One pair points = " + onePairSum());
        document.getElementById("onePairSum").innerHTML = onePairSum();
    } else {
        document.getElementById("button7").style.visibility = "hidden";
    }

    if (savedSection[7] === false) {
        console.log("Two pair points = " + twoPairsSum());
        document.getElementById("twoPairsSum").innerHTML = twoPairsSum();
    } else {
        document.getElementById("button8").style.visibility = "hidden";
    }

    if (savedSection[8] === false) {
        console.log("Three same points = " + threeEvenSum());
        document.getElementById("threeEvenSum").innerHTML = threeEvenSum();
    } else {
        document.getElementById("button9").style.visibility = "hidden";
    }

    if (savedSection[9] === false) {
        console.log("Four same points = " + fourEvenSum());
        document.getElementById("fourEvenSum").innerHTML = fourEvenSum();
    } else {
        document.getElementById("button10").style.visibility = "hidden";
    }

    if (savedSection[10] === false) {
        console.log("Full house points = " + fullHouseSum());
        document.getElementById("fullHouseSum").innerHTML = fullHouseSum();
    } else {
        document.getElementById("button11").style.visibility = "hidden";
    }

    if (savedSection[11] === false) {
        console.log("Small Straight points = " + smallStraightSum());
        document.getElementById("smallStraightSum").innerHTML = smallStraightSum();
    } else {
        document.getElementById("button12").style.visibility = "hidden";
    }

    if (savedSection[12] === false) {
        console.log("Large straight point = " + largeStraightSum());
        document.getElementById("largeStraightSum").innerHTML = largeStraightSum();
    } else {
        document.getElementById("button13").style.visibility = "hidden";
    }

    if (savedSection[13] === false) {
        console.log("Chance points = " + chanceSum());
        document.getElementById("chanceSum").innerHTML = chanceSum();
    } else {
        document.getElementById("button14").style.visibility = "hidden";
    }

    if (savedSection[14] === false) {
        console.log("Yatzy points = " + yatzySum());
        document.getElementById("yatzySum").innerHTML = yatzySum();
    } else {
        document.getElementById("button15").style.visibility = "hidden";
    }
}


function nextRound() {
    turn = 0
    document.getElementById("rollDice").innerHTML = "Next Round";
    document.getElementById("checkboxes").style.visibility = "hidden";
    document.getElementById("rollButton").style.visibility = "visible";
    document.getElementById("upperScoreSection").style.visibility = "hidden";
    document.getElementById("lowerScoreSection").style.visibility = "hidden";
    document.getElementById("checkbox1").checked = false;
    document.getElementById("checkbox2").checked = false;
    document.getElementById("checkbox3").checked = false;
    document.getElementById("checkbox4").checked = false;
    document.getElementById("checkbox5").checked = false;
    finalturn++;
}

function finalSum() {
    var s1 = document.getElementById("sameRollSumOne").innerHTML;
    var s2 = document.getElementById("sameRollSumTwo").innerHTML;
    var s3 = document.getElementById("sameRollSumThree").innerHTML;
    var s4 = document.getElementById("sameRollSumFour").innerHTML;
    var s5 = document.getElementById("sameRollSumFive").innerHTML;
    var s6 = document.getElementById("sameRollSumSix").innerHTML;
    var s7 = document.getElementById("onePairSum").innerHTML;
    var s8 = document.getElementById("twoPairsSum").innerHTML;
    var s9 = document.getElementById("threeEvenSum").innerHTML;
    var s10 = document.getElementById("fourEvenSum").innerHTML;
    var s11 = document.getElementById("fullHouseSum").innerHTML;
    var s12 = document.getElementById("smallStraightSum").innerHTML;
    var s13 = document.getElementById("largeStraightSum").innerHTML;
    var s14 = document.getElementById("chanceSum").innerHTML;
    var s15 = document.getElementById("yatzySum").innerHTML;


    var finalSum = parseFloat(s1) + parseFloat(s2) + parseFloat(s3) + parseFloat(s4) + parseFloat(s5) + parseFloat(s6) + parseFloat(s7) + parseFloat(s8) + parseFloat(s9) + parseFloat(s10) + parseFloat(s11) + parseFloat(s12) + parseFloat(s13) + parseFloat(s14) + parseFloat(s15);
    document.getElementById("finalSum").innerHTML = "The Sum of Upper Section + Lower Section is " + finalSum;
}