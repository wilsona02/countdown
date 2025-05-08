function getMSTTargetDate() {
  return new Date(Date.UTC(2025, 11, 13, 7, 0, 0)).getTime(); // 00:00 MST = 07:00 UTC
}

document.addEventListener("DOMContentLoaded", function () {
  const daysEl = document.getElementById("days").children[0];
  const hoursEl = document.getElementById("hours").children[0];
  const minutesEl = document.getElementById("minutes").children[0];
  const secondsEl = document.getElementById("seconds").children[0];
  const targetTime = getMSTTargetDate();

  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetTime - now;

    if (distance < 0) {
      clearInterval(timer);
      document.getElementById("countdown").innerHTML = "<div>Countdown finished!</div>";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;
  }, 1000);
});
