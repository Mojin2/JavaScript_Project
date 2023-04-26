const clock = document.querySelector("h2#clock");

function getClock() {
  const day = new Date();
  const hours = day.getHours().toString().padStart(2, "0");
  const minutes = day.getMinutes().toString().padStart(2, "0");
  const seconds = day.getSeconds().toString().padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);

// setInterval(function,1000ms) => 1000ms마다 반복 실행
// setTimeout(function,1000ms) => 1000ms뒤 실행
// padStart(minLength,add))
