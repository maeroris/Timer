const anzeige = document.getElementById("timer");
const roundsanzeige = document.getElementById("rounds")

var stopTimer = 0;
var pause = true;
var lastTimer = new Date();
var rounds = []

function start()    {
    pause = false;
    lastTimer = new Date();
    currentTimer();
}
function round()    {
    if (pause === false){
        rounds.push (formatTime(stopTimer));
        renderRounds();
        var roundScroll = roundsanzeige.scrollHeight;
        roundsanzeige.scrollTop = roundScroll;
    }
}
function renderRounds() {
    roundsanzeige.innerHTML = rounds.map((round, index) =>`round ${index + 1}: ${round}`).join("</br>");
}
function stop()     {
    pause = true;
}

function reset(resetRounds)    {
    pause = true;
    stopTimer = 0;
    updateTimer();
    if (resetRounds){
        rounds = [];
        renderRounds();
    }
}
function currentTimer() {
    if(pause === false) {
        stopTimer += new Date() - lastTimer;
        updateTimer();
    }
    lastTimer = new Date();
    setTimeout(currentTimer, 1);
}
function updateTimer()  {
    anzeige.innerHTML = formatTime(stopTimer);
}
function formatTime(time) {
    let milliseconds = formattedTime(time % 1000, 3);
    let seconds = formattedTime(Math.floor(time / 1000) % 60);
    let minutes = formattedTime(Math.floor(time / 60000) % 60);
    let hours = formattedTime(Math.floor(time / 3600000));
    return `${hours}:${minutes}:${seconds}:${milliseconds}`
}
function formattedTime(number, digits = 2)  {
    return number.toLocaleString('de-DE', {
        minimumIntegerDigits: digits,
    })
}