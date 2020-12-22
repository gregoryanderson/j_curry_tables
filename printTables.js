var fs = require("fs");
var text = fs.readFileSync("./sample-input.txt").toString("utf-8");
var textByLine = text.split("\n");

var teams = {};

const scoreLines = textByLine.map((scoreLine) => {
  return scoreLine.split(", ");
});

const teamScores = scoreLines.forEach((line) => {
  if (line.length > 1) {
    const first = line[0].split(/(\d)/);
    const second = line[1].split(/(\d)/);
    if (!Object.keys(teams).includes(first[0])) {
      teams[first[0]] = 0;
    }
    if (!Object.keys(teams).includes(second[0])) {
      teams[second[0]] = 0;
    }
    if (first[1] > second[1]) {
      teams[first[0]] = teams[first[0]] + 3;
    }
    if (first[1] < second[1]) {
      teams[second[0]] = teams[second[0]] + 3;
    }
    if (first[1] === second[1]) {
      teams[first[0]] = teams[first[0]] + 1;
      teams[second[0]] = teams[second[0]] + 1;
    }
  }
});

var sortable = [];

for (var team in teams) {
  sortable.push([team, teams[team]]);
}

sortable.sort(function (a, b) {
  return b[1] - a[1];
});

sortable.forEach(function (team, index) {
  console.log(`${index + 1}. ${team[0].trim()}, ${team[1]} pts`);
});

console.log('Thank you!')