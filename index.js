// This sets up the display
function displayTime() {
  var currentTime = new Date();
  // document represents the html page that we're working in.
  var clock = document.getElementById("clock");
  // You don't need to return a value, since this sets the display text
  // within the function
  clock.innerText = currentTime.toLocaleTimeString();
}

// This updates the time each second
function updateTime(){
  setInterval(displayTime, 1000);
}

updateTime();
