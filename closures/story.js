function zoom() {
	let sizes = {
		title: 30,
		text: 20,
	}

	return {
		current: function() {
			return sizes["text"] + "px";
		},

		increase: function() {
			sizes["text"] += 10;
			sizes["title"] += 5;
			return sizes;
		},
		decrease: function() {
			sizes["text"] -= 10;
			sizes["title"] -= 5;
			return sizes;
		}
	}
}

let z = zoom();
let ps = document.querySelectorAll("p");
let visor = document.querySelector("span");
visor.innerHTML = z.current();

function increase() {
	tam = z.increase();
	let title = document.querySelector("h1");
	title.style.fontSize = tam["title"] + "px";
	ps.forEach((obj) => {
		obj.style.fontSize = tam["text"] + "px";
	});
	visor.innerHTML = z.current();
}

function decrease() {
	tam = z.decrease();
	let title = document.querySelector("h1");
	title.style.fontSize = tam["title"] + "px";
	ps.forEach((obj) => {
		obj.style.fontSize = tam["text"] + "px";
	});
	visor.innerHTML = z.current();
}