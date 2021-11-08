var greenNames = [];
var redNames = [];
async function addnewPlayer(id, codename){
	var url = "http://webytedatabase.herokuapp.com/api/player/new";
	//var url ="http://localhost:8080/api/player/new";
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
	
	var url = "http://webytedatabase.herokuapp.com/api/player/" + id;
	//var url = "http://localhost:8080/api/player/" + id;
	const response = await fetch(url, {
		mode:'no-cors'
	});

	//Does try block if ID is in database else goes to catch block
	try {
		var player = await response.json(); //probably make it object
		console.log(player);
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
				let newPlay = await response.json(); //probably make it object
				console.log(newPlay);
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

		if(tableName == "greenTable")
			{
				console.log(playerJSON.codename);
				greenNames.push(playerJSON.codename);
				
				localStorage.setItem('saveGreen', JSON.stringify(greenNames));
			}
		if(tableName == "redTable")
			{
				redNames.push(playerJSON.codename);
				localStorage.setItem('saveRed', JSON.stringify(redNames));
			}
			
		if(table2.rows.length > 1)
		{
		for(var i = 0; i < table2.rows.length;i++)
			{
				if(table2.rows[i].cells[0].innerHTML == playerJSON.id)
					{
						alert("Player already in game");
						return;
					}
			}
		}

		var row = table.insertRow();
		var cell = row.insertCell();
		cell.innerHTML = playerJSON.id;
		cell = row.insertCell();
		cell.innerHTML = playerJSON.codename;
		console.log(table.rows[1].cells[0].innerHTML);
	}

	addPlayer();
}

const log = document.getElementById('log');
document.addEventListener('keydown', logKey);
function logKey(e) {
	if (e.code == "Enter"){
 		window.location.href = '/api/player/playAction';
	}
}


