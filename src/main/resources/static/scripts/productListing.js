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
	const productListElements = document.getElementById("productsListing").children;
	for (let i = 0; i < productListElements.length; i++) {
		productListElements[i].addEventListener("click", productClick);
	}
});

function findClickedListItemElement(clickedTarget) {
	if (clickedTarget.tagName.toLowerCase() === "li") {
		return clickedTarget;
	} else {
		let ancestorIsListItem = false;
		let ancestorElement = clickedTarget.parentElement;

		while (!ancestorIsListItem && (ancestorElement != null)) {
			ancestorIsListItem = (ancestorElement.tagName.toLowerCase() === "li");

			if (!ancestorIsListItem) {
				ancestorElement = ancestorElement.parentElement;
			}
		}

		return (ancestorIsListItem ? ancestorElement : null);
	}
}

function productClick(event) {
	let listItem = findClickedListItemElement(event.target);

	window.location.assign(
		"/productDetail/"
		+ listItem.querySelector("input[name='productId'][type='hidden']").value);
}
