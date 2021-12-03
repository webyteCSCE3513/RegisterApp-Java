greenNames = JSON.parse(localStorage.getItem('saveGreen'));
redNames = JSON.parse(localStorage.getItem('saveRed'));
var greenTotal = 0;
var redTotal = 0;
var firstEmpty = true;
document.getElementById("greenScore").innerHTML = 0;
document.getElementById("redScore").innerHTML = 0;

document.addEventListener("DOMContentLoaded", async () => {
  while(m >= 0 && s >= 0){  
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
        
       if(table.rows.length < 10)
          {var row = table.insertRow();
          var cell = row.insertCell();
          for(var i = 0; i < greenNames.length; i++)
          {
            if(killerJSON.codename == greenNames[i])
            {
              cell.innerHTML = killerJSON.codename.fontcolor("green") + " hit " + killedJSON.codename;
            }
          }
          for(var i = 0; i < redNames.length; i++)
          {
            if(killerJSON.codename == redNames[i])
            {
              cell.innerHTML = killerJSON.codename.fontcolor("red") + " hit " + killedJSON.codename;
            }
          } 
          console.log(table.rows.length);
          
          }
        else
          {
            for(var i = 2; i < table.rows.length; i++)
              {
                table.rows[i-1].cells[0].innerHTML = table.rows[i].cells[0].innerHTML;
              }
            for(var i = 0; i < greenNames.length; i++)
          {
            if(killerJSON.codename == greenNames[i])
            {
              table.rows[9].cells[0].innerHTML = killerJSON.codename.fontcolor("green") + " hit " + killedJSON.codename;
            }
          }
          for(var i = 0; i < redNames.length; i++)
          {
            if(killerJSON.codename == redNames[i])
            {
              table.rows[9].cells[0].innerHTML = killerJSON.codename.fontcolor("red") + " hit " + killedJSON.codename;
            }
          } 


          }
          

        //Stuff to change the scores
        for(var i = 0; i < greenNames.length; i++)
            {
              if(killerJSON.codename == greenNames[i])
                {
                  var table = document.getElementById("greenTeam");
                  table.rows[i+1].cells[1].innerHTML = parseInt(table.rows[i+1].cells[1].innerHTML) + 100;
                  greenTotal = greenTotal + 100;
                  document.getElementById("greenScore").innerHTML = greenTotal.toString();
                }
                if(killedJSON.codename == greenNames[i])
                {
                  var table = document.getElementById("greenTeam");
                  table.rows[i+1].cells[1].innerHTML = parseInt(table.rows[i+1].cells[1].innerHTML) - 100;
                  greenTotal = greenTotal - 100;
                  document.getElementById("greenScore").innerHTML = greenTotal.toString();
                }
            }
        for(var i = 0; i < redNames.length; i++)
            {
              if(killerJSON.codename == redNames[i])
                {
                  var table = document.getElementById("redTeam");
                  table.rows[i+1].cells[1].innerHTML = parseInt(table.rows[i+1].cells[1].innerHTML) + 100;
                  redTotal = redTotal + 100;
                  document.getElementById("redScore").innerHTML = redTotal.toString();
                }
              if(killedJSON.codename == redNames[i])
                {
                  var table = document.getElementById("redTeam");
                  table.rows[i+1].cells[1].innerHTML = parseInt(table.rows[i+1].cells[1].innerHTML) - 100;
                  redTotal = redTotal - 100;
                  document.getElementById("redScore").innerHTML = redTotal.toString();
                }
            }
            
      } 
      catch(error){
        console.log(error);
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
    cell.style.color = "green";
    cell = row.insertCell();
		cell.innerHTML = 0;
    }

    for(var i = 0; i < redNames.length; i++)
    {
        var table = document.getElementById("redTeam");
        var row = table.insertRow();
		var cell = row.insertCell();
		cell.innerHTML = redNames[i];
    cell.style.color = "red";
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
