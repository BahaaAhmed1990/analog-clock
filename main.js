// call set clock function every one second
setInterval(setClock, 1000);

// access dom elements
const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");

// set clock function
function setClock() {
  // get current date
  const currentDate = new Date();

  // get seconds and divide it by 60 so rotation reset to 0 after 60 sec
  const secondsRatio = currentDate.getSeconds() / 60;
  // console.log(secondsRatio);

  // get minutes and add secondratio so minutes hand not jumb to next minute and divide it by 60 so rotation reset to 0 after 60 minute
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  // console.log(minutesRatio);

  // get hours and add minuteratio so hours hand not jumb to next hour and divide it by 12 so rotation reset to 0 after 12 hours
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  // console.log(hoursRatio);

  // set ratio for every hand
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

// define set ratio function
// parameter dom element and ratio number
function setRotation(element, rotationRatio) {
  // set rotaion property variable for element with rotaiom parameter multiply with 360 to make hands rotaion degree relative to full circle
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();
