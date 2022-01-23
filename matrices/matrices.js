window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

var turn = "circle";
var turns = 0;
var a = [
	['', '', ''],
	['', '', ''],
	['', '', ''],
];

function printArray() {
	console.log(a[0]);
	console.log(a[1]);
	console.log(a[2]);
}

function getMove(id) {
	let x = document.getElementById(id);
	let image = document.createElement("img");
	let y = id.split("");
	let i, j;
	i = Number(y[1]);
	j = Number(y[2]);
	a[i][j] = turn;
	if (turn == "circle") {
		image.src = "imgs/circle.svg";
		x.appendChild(image);
		turns++;
		printArray()
		if (turns > 4) {
			check(turn);
		}
		turn = "cross";
	} else {
		image.src = "imgs/cross.svg";
		x.appendChild(image);
		turns++;
		printArray();
		if (turns > 4) {
			check(turn);
		}
		turn = "circle";
	}
	
}

function check(thisTurn) {
	let count = 0;
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if (a[i][j] == thisTurn) {
				count++;
				if (count == 3) {
					finish(thisTurn);
					return;
				}
			} else {
				count = 0;
				console.log("qua qua qua " + count);
				break;
			}
		}
	}
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if (a[j][i] == thisTurn) {
				count++;
				if (count == 3) {
					finish(thisTurn);
					return;
				}
			} else {
				count = 0;
				break;
			}
		}
	}
	for (let i = 0; i < 3; i++) {
		if (a[i][i] == thisTurn) {
				count++;
				if (count == 3) {
					finish(thisTurn);
					return;
				}
			} else {
				count = 0;
				break;
			}
	}
	if (a[1][1] == thisTurn) {
		count++;
		if (a[2][0] == thisTurn && a[0][2] == thisTurn) {
			finish(thisTurn);
			return;
		} else {
			count = 0;
			return;
		}
	}
}

function finish(thisTurn) {
	let x = document.createElement("p");
	x.innerHTML = thisTurn.toUpperCase() + " ganhou essa partida!!!";
	let y = document.querySelector(".result");
	y.appendChild(x);
	let z = document.createElement("button");
	z.innerHTML = "Nova Partida";
	z.onclick = function() {
		window.top.location.reload();
	};
	y.appendChild(z);
	z.scrollIntoView();
	return;
}