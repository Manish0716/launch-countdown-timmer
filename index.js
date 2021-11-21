const countdown = () => {
  const enddate = new Date("Dec 31,2021 00:00:00").getTime();
  const now = new Date().getTime();
  const difference = enddate - now;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const day = hours * 24;

  let timeDay = Math.floor(difference / day);
  let timeHours = Math.floor((difference % day) / hours);
  let timeMinute = Math.floor((difference % hours) / minutes);
  let timeSeconds = Math.floor((difference % minutes) / seconds);

  timeHours = timeHours < 10 ? "0" + timeHours : timeHours;
  timeMinute = timeMinute < 10 ? "0" + timeMinute : timeMinute;
  timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds;

  document.getElementById("day").innerHTML = timeDay;
  document.getElementById("hours").innerHTML = timeHours;
  document.getElementById("minutes").innerHTML = timeMinute;
  document.getElementById("seconds").innerHTML = timeSeconds;
};
setInterval(countdown, 1000);
