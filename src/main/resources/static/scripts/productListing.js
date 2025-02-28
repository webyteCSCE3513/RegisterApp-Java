var greenNames = [];
var redNames = [];

async function addnewPlayer(id, codename){
	//var url = "http://webytedatabase.herokuapp.com/api/player/new";
	var url ="http://localhost:8081/api/player/new";
	await fetch(url,{
		method: 'POST',
		headers: {
			'Accept': 'application/json',	
			'Content-Type': 'application/json'},
		body: JSON.stringify({
			id: id,
			firstName: null,
			lastName: null,
			codename: codename
		})
	});
}

async function searchById(id, codename, tableName){
	//var url = "http://webytedatabase.herokuapp.com/api/player/" + id;
	var url = "http://localhost:8081/api/player/" + id;
	const response = await fetch(url, {
		mode:'no-cors'
	});

	try {
		var player = await response.json(); 
		var playerJSON = JSON.stringify(player);
		playerJSON = JSON.parse(playerJSON);
	}
	catch{
		//Only adds to the database if codename is entered with ID
		if(codename != "")
			{await addnewPlayer(id,codename);
				const response = await fetch(url, {
					mode:'no-cors'
				});
				let newPlay = await response.json();
				var playerJSON = JSON.stringify(newPlay);
				playerJSON = JSON.parse(playerJSON);
			}
		else
			{
				alert("ID not found. Please enter a codename");
			}
	}
	
	function addPlayer() {
		var table = document.getElementById(tableName);
		var table2 = document.getElementById("greenTable");
		var table1 = document.getElementById("redTable");
		if(table1.rows.length == 16)
		{
			alert("Red Team is Full!");
			return;
		}
		if(table2.rows.length == 16)
		{
			alert("Green Team is Full!");
			return;
		}
		if(table1.rows.length > 1)
		{
		for(var i = 0; i < table1.rows.length;i++)
			{
				if(table1.rows[i].cells[0].innerHTML == playerJSON.id)
					{
						alert("Player already in game");
						return;
					}
			}
		}
		for(var i = 0; i < table2.rows.length;i++)
			{
				if(table2.rows[i].cells[0].innerHTML == playerJSON.id)
					{
						alert("Player already in game");
						return;
					}
			}
		

		if(tableName == "greenTable")
			{
				//console.log(playerJSON.codename);
				greenNames.push(playerJSON.codename);
				
				localStorage.setItem('saveGreen', JSON.stringify(greenNames));
			}
		if(tableName == "redTable")
			{
				redNames.push(playerJSON.codename);
				localStorage.setItem('saveRed', JSON.stringify(redNames));
			}
			
		

		var row = table.insertRow();
		var cell = row.insertCell();
		cell.innerHTML = playerJSON.id;
		cell = row.insertCell();
		cell.innerHTML = playerJSON.codename;
		//console.log(table.rows[1].cells[0].innerHTML);
	}

	addPlayer();
}

const log = document.getElementById('log');
document.addEventListener('keydown', logKey);
function logKey(e) {
    if (e.code == "Enter"){
        
        var timeLeft = 29; //changes pre-game timer
        var what = setInterval(function(){
            document.getElementById('toPlay').innerHTML = "Game starts in: " + timeLeft;
            timeLeft--;
        }, 1000);

        setTimeout(function(){
            window.location.href = '/api/player/playAction'}, 30000); //changes pre-game timer
                
    }
}



