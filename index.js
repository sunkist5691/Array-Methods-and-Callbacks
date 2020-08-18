import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

//filter only 2014 final cup information
const finalTeamName = fifaData.filter(x => x["Year"] === 2014 && x["Stage"] === "Final")

console.log(finalTeamName);
//Home Team name for 2014 world cup final
console.log(finalTeamName[0]["Home Team Name"]);

//Away Team name for 2014 world cup final
console.log(finalTeamName[0]["Away Team Name"]);

//Home Team goals for 2014 world cup final
console.log(finalTeamName[0]["Home Team Goals"]);

//Away Team name for 2014 world cup final
console.log(finalTeamName[0]["Away Team Goals"]);

const homeTeamName = finalTeamName[0]["Home Team Name"]
const awayTeamName = finalTeamName[0]["Away Team Name"]
const homeTeamGoal = finalTeamName[0]["Home Team Goals"]
const awayTeamGoal = finalTeamName[0]["Away Team Goals"]
//Winner of 2014 world cup final
if(homeTeamGoal > awayTeamGoal)
    console.log(homeTeamName)
else if(homeTeamGoal < awayTeamGoal)
    console.log(awayTeamName)
else
    console.log('TIE')

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {

    return data.filter(x => x["Stage"] === "Final")

};

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(gf) {

    //Get the data of years ONLY from FINAL
    const listOfFinals = gf(fifaData);
    const years = [];

    //Iterate each objects from listOfFinals and push into years' array
    listOfFinals.forEach(x => years.push(x["Year"]))

    return years;
};

console.log(getYears(getFinals));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(gf) {
    
    const listOfFinals = gf(fifaData)
    const winners = []
    
    listOfFinals.forEach(x => {

        if(x['Home Team Goals'] > x['Away Team Goals']) 
            winners.push(x['Home Team Name'])
        else if(x['Home Team Goals'] < x['Away Team Goals']) 
            winners.push(x['Away Team Name'])
        else 
            winners.push(`TIE on ${x['Year']}`)
    })

    return winners
}

console.log(getWinners(getFinals));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(gw, gy) {

    const winners = gw(getFinals);
    const years = gy(getFinals);
    const listFinal = getFinals(fifaData);

    listFinal.forEach((cur, i) => console.log(`In ${years[i]}, ${winners[i]} won the world cup!`))
    
};

getWinnersByYear(getWinners, getYears);

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {

    const homeGoals = data.reduce((accVal, curVal) => accVal + curVal['Home Team Goals'], 0) / data.length
    const awayGoals = data.reduce((accVal, curVal) => accVal + curVal['Away Team Goals'], 0) / data.length

    console.log(`Home goals average: ${homeGoals}\nAway goals average: ${awayGoals}`);

};

getAverageGoals(fifaData);

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInit) {

    const winningOnly = data.filter(cur => {

        if(data['Home Team Goals'] > data['Away Team Goals']) 
            winners.push(data['Home Team Name'])
        else if(data['Home Team Goals'] < data['Away Team Goals']) 
            winners.push(data['Away Team Name'])
    })

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
