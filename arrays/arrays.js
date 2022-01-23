//Números para teste
for (let i = 0; i < 4; i++) {
	console.log(Math.floor(Math.random() * 100));
}

var a = [];

function store() {
	let x = document.querySelectorAll("input[type='number']");
	for (let i = 0; i < x.length; i++) {
		a[i] = Number(x[i].value);
	}
	console.log("Stored");
	console.log(a[0], a[1], a[2], a[3]);
}

function revert() {
	let x = document.querySelectorAll("input[type='number']");
	for (let i = 0; i < x.length; i++) {
		a[i] = Number(x[i].value);
	}
	startOrdain();
	let y = document.querySelectorAll(".result div");
	let j = y.length - 1;
	for (let i = 0; i < x.length; i++) {
		y[i].innerHTML = a[j];
		j--;
	}
}

function startOrdain() {
	let x = document.querySelectorAll("input[type='number']");
	for (let i = 0; i < x.length; i++) {
		a[i] = Number(x[i].value);
	}
	ordain(a, 0, a.length - 1);
	show(a);
}

function ordain(a, b, pos) {
	if (b == pos) {
		return;
	}
	let i = pos;
	let j = pos - 1;
	let gt;
	while (i > b) {
		if (a[j] > a[i]) {
			gt = a[j];
			a[j] = a[i];
			a[i] = gt;
		}
		i--;
		j--;
	}
	ordain(a, b + 1, pos);
}

function show(a) {
	let x = document.querySelectorAll(".result div");
	for (let i = 0; i < x.length; i++) {
		x[i].style.border = "1px solid black";
		x[i].innerHTML = a[i];
	}
}