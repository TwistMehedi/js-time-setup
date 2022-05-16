var s = "";
const showTime = document.querySelector(".time");

function loadTime() {
  var date = new Date();

  var hours = date.getHours();
  hours = hours % 12;
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var session = "";

  hours >= 12 ? (session = "AM") : (session = "PM");
  hours < 10 ? (s = "0") : (s = "");
  minutes < 10 ? (s = "0") : (s = "");
  seconds < 10 ? (s = "0") : (s = "");

  var allAddition = hours + ":" + minutes + ":" + s + seconds + " " + session;
  document.querySelector(".time").innerHTML = allAddition;
}

loadTime();
