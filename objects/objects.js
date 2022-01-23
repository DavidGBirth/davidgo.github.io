//console.log(Math.floor(Math.random() * 11)/100);

class Car {
	constructor() {
		let chance = Math.floor((Math.random() * 101))/100;
		if (chance <= 0.6) {
			this.type = "Popular";
			this.min = Math.floor(Math.random() * (130 - 110) + 110);
			this.max = Math.floor(Math.random() * (200 - 180) + 180);
			this.skid = (Math.floor(Math.random() * (4 - 3) + 3))/100;
			this.round = 0;
		} else if (chance > 0.6 && chance <= 0.95) {
			this.type = "Sport";
			this.min = Math.floor(Math.random() * (145 - 125) + 125);
			this.max = Math.floor(Math.random() * (215 - 195) + 195);
			this.skid = (Math.floor(Math.random() * (3 - 2) + 2))/100;
			this.round = 0;
		} else if (chance > 0.95) {
			this.type = "Super Sport";
			this.min = Math.floor(Math.random() * (160 - 140) + 140);
			this.max = Math.floor(Math.random() * (230 - 210) + 210);
			this.skid = (Math.floor(Math.random() * (1.75 - 1) + 1.75))/100;
			this.round = 0;
		}
	}

	setSpeed() {
		let x = Math.floor(Math.random() * (this.max - this.min) + this.min);
		this.speed = x - (x * this.skid);
	}
}

//let y = new Car();
//y.setSpeed();

function startRace() {
	let x = document.querySelector("input[name='mode']:checked");
	if (x.value == "none") {
		let y = document.querySelector("input[name='pers']");
		x.value = y.value;
	}
	let pedro = new Car();
	let juca = new Car();
	let edna = new Car();
	pedro.setSpeed();
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

function ableInput() {
	document.getElementById("pers").removeAttribute("disabled");
}