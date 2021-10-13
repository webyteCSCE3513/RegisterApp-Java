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

})

function searchById(id){
	var url = "http://localhost:8080/api/player/" + id;
	fetch(url, {
		mode:'no-cors'
	})
	.then(response => response.json())
 	.then(data => console.log(data));
}
