document.addEventListener("DOMContentLoaded", async () => {
  
  while (true){
      try{
        var url = "http://localhost:8080/api/player/startServer";
        const response =  await fetch(url, {
          mode:'no-cors'
        });
        console.log(response);
        const responseArray = response.split(":");
        
        killerURL = "http://localhost:8080/api/player/" + repsonseArray[0];
        const killer = await fetch(killerURL, {
          mode: 'no-cors'
        });
        console.log(await killer);
        
        killedURL = "http://localhost:8080/api/player/" + responseArray[1];
        const killed = await fetch(killedURL, {
          mode: 'no-cors'
        });
        console.log(await killed);

        var urlStopServer = "http://localhost:8080/api/player/stopServer";
        const stopServer = await fetch(urlStopServer, {
          mode: 'no-cors'
        });

      }
      catch{
        console.log("Error");
      }
    }
      //processing the response
      //show on frontend
      //go back to route
    // setTimeout(stopServer(), 5000)

    // function stopServer(){
    //   var url = "http://localhost:8080/api/player/stopServer";
    //   const response = fetch(url, {
    //     mode:'no-cors'
    //   });
    // }
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