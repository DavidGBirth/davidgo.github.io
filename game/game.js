class Car {
	constructor(minSpeed, maxSpeed, skid) {
		if (arguments[0] == undefined) {
			this.min = Math.floor(Math.random() * (150 - 100) + 100);
			this.max = Math.floor(Math.random() * (280 - 200) + 200);
			this.skid = (Math.floor(Math.random() * (8 - 1) + 1))/100;
			this.round = 0;
		} else {
			this.test = arguments[1];
			this.min = minSpeed;
			this.max = maxSpeed;
			this.speed;
			this.skid = skid;
			this.round = 0;
		}
	}

	setSpeed() {
		let x = Math.floor(Math.random() * (this.max - this.min) + this.min);
		this.speed = x - (x * this.skid);
	}
}

class Something {
	constructor() {
		this.test = arguments[0];
	}
}

function startRace() {
	let x = document.querySelector("input[name='mode']:checked");
	if (x.value == "none") {
		let y = document.querySelector("input[name='pers']");
		x.value = y.value;
	}
	let pedro = new Car(150, 230, 0.03);
	let juca = new Car(120, 260, 0.05);
	let edna = new Car(180, 220, 0.01);
	pedro.setSpeed();
	console.log(pedro.skid);
	juca.setSpeed();
	edna.setSpeed();
	for (let n = Number(x.value); n > 0; n--) {
		pedro.setSpeed();
		juca.setSpeed();
		edna.setSpeed();
		let winner = Math.max(pedro.speed, juca.speed, edna.speed);
		switch (winner) {
		case (pedro.speed):
			pedro.round += 1;
			break;
		case (juca.speed):
			juca.round += 1;
			break;
		case (edna.speed):
			edna.round += 1;
			break;
		}
	}
	let p = document.createElement("p");
	let winner = Math.max(pedro.round, juca.round, edna.round);
	switch (winner) {
		case (pedro.round):
			p.innerHTML = "O vencedor é o Pedro!!!\nGanhou " + pedro.round + " voltas.";
			break;
		case (juca.round):
			p.innerHTML = "O vencedor é o Juca!!!\nGanhou " + juca.round + " voltas.";
			break;
		case (edna.round):
			p.innerHTML = "A vencedora é a Edna!!!\nGanhou " + edna.round + " voltas.";
			break;
	}
	document.querySelector(".result").appendChild(p);
}

function startRandom() {
	let x = document.querySelector("input[name='mode']:checked");
	if (x.value == "none") {
		let y = document.querySelector("input[name='pers']");
		x.value = y.value;
	}
	let playerA = new Car();
	let playerB = new Car();
	let playerC = new Car();
	for (let n = Number(x.value); n > 0; n--) {
		playerA.setSpeed();
		playerB.setSpeed();
		playerC.setSpeed();
		let winner = Math.max(playerA.speed, playerB.speed, playerC.speed);
		switch (winner) {
		case (playerA.speed):
			playerA.round += 1;
			break;
		case (playerB.speed):
			playerB.round += 1;
			break;
		case (playerC.speed):
			playerC.round += 1;
			break;
		}
	}
	console.log(playerA);
	console.log(playerB);
	console.log(playerC);
	let p = document.createElement("p");
	let winner = Math.max(playerA.round, playerB.round, playerC.round);
	switch (winner) {
		case (playerA.round):
			p.innerHTML = "O vencedor é o Player A!!!\nGanhou " + playerA.round + " voltas.";
			break;
		case (playerB.round):
			p.innerHTML = "O vencedor é o playerB!!!\nGanhou " + playerB.round + " voltas.";
			break;
		case (playerC.round):
			p.innerHTML = "A vencedora é a Player C!!!\nGanhou " + playerC.round + "voltas.";
			break;
	}
	document.querySelector(".result").appendChild(p);
}