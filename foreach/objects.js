//console.log(Math.floor(Math.random() * 11)/100);
const Cars = {
	"popular": {
		"velMin": {
			"min": 110,
			"max": 130
		},

		"velMax": {
			"min": 180,
			"max": 200
		},

		"skid": {
			"min": 3,
			"max": 4	
		}
	},

	"sport": {
		"velMin": {
			"min": 125,
			"max": 145
		},

		"velMax": {
			"min": 195,
			"max": 215
		},

		"skid": {
			"min": 2,
			"max": 3	
		}
	},

	"supersport": {
		"velMin": {
			"min": 140,
			"max": 160
		},

		"velMax": {
			"min": 210,
			"max": 230
		},

		"skid": {
			"min": 1,
			"max": 1.75	
		}
	}
}

const points = {
    "10": {
        first: 200,
        second: 120,
        third: 50
    },

    "70": {
        first: 220,
        second: 130,
        third: 75
    },

    "160": {
        first: 250,
        second: 150,
        third: 90
    }
}

const player = {
	a: {
        name: "Pedro",
        car: {},
        level: 0,
        points: 0
	},

	b: {
        name: "Juca",
        car: {},
        level: 0,
        points: 0
	},

	c: {
        name: "Edna",
        car: {},
        level: 0,
        points: 0
	}
}

function setValues(obj) {
	obj.min = Math.floor(Math.random() * (obj.velMin.max - obj.velMin.min) + obj.velMin.min);
	obj.max = Math.floor(Math.random() * (obj.velMax.max - obj.velMax.min) + obj.velMax.min);
	obj.skid = (Math.floor(Math.random() * (obj.skid.max - obj.skid.min) + obj.skid.min))/100;
	obj.round = 0;
}

function returnType() {
	let chance = Math.floor((Math.random() * 101))/100;
	let obj;
		if (chance <= 0.6) {
			obj = Object.create(Cars.popular);
			setValues(obj);
		} else if (chance > 0.6 && chance <= 0.95) {
			obj = Object.create(Cars.sport);
			setValues(obj);
		} else if (chance > 0.95) {
			obj = Object.create(Cars.supersport);
			setValues(obj);
		}
	return obj;
}

function setSpeed(obj) { 
    if (obj.level > 0) {
        obj.car.max += obj.car.max * (obj.level/100);
        obj.car.min += obj.car.min * (obj.level/100);
    }
	let x = Math.floor(Math.random() * (obj.car.max - obj.car.min) + obj.car.min);
	obj.car.speed = x - (x * obj.car.skid);
}

let a = [player.a, player.b, player.c];
function startRace() {
	let x = document.querySelector("input[name='mode']:checked");
    let tabela = points[x.value];
    arrayTabela = [tabela.first, tabela.second, tabela.third];
	if (x.value == "none") {
		let y = document.querySelector("input[name='pers']");
		x.value = y.value;
	}
	a.forEach((element) => {
        element.car = returnType();
    });
    for (let n = Number(x.value); n > 0; n--) {
        a.forEach((element) => {
            setSpeed(element);
        });
        let winner = a.sort(function (p1, p2) {
            return p1.car.speed - p2.car.speed;
        });
        winner[2].car.round += 1;
    }
    a.sort(function (p1, p2) {
        return p1.car.round - p2.car.round;
    });
    console.log(a[2]);
    console.log(arrayTabela[0]);
    a[0].points += arrayTabela[0];
    a[1].points += arrayTabela[1];
    a[2].points += arrayTabela[2];
    a.forEach((element) => {
        if (element.level < 10) {
            element.level += Math.floor(element.points / 450);
        }
    });
    console.log(a);
    let w = document.querySelector(".result");
    w.innerHTML = "";
    let title = document.createElement("h2");
    title.innerHTML = "O ranking dessa corrida é:"
    w.appendChild(title);
    showScore(w, 0);
    showScore(w, 1);
    showScore(w, 2);
}

function showScore(w, i) {
    let x = document.createElement("div");
    x.className = "box";
    let y = document.createElement("div");
    y.className = "pos";
    y.innerHTML = i + 1;
    x.appendChild(y);
    let z = document.createElement("div");
    z.className = "info"
    appendInfo(z, i);
    x.appendChild(z);
    w.appendChild(x);
}

function appendInfo(obj, i) {
    let x = document.createElement("p");
    x.innerHTML = "Nome: " + a[i].name;
    obj.appendChild(x);
    let y = document.createElement("p");
    y.innerHTML = "Nível: " + a[i].level;
    obj.appendChild(y);
    let z = document.createElement("p");
    z.innerHTML = "Pontos: " + a[i].points;
    obj.appendChild(z);
}

function startRandom() {
	let x = document.querySelector("input[name='mode']:checked");
	if (x.value == "none") {
		let y = document.querySelector("input[name='pers']");
		x.value = y.value;
	}

	let playerA = Object.create
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



/*let x = returnType()
setSpeed(x);
console.log(x.round);

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
}*/

//let y = new Car();
//y.setSpeed();
