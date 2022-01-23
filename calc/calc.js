let valueA;
let valueB;
let operation = '';
let x = document.createElement("span");

function op(type) {
	let checker = document.querySelector(".selected");
	valueA = parseInt(document.querySelector("form").elements["num-a"].value);
    valueB = parseInt(document.querySelector("form").elements["num-b"].value);
	console.log(valueA);
    console.log(valueB);
    if (checker != null) {
    	checker.className = '';
    }
    document.getElementById(type).className = "selected"
    operation = type;
}

document.querySelector("form").addEventListener("submit", function finish() {
	let result;
    if (operation == 'add') {
    	result = valueA + valueB;
        x.innerHTML = result;
        console.log(result);
    }
    if (operation == 'sub') {
        result = valueA - valueB;
        x.innerHTML = result;
    }
    if (operation == 'mult') {
        result = valueA * valueB;
        x.innerHTML = result;
    }
    if (operation == 'divide') {
        result = valueA / valueB;
        x.innerHTML = result;
    }
	document.querySelector(".container").appendChild(x);
})