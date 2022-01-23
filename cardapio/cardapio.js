let paes = document.getElementsByName("pao");
let hamburguers = document.getElementsByName("hamb");
let saladas =  document.getElementsByName("salada");
let queijos = document.getElementsByName("queijo");


let paesDict = {
	"fr": 3,
	"brio": 6,
	"aus": 8
}

let hamburguersDict = {
	"cost": 10,
	"vegan": 12,
	"pic": 13
}

let saladasDict = {
	"alf": 1.5,
	"tom": 1.5,
	"nosal": 0
}

let queijosDict = {
	"muss": 3,
	"prat": 3,
	"ched": 5
}

function findChecked(list, itemDict) {
	let key;
	let result;
	for(let i = 0; i < list.length; i++) {
		if (list[i].checked) {
			key = list[i].value;
			break;
		}
	}
	if (key == undefined) {
		result = 0;
		return result;
	}
	result = itemDict[key];
	return result;
}


let result = parseFloat(0);

function paoPrice(type) {
	if (type == "fr") {
		result += 3;
	} else if (type == "brio") {
		result += 6;
	} else if (type == "aus") {
		console.log("ok");
		result += 8;
	}
}

function hambPrice(type) {
	if (type == "cost") {
		result += 10;
	} else if (type == "vegan") {
		result += 12;
	} else if (type == "pic") {
		result += 13;
	}
}

function salPrice(type) {
	console.log("salada ok");
	console.log(type);
	if (type == "alf") {
		result += 1.5;
	} else if (type == "tom") {
		result += 1.5;
	} else {
		result += 0;
	}
}

function queijoPrice(type) {
	if (type == "muss") {
		result += 3;
	} else if (type == "prat") {
		result += 3;
	} else if (type == "ched") {
		result += 5;
	}
}

function othertest() {
	let pao = document.querySelector("input[name='pao']:checked");
	let hamb = document.querySelector("input[name='hamb']:checked");
	let salada = document.querySelector("input[name='salada']:checked");
	let queijo= document.querySelector("input[name='queijo']:checked");
	if (pao != null) {
		paoPrice(pao.value);
	}
	if (hamb != null) {
		hambPrice(hamb.value);
	}
	if (salada != null) {
		salPrice(salada.value);
	}
	if (queijo != null) {
		queijoPrice(queijo.value);
	}
	let x = document.createElement("p");
	x.innerHTML = "O total do seu pedido é: R$ " + result.toFixed(2);
	document.querySelector(".prepedido").appendChild(x);
	let y = document.createElement("button");
	y.innerHTML = "Finalizar Pedido";
	y.type = "submit";
	y.id = "submit";
	document.querySelector(".final").appendChild(y);
	document.querySelector(".final").scrollIntoView();
}

function teste() {
	let result;
	/*let key;
	for(let i = 0; i < list.length; i++) {
		console.log(list[i].value);
		if (list[i].checked) {
			key = list[i].value;
			break;
		}
	}
	result = itemDict[key];*/
	result = findChecked(paes, paesDict);
	result += findChecked(hamburguers, hamburguersDict);
	result += findChecked(saladas, saladasDict);
	result += findChecked(queijos, queijosDict);
	let x = document.createElement("p");
	x.innerHTML = "O total do seu pedido é: R$ " + result.toFixed(2);
}