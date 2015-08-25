// Your code here
function displayTime() {
  var currentTime = new Date();
  // console.log(currentTime);

  // document represents the html page that we're working in.
  var clock = document.getElementById("clock");
  // You don't need to return a value, since this sets the display text
  // within the function
  clock.innerText = currentTime.toLocaleTimeString();
}

displayTime();
