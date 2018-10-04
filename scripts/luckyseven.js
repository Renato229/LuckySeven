function luckySevens(){

var initialBet = document.getElementById("initialBet").valueAsNumber;
var die1 = 0;
var die2 = 0;
var dice = 0;
var rollTally = 0;
var unLuckyCounter = 0;
var money = initialBet;
var moneyHeld = [initialBet];
var win = 4;
var loss = 1;
var maxHeld = 0; 
    
    if(initialBet<=0){

        alert("Please put in a positive number")
        return false;

    }else{
        do{
        // dice roller radomizer
        rollTally++;
        die1 = Math.floor(Math.random() * 6) + 1;
        die2 = Math.floor(Math.random() * 6) + 1;   
        dice = die1 + die2;

            // WINNER
            if (dice == 7){
            money = money + win;
            var last_element = moneyHeld[moneyHeld.length -1]; // get value of last element of moneyHeld array that is used to show current money held by player after last roll
            var last_updated = last_element + win; // adds $4 to previous roll winnings and stores in last_updated
            moneyHeld.push(last_updated);

            // LOSER
            }else {
            money = money - loss;
            unLuckyCounter++;
            var last_element = moneyHeld[moneyHeld.length -1];
            var last_updated = last_element - loss;
            moneyHeld.push(last_updated);
            rollTally = rollTally++;
            } 


    }while(money>0);
    var totalMax = 0;

    totalMax = Math.max.apply(Math, moneyHeld); // finds max value in moneyHeld array
    numRolls = moneyHeld.indexOf(totalMax); // finds number of rolls till max moneyHeld array
    if(numRolls<1){
        numRolls = 0;
    }

    document.getElementById("p1").innerHTML=("<hr /><center><h2>Results</h2><table style=\"width: 100% height: 100%;\"><tr id=\"firstrow\"><td class=\"th2\" style=\"text-align: left;\" style=\"font-weight: normal;\">Starting Bet</td><td class=\"td2\">$" + initialBet + ".00</td></tr><tr id=\"secondrow\"><td>Total Rolls Before Going Broke</td><td>"+ rollTally +"</td></tr><tr id=\"thirdrow\"><td>Highest Amount Won</td><td>$" + totalMax + ".00</td></tr><tr id=\"fourthrow\"><td>Roll Count at Highest Amount Held</td><td>"+ numRolls + "</td></tr></table></center>");
    document.getElementById("p2").innerHTML="Play Again";
    }

    

} 