let homeScore = document.getElementById("homeScoreid");
let guestScore = document.getElementById("guestScoreid");

let defaultScore = 0;

function HomePlusOne() {
  defaultScore += 1;
  homeScore.textContent = defaultScore;
}

function HomePlusTwo() {
  defaultScore += 2;
  homeScore.textContent = defaultScore;
}

function HomePlusThree() {
  defaultScore += 3;
  homeScore.textContent = defaultScore;
}

///////GUEST///////

function GuestPlusOne() {
  defaultScore += 1;
  guestScore.textContent = defaultScore;
}

function GuestPlusTwo() {
  defaultScore += 2;
  guestScore.textContent = defaultScore;
}

function GuestPlusThree() {
  defaultScore += 3;
  guestScore.textContent = defaultScore;
}

//RESET//

function resetScore() {
  homeScore.textContent = 0;
  guestScore.textContent = 0;
}
