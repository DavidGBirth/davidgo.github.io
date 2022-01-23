const info = {
	"name": "",
	"venc": new Date(),
	"valueC": 0.00,
	"mora": 0.00
};

function calcMora() {
	document.querySelector("tbody").innerHTML = "";
	document.querySelector("thead").innerHTML = "<tr><th>#</th><th>Nome</th><th>Data de Vencimento</th><th>Valor da Compra</th><th>Mora</th></tr>";
	let x = arrayValues.map(function(item, index) {
		let y = getDifference(item.venc);
		console.log(y);
		if (y > 0) {
			item.mora += item.valueC * 0.02;
			item.mora += (item.valueC * 0.001) * y;
			console.log(item.mora);
		}
		return "<tr><td>" + (index + 1) + "</td><td>" + item.name + "<td>" + item.venc.getDate() + "/" + (item.venc.getMonth() + 1)+ "/" + item.venc.getFullYear() + "</td><td>R$ " + item.valueC + "</td><td>R$ " + parseFloat(item.mora).toFixed(2) + "</td></tr>"
	});
	document.querySelector("tbody").innerHTML = x.join("");
}

function getDifference(w) {
	let x = w;
	let today = new Date();
	let y = today - x;
	let z = Math.floor(y / (1000 * 3600 * 24));
	return z;
}

function getDateForm() {
	let venc = document.getElementById("venc").value;
	document.querySelector("thead").innerHTML = "<tr><th>#</th><th>Nome</th><th>Data de Vencimento</th><th>Valor da Compra</th></tr>";

	let moment = venc.split("-");
	return new Date(moment[0], moment[1] - 1, moment[2]);
	//console.log()
}

let arrayValues = [];
function addTable() {
	let x = Object.create(info);
	x.name = document.getElementById("name").value;
	x.venc = getDateForm();
	x.valueC = parseFloat(document.getElementById("valueC").value);
	arrayValues.push(x);
	genTable(arrayValues);
}

function genTable(arrayValues) {
	document.querySelector("thead").innerHTML = "<tr><th>#</th><th>Nome</th><th>Data de Vencimento</th><th>Valor da Compra</th></tr>";
	let y = arrayValues.map(function(item, index) {
		return "<tr><td>" + (index + 1) + "</td><td>" + item.name + "<td>" + item.venc.getDate() + "/" + (item.venc.getMonth() + 1)+ "/" + item.venc.getFullYear() + "</td><td>R$ " + item.valueC + "</td></tr>"
	});
	console.log(y);
	document.querySelector("tbody").innerHTML = y.join("");
	if (document.querySelector(".menu button") == null) {
		let z = document.createElement("button");
		z.innerHTML = "Calcular";
		z.setAttribute('onclick', 'calcMora()');
		document.querySelector(".menu").appendChild(z);
	}
	document.getElementById("name").value = "";
	document.getElementById("venc").value = "";
	document.getElementById("valueC").value = "";
}