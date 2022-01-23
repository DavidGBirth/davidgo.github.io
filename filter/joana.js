const info = {
	"name": "",
	"venc": new Date(),
	"valueC": 0.00,
	"mora": 0.00
};

const sum = {
	"name": "",
	"nDebts": 0,
	"totalValue": 0.00,
	"totalFees": 0.00
}

const sumDate = {
	"date": new Date(),
	"nDebts": 0,
	"totalValue": 0.00,
	"totalFees": 0.00
}

let check = true;

function calcMora() {
	document.querySelector(".right-body").innerHTML = "";
	document.querySelector(".right-head").innerHTML = "<tr><th>#</th><th>Nome</th><th>Data de Vencimento</th><th>Valor da Compra</th><th>Mora</th></tr>";
	//console.log(arrayValues);
	if (check) {
		arrayValues.forEach((item) => {
			let y = getDifference(item.venc);
			if (y > 0) {
				item.mora += item.valueC * 0.02;
				item.mora += (item.valueC * 0.001) * y;
			}
		});
	}
	check = false;
	let x = arrayValues.map(function(item, index) {
		return "<tr><td>" + (index + 1) + "</td><td>" + item.name + "<td>" + getDateText(item.venc) + "</td><td>R$ " + item.valueC + "</td><td>R$ " + parseFloat(item.mora).toFixed(2) + "</td></tr>"
	});
	document.querySelector(".right-body").innerHTML = x.join("");
	check = false;
}

function groupBy(original, property) {
	return original.reduce(function(initial, obj) {
		const key = obj[property];
		if (!initial[key]) {
			initial[key] = [];
		}
		initial[key].push(obj);
		//console.log(initial);
		return initial;
	}, []);
}



function groupByName() {
	if (check) {
		arrayValues.forEach((item) => {
			let y = getDifference(item.venc);
			if (y > 0) {
				item.mora += item.valueC * 0.02;
				item.mora += (item.valueC * 0.001) * y;
			}
		});
	}
	let groupedByName = groupBy(arrayValues, "name");
	//groupedByName.sort();
	//console.log(groupedByName);
	//console.log(groupedByName["Joana"]);
	let keys = Object.keys(groupedByName);
	keys.sort()
	console.log(keys);
	let secArray = [];
	//let init = 0.00;
	let arraySum = [];
	keys.forEach((element) => {
		console.log(element);
		let auxArray = groupedByName[element];

		let customer = Object.create(sum);
		//arraySum[element]
		customer.name = element;
		//let customer = 
		//customer.name = element;
		customer.nDebts = auxArray.reduce(function (initial, elem) {
					return initial + 1;
				}, 0);
		customer.totalValue = auxArray.reduce(function (initial, elem) {
					return initial + elem.valueC;
				}, 0);
		customer.totalFees = auxArray.reduce(function (initial, elem) {
					return initial + elem.mora;
				}, 0);
		arraySum.push(customer);
		//console.log(customer);
		//console.log(arraySum);
		if (auxArray.length > 1) {
			auxArray.forEach((item, index) => {
				secArray.push(item);
			});
		} else {
			secArray.push(auxArray[0]);
		}
	});
	document.querySelector(".right-body").innerHTML = "";
	document.querySelector(".right-head").innerHTML = "<tr><th>#</th><th>Nome</th><th>Data de Vencimento</th><th>Valor da Compra</th><th>Mora</th></tr>";
	console.log(secArray);
	let x = secArray.map(function(item, index) {
		return "<tr><td>" + (index + 1) + "</td><td>" + item.name + "<td>" + getDateText(item.venc) + "</td><td>R$ " + item.valueC + "</td><td>R$ " + parseFloat(item.mora).toFixed(2) + "</td></tr>"
	});
	document.querySelector(".right-body").innerHTML = x.join("");
	document.querySelector("tbody").innerHTML = x.join("");
	document.querySelector(".left-side tbody").innerHTML = "";
	document.querySelector(".left-side thead").innerHTML = "<tr><th>#</th><th>Nome</th><th>Nº de dívidas</th><th>Valor Total</th><th>Total de Juros</th></tr>";
	//console.log(arraySum);
	let z = arraySum.map(function(item, index) {
		//let key = keys[index];
		return "<tr><td>" + (index + 1) + "</td><td>" + item.name + "<td>" + item.nDebts + "</td><td>R$ " + item.totalValue + "</td><td>R$ " + parseFloat(item.totalFees).toFixed(2) + "</td></tr>"
	});
	document.querySelector(".left-side tbody").innerHTML = z.join("");
}

