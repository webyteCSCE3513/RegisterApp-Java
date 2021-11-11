
    greenNames = JSON.parse(localStorage.getItem('saveGreen'));
    redNames = JSON.parse(localStorage.getItem('saveRed'));
   
    for(var i = 0; i < greenNames.length; i++)
    {
        var table = document.getElementById("greenTeam");
        var row = table.insertRow();
		var cell = row.insertCell();
		cell.innerHTML = greenNames[i];
    cell = row.insertCell();
		cell.innerHTML = 0;
    }

    for(var i = 0; i < redNames.length; i++)
    {
        var table = document.getElementById("redTeam");
        var row = table.insertRow();
		var cell = row.insertCell();
		cell.innerHTML = redNames[i];
    cell = row.insertCell();
		cell.innerHTML = 0;
    }
	document.getElementById('timer').innerHTML =
  06 + ":" + 00; //Change this to change game duration
startTimer();


function startTimer() {
  var timeNow = document.getElementById('timer').innerHTML;
  var times = timeNow.split(/[:]+/);
  m = times[0]; //changed to be able to access from inside displayWarning()
  s = checkSecond((times[1] - 1));
  if(s==59){m=m-1}
  if(m<0){
    return
  }
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
  
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}

function displayWarning() {
  var x = document.getElementById("warningDiv");
  if (m == 0 && s <= 59) {
    x.style.visibility = "visible";
  } else {
    x.style.visibility = "hidden";
  }
}