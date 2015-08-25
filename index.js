// Your code here
function displayTime() {
  var currentTime = new Date();
  // console.log(currentTime);

  // document represents the html page that we're working in.
  var clock = document.getElementById("clock");
  var clockMessage = clock.innerText = "whassap";
  console.log(clockMessage);
}

displayTime();