function groupByDate() {
	if (check) {
		arrayValues.forEach((item) => {
			let y = getDifference(item.venc);
			if (y > 0) {
				item.mora += item.valueC * 0.02;
				item.mora += (item.valueC * 0.001) * y;
			}
		});
	}
	let groupedByDate = groupBy(arrayValues, "venc");
	//groupedByName.sort();
	console.log(groupedByDate);
	//console.log(groupedByName["Joana"]);
	let keys = Object.keys(groupedByDate);
	console.log(typeof keys[0]);
	keys.reverse()
	console.log(keys);
	let secArray = [];
	let arraySum = [];
	keys.forEach((element) => {
		console.log(element);
		let auxArray = groupedByDate[element];
		let dateDebt = Object.create(sumDate);
		//console.log(typeof element);
		dateDebt.date = auxArray[0].venc;
		//console.log(typeof dateDebt.date);
		//let customer = 
		//customer.name = element;
		dateDebt.nDebts = auxArray.reduce(function (initial, elem) {
					return initial + 1;
				}, 0);
		dateDebt.totalValue = auxArray.reduce(function (initial, elem) {
					return initial + elem.valueC;
				}, 0);
		dateDebt.totalFees = auxArray.reduce(function (initial, elem) {
					return initial + elem.mora;
				}, 0);
		arraySum.push(dateDebt);
		//console.log(customer);
		//console.log(arraySum);
		if (auxArray.length > 1) {
			auxArray.forEach((item, index) => {
				secArray.push(item);
			});
		} else {
			secArray.push(auxArray[0]);
		}
	});
	document.querySelector(".right-body").innerHTML = "";
	document.querySelector(".right-head").innerHTML = "<tr><th>#</th><th>Nome</th><th>Data de Vencimento</th><th>Valor da Compra</th><th>Mora</th></tr>";
	console.log(secArray);
	let x = secArray.map(function(item, index) {
		return "<tr><td>" + (index + 1) + "</td><td>" + item.name + "<td>" + getDateText(item.venc) + "</td><td>R$ " + item.valueC + "</td><td>R$ " + parseFloat(item.mora).toFixed(2) + "</td></tr>"
	});
	document.querySelector(".right-body").innerHTML = x.join("");
	document.querySelector("tbody").innerHTML = x.join("");
	document.querySelector(".left-side tbody").innerHTML = "";
	document.querySelector(".left-side thead").innerHTML = "<tr><th>#</th><th>Data de Vencimento</th><th>Nº de dívidas</th><th>Valor Total</th><th>Total de Juros</th></tr>";
	console.log(arraySum);
	let z = arraySum.map(function(item, index) {
		//let key = keys[index];
		return "<tr><td>" + (index + 1) + "</td><td>" + getDateText(item.date) + "<td>" + item.nDebts + "</td><td>R$ " + item.totalValue + "</td><td>R$ " + parseFloat(item.totalFees).toFixed(2) + "</td></tr>"
	});
	document.querySelector(".left-side tbody").innerHTML = z.join("");
}

function getDifference(w) {
	let x = w;
	let today = new Date();
	let y = today - x;
	let z = Math.floor(y / (1000 * 3600 * 24));
	return z;
}

function getDateText(x) {
	let str = "";
	if (x.getDate() < 10) {
		str += "0";
	}
	str += x.getDate() + "/";
	if (x.getMonth() < 10) {
		str += "0";
	}
	str += (x.getMonth() + 1) + "/";
	str += x.getFullYear();
	return str;

}

function getDateForm(ident) {
	let venc = document.getElementById(ident).value;
	//document.querySelector("thead").innerHTML = "<tr><th>#</th><th>Nome</th><th>Data de Vencimento</th><th>Valor da Compra</th></tr>";

	let moment = venc.split("-");
	return new Date(moment[0], moment[1] - 1, moment[2]);
	//console.log()
}

let arrayValues = [];
function addTable() {
	let x = Object.create(info);
	x.name = document.getElementById("name").value;
	x.venc = getDateForm("venc");
	x.valueC = parseFloat(document.getElementById("valueC").value);
	arrayValues.push(x);
	genTable(arrayValues);
}

function genTable(arrayValues) {
	console.log(arrayValues);
	document.querySelector(".right-head").innerHTML = "<tr><th>#</th><th>Nome</th><th>Data de Vencimento</th><th>Valor da Compra</th></tr>";
	let y = arrayValues.map(function(item, index) {
		return "<tr><td>" + (index + 1) + "</td><td>" + item.name + "<td>" + getDateText(item.venc) + "</td><td>R$ " + item.valueC + "</td></tr>"
	});
	document.querySelector(".right-body").innerHTML = y.join("");
	if (document.querySelector(".menu button") == null) {
		let z = document.createElement("button");
		z.innerHTML = "Calcular";
		z.setAttribute('onclick', 'calcMora()');
		document.querySelector(".menu").appendChild(z);
		let a = document.createElement("button");
		a.innerHTML = "Agrupar por cliente";
		a.setAttribute('onclick', 'groupByName()');
		document.querySelector(".menu").appendChild(a);
		let b = document.createElement("button");
		b.innerHTML = "Agrupar por data";
		b.setAttribute('onclick', 'groupByDate()');
		document.querySelector(".menu").appendChild(b);
		/*let c = document.createElement("button");
		c.innerHTML = "Filtrar por data";
		c.setAttribute('onclick', 'filterByDate()');
		document.querySelector(".menu").appendChild(c);
		d.innerHTML = "Filtrar por Valor";
		d.setAttribute('onclick', 'filterByValue()');
		document.querySelector(".menu").appendChild(d);*/
	}
	document.getElementById("name").value = "";
	document.getElementById("venc").value = "";
	document.getElementById("valueC").value = "";
}

function filterByDate() {
	let a = getDateForm("datInicio").getTime();
	//console.log(a);
	let b = getDateForm("datFim").getTime();
	//console.log(b);
	//console.log(arrayValues);
	//console.log(arrayValues[0].venc.getTime());
	let teste = arrayValues.filter((elem) => {
		//let c = elem.venc.getTime();
		//console.log(c);
		return elem.venc > a && elem.venc < b;
	});
	genTable(teste);
}

function filterByValue() {
	let a = parseFloat(document.getElementById("valInicio").value);
	let b = parseFloat(document.getElementById("valFim").value);
	let teste = arrayValues.filter((elem) => {
		return elem.valueC > a && elem.valueC < b;
	});
	//console.log(teste);
	genTable(teste);
}