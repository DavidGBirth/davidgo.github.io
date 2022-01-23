function main() {
	genText(writeText);
}

function writeText(text) {
	document.querySelector(".board").innerHTML = text;
}

function genText(callback) {
	let text = "Esse texto foi gerado através de uma função de callback";
	callback(text);
}