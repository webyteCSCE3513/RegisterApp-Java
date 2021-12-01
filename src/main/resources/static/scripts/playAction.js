greenNames = JSON.parse(localStorage.getItem('saveGreen'));
redNames = JSON.parse(localStorage.getItem('saveRed'));

document.addEventListener("DOMContentLoaded", async () => {
  while(true){  
    try{
        var url = "http://localhost:8081/api/player/startServer";
        const response =  await fetch(url, {
          mode:'no-cors'
        });
        var players = await response.json();
        console.log(players);
        var actionPlayers = players.data.toString().split(":");

        killerURL = "http://localhost:8081/api/player/" + actionPlayers[0];
        const killer = await fetch(killerURL, {
          mode: 'no-cors'
        })
        var killerDude = await killer.json(); 
        var killerJSON = JSON.stringify(killerDude);
        killerJSON = JSON.parse(killerJSON);
        //console.log("KILLER id: " + killerJSON.id + " codename: " + killerJSON.codename);
        
        killedURL = "http://localhost:8081/api/player/" + actionPlayers[1];
        const killed = await fetch(killedURL, {
          mode: 'no-cors'
        });
        var killedDude = await killed.json();
        var killedJSON = JSON.stringify(killedDude);
        killedJSON = JSON.parse(killedJSON);
        //console.log("KILLED id: " + killedJSON.id + " codename: " + killedJSON.codename);
        console.log(killedJSON.codename);


        var table = document.getElementById("actionLog");
        var row = table.insertRow();
        var cell = row.insertCell();
        cell.innerHTML = killerJSON.codename + " hit " + killedJSON.codename;
      } 
      catch{
        console.log("Error");
      }};
});

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

// async function getResponse(){
//   while (true){
//     var url = "http://localhost:8080/api/player/startServer";
//     const response =  await fetch(url, {
//       mode:'no-cors'
//     });
//     console.log(response);
//     const responseArray = response.split(":");
    
//     killerURL = "http://localhost:8080/api/player/" + repsonseArray[0];
//     //killerURL = "http://localhost:8080/api/player/1";
//     const killer = await fetch(killerURL, {
//       mode: 'no-cors'
//     });
//     console.log(await killer);
    
//     killedURL = "http://localhost:8080/api/player/" + responseArray[1];
//     const killed = await fetch(killedURL, {
//       mode: 'no-cors'
//     });
//     console.log(await killed);
//   }
// }