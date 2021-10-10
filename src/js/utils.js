export function formatTime(time) {
    let milliseconds = formattedTime(time % 1000, 3);
    let seconds = formattedTime(Math.floor(time / 1000) % 60);
    let minutes = formattedTime(Math.floor(time / 60000) % 60);
    let hours = formattedTime(Math.floor(time / 3600000));
    return `${hours}:${minutes}:${seconds}:${milliseconds}`
}
export function formattedTime(number, digits = 2)  {
    return number.toLocaleString('de-DE', {
        minimumIntegerDigits: digits,
    })
}