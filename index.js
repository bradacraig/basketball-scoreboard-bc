let homeScore = document.getElementById("homeScore")
let homeCount = 0;
let guestScore = document.getElementById("guestScore")
let guestCount = 0

let newGame = document.getElementById("newGame");

// Reset scores
function resetScores() {
    homeCount = 0
    guestCount = 0
    homeScore.textContent = 0
    guestScore.textContent = 0
}

// Add points HOME
function add1Home() {
    homeCount += 1
    homeScore.textContent = homeCount
}
function add2Home() {
    homeCount += 2
    homeScore.textContent = homeCount
}
function add3Home() {
    homeCount += 3
    homeScore.textContent = homeCount
}

// Add points GUEST
function add1Guest() {
    guestCount += 1
    guestScore.textContent = guestCount
}
function add2Guest() {
    guestCount += 2
    guestScore.textContent = guestCount
}
function add3Guest() {
    guestCount += 3
    guestScore.textContent = guestCount
}