/*Given an array of pairs representing the teams that have competed against each other and an array containing the results of each competition, write a function that returns the winner of the tournament. The input arrays are named competitions and results, respectively. The
в
competitions array has elements in the form of [homeTeam, awayTeam] , where each team is a string of at most 30 characters representing the name of the team. The results array contains information about the winner of each corresponding competition in the competitions array. Specifically, results [i] denotes the winner of competitions [J, where a 1 in the results array means that the home team in the corresponding competition won and a • means that the away team won.
It's guaranteed that exactly one team will win the tournament and that each team will compete against all other teams exactly once. It's also guaranteed that the tournament will always have at least two teams.*/
function tournamentWinner(competitions, results) {
  const scores = {}; // Object to store the scores for each team
  let maxScore = 0; // Variable to track the maximum score
  let winner = ""; // Variable to store the current winner

  for (let i = 0; i < competitions.length; i++) {
    const [homeTeam, awayTeam] = competitions[i];
    const winningTeam = results[i] === 1 ? homeTeam : awayTeam;

    if (!(winningTeam in scores)) {
      scores[winningTeam] = 0;
    }

    scores[winningTeam] += 3; // Add 3 points for the winning team

    if (scores[winningTeam] > maxScore) {
      maxScore = scores[winningTeam];
      winner = winningTeam;
    }
  }

  return winner;
}

/*It initializes an empty object called scores to store the scores for each team.
It initializes the maxScore variable to 0 and the winner variable to an empty string.
It iterates through the competitions array using a for loop.
For each competition, it extracts the home team and away team using array destructuring.
It determines the winning team based on the corresponding result in the results array.
If the winning team is not already in the scores object, it adds it and initializes its score to 0.
It adds 3 points to the score of the winning team.
If the score of the winning team is greater than the current maxScore, it updates the maxScore and winner variables.
After iterating through all competitions, it returns the winner.*/
