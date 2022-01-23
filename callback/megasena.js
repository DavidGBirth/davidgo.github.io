let choices = ["first", "second", "third", "fourth", "fifth", "sixth"];
let c = 0;
let cod;
let numbers = [];

function main() {
	getNumbers(randomInt);
	console.log(numbers);
	cod = setInterval(proxNumber, 5000);
}

function getNumbers(callback) {
	let aux;
	for (let i = 0; i < 6; i++) {
		numbers[i] = callback(1, 60);
	}
}

function randomInt(min, max) {
	let aux = Math.floor(Math.random() * (max - min + 1) + min);
	console.log(aux);
	if (numbers.includes(aux)) {
		aux = randomInt(1, 60);
	}
	return aux;
}

function proxNumber() {
	if (c > 5) {
		clearInterval(cod);
	} else {
		document.getElementById(choices[c]).innerHTML = numbers[c];
		c++;
	}
}

