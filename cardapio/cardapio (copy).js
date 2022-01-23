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
	document.querySelector(".final").appendChild(x);
}