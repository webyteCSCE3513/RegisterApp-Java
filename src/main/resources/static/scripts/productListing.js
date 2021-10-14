async function addnewPlayer(id, codename){
	//var url = "http://webytedatabase.herokuapp.com/api/player/new";
	var url ="http://localhost:8080/api/player/new";
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
	if (codename != ""){
		await addnewPlayer(id, codename);
	}

	// var url = "http://webytedatabase.herokuapp.com/api/player/" + id;
	var url = "http://localhost:8080/api/player/" +id;
	const response = await fetch(url, {
		mode:'no-cors'
	});
	let player = await response.json(); //probably make it object
	console.log(player);
	console.log(typeof player);
	var playerJSON = JSON.stringify(player);
	console.log(typeof playerJSON);

	playerJSON = JSON.parse(playerJSON);
	console.log(playerJSON.id);
	console.log(playerJSON.codename);
	
	function addPlayer() {
		var table = document.getElementById(tableName);
		var row = table.insertRow();
		var cell = row.insertCell();
		cell.innerHTML = playerJSON.id;
		cell = row.insertCell();
		cell.innerHTML = playerJSON.codename;
	}

	addPlayer();
}
