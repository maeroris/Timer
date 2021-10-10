import {kebabCase} from 'lodash'
import {formatTime, formattedTime} from './js/utils'
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
const buttons =  [
    {el: document.getElementById("startButton"), fn: start},
    {el: document.getElementById("stopButton"), fn: stop},
    {el: document.getElementById("resetButton"), fn: reset},
    {el: document.getElementById("roundButton"), fn: round}
]
buttons.forEach((button)=> {
    button.el.addEventListener('click', button.fn)
})