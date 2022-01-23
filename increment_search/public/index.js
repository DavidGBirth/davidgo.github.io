let nameInput = document.querySelector("input[name='nome']");
let emailInput = document.querySelector("input[name='email']");
let timeoutID;

nameInput.addEventListener('input', function () {
	let name = nameInput.value;

	if (name.length < 3) {
		insertSelect([], "names");
		document.getElementById("names").className = "";
		return;
	}

	clearTimeout(timeoutID);

	timeoutID = setTimeout(function () {
		let promisse = fetch(`/users?name=${name}`)
		promisse.then(response => response.json())
		.then(users => {
			if (nameInput.value.length >= 3) {
				insertSelect(users, "names");
			} else {
				clearTimeout(timeoutID);				
			}
		});
	}, 1000);
});

emailInput.addEventListener('input', function () {
	let email = emailInput.value;

	if (email.length < 3) {
		insertSelect([], "emails");
		document.getElementById("emails").className = "";
		return;
	}

	clearTimeout(timeoutID);

	timeoutID = setTimeout(function () {
		let promisse = fetch(`/users?name=${email}`)
		promisse.then(response => response.json())
		.then(emails => {
			insertSelect(emails, "emails");
		});
	}, 1000);
});

function insertSelect(list, id) {
	let options, type;
	if (id == "names") {
		type = "name";
	} else if (id == "emails") {
		type = "email";
	}
	list.sort(function(a, b){
	    if(a[type] < b[type]) { return -1; }
	    if(a[type] > b[type]) { return 1; }
	    return 0;
	});
	options = list.map(function (obj) {
		return `<option value="${obj[type]}">${obj[type]}</option>`
	});
	let x = document.getElementById(id);
	//x.innerHTML = "<option selected></option>";
	x.innerHTML = options;
	x.size = list.length;
	x.className = "change";
	//x.style.visibility = "visible";
}

function updateName() {
	let select = document.getElementById("names");
	let value = select.options[select.selectedIndex].text;
	nameInput.value = value;
	select.className = "";
}

function updateEmail() {
	let select = document.getElementById("emails");
	let value = select.options[select.selectedIndex].text;
	emailInput.value = value;
	select.className = "";
}

function show(obj) {
	let d = document.querySelector(".result");
	let s = document.createElement("section");
	let id = document.createElement("p");
	id.innerHTML = "ID: " + obj.id;
	let nome = document.createElement("p");
	nome.innerHTML = "Nome: " + obj.name;
	let email = document.createElement("p");
	email.innerHTML = "Email: " + obj.email;
	s.append(id);
	s.append(nome);
	s.append(email);
	d.append(s);
}

function noneFound() {
	let d;
	if (document.querySelector(".result")) {
		d = document.querySelector(".result");
		d.innerHTML = "";
	} else {
		let b = document.querySelector("body");
		d = document.createElement("div");
		d.classList.add("result");
		b.append(d);
	}
	let none = document.createElement("p");
	none.innerHTML = "Nenhum usuário com essas informações foi encontrado.";
	d.append(none);
}

function clicked() {
	let id = parseInt(document.querySelector("input[name='id']").value);
	let nome = document.querySelector("input[name='nome']").value;
	let email = document.querySelector("input[name='email']").value;
	fetch(`/users?id=${id}&name=${nome}&email=${email}`)
	.then(resposta => resposta.json())
	.then(users => {
		if (users.length == 0) {
			noneFound();
		} else {
			console.log(typeof users);
			if (document.querySelector(".result")) {
				d = document.querySelector(".result");
				d.innerHTML = "";
			} else {
				let b = document.querySelector("body");
				d = document.createElement("div");
				d.classList.add("result");
				b.append(d);
			}
			users.forEach(obj => {
				show(obj);
			});
		}
		//console.log(user);
	});
}