let timeDisplay = document.querySelector(".timeDisplay");
let pause = document.querySelector("#pause");
let start = document.querySelector("#start");
let reset = document.querySelector("#reset");
let currentTime = 0;
let elapsedTime = 0;
let startTime = 0;
let paused = true;
let interValid;
let hrs = 0;
let mins = 0;
let secs = 0;
start.addEventListener("click", () => {
  if (paused) {
    paused = false;
    startTime = Date.now() - elapsedTime;
    interValid = setInterval(updateTime, 75);
  }
});
pause.addEventListener("click", () => {
  if (!paused) {
    paused = true;
    elapsedTime = Date.now() - startTime;
    clearInterval(interValid);
  }
});
reset.addEventListener("click", () => {
  paused = true;
  currentTime = 0;
  elapsedTime = 0;
  startTime = 0;

  hrs = 0;
  mins = 0;
  secs = 0;
  timeDisplay.textContent = "00:00:00";
});

function updateTime() {
  elapsedTime = Date.now() - startTime;
  secs = Math.floor((elapsedTime / 1000) % 60);
  mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
  hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
  secs = pad(secs);
  hrs = pad(hrs);
  mins = pad(mins);
  timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

  function pad(unit) {
    return ("0" + unit).length > 2 ? unit : "0" + unit;
  }
}
