// var splash =  document.createElement("img");
// splash.src = "https://github.com/webyteCSCE3513/photon-main/blob/main/logo.jpg?raw=true";
// splash.width = screen.width / 2;
// splash.height = screen.height / 2;
// splash.onload 
// console.log(splash.src);
// var div = document.getElementById('x');
// div.appendChild(splash);
// setTimeout(() =>{ 
// 	document.getElementById('splash').style.visibility='none';
// }, 3000);

document.addEventListener("DOMContentLoaded", () => {
	//const playerListElements = document.getElementById("playersListing").children;
	const playerListElements = playerList();
	console.log(playerListElements);

	// for (i=0; i<playerListElements.length; i++){
	// 	playerBuildTableRow(playerListElements[i]);
	// }

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		// Typical action to be performed when the document is ready:
		document.getElementById("playersListing").innerHTML = xhttp.responseText;
		}
	};
	xhttp.open("GET","api/player/1", true);
	console.log("RESPONSEURL: " + xhttp.responseURL);
	
	xhttp.send();
	console.log("RESPONSEURL: " + xhttp.responseURL);
	});

function playerList(){
	var url = '/api/player/all';
	$.get(url);
}

function playerBuildTableRow(player) {
	var ret =
	  "<tr>" +
	   "<td>" + player.id + "</td>" +
	   "<td>" + player.codename + "</td>"
	  "</tr>";
	return ret;
  }
