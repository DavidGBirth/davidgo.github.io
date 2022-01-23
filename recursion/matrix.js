function showElements(m, n, i) {
	let x;
	if (!n) {
		n = 0;
	} else if (n >= m.length) {
		return;
	}
	x = m[n]
	if (!i) {
		i = 0;
		console.log(x[i]);
		showElements(m, n, i + 1);
	} else if (i < x.length) {
		console.log(x[i]);
		showElements(m, n, i + 1);
	} else {
		showElements(m, n + 1);
	}
}

var letters = [
	['a', 'b', 'c', 'd', 'e', 'f'],
	['g', 'h', 'i', 'j', 'k', 'l'],
	['m', 'n', 'o', 'p', 'q', 'r'],
	['s', 't', 'u', 'v', 'w', 'x'],
];


console.log(letters);
showElements(letters);