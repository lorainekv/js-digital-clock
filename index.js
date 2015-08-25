// This sets up the display
function displayTimes() {
  var adventureTime = new Date();
  // document represents the html page that we're working in.
  var localClock = document.getElementById("local-clock");
  var hawaiiClock = document.getElementById("hawaii-clock");
  // You don't need to return a value, since this sets the display text
  // within the function
  localClock.innerText = adventureTime.toLocaleTimeString();
  hawaiiClock.innerText = "hawaii time"
}

// This updates the time each second
function updateTime(){
  setInterval(displayTimes, 1000);
}

updateTime();
