const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");
const wall = document.querySelector(".wall");

function ChangeBackgroundColor() {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  const color = `rgb(${x},${y},${z})`;
  wall.style.background = color;
}

function updateClock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondsDegree = (seconds / 60) * 360 + 90;
  const minutesDegree = (minutes / 60) * 360 + 90;
  const hoursDegree = ((hours % 12) + minutes / 60) * 30 + 90;

  secondHand.style.transform = `rotate(${secondsDegree}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
  ChangeBackgroundColor();
}

updateClock();
setInterval(updateClock, 1000);
