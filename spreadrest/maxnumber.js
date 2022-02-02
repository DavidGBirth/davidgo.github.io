function maxNumber() {
	const array = [];
	
	function returnNumber() {
		return Math.floor(Math.random() * (100 - 1) + 1);
	}

	let i = 0;
	while (i < 10) {
		let temp = returnNumber();
			if (array.includes(temp)) {
				continue;
			} else {
				array.push(temp);
				i++;
			}
	}
	console.log(`A array aleatória gerada é [${array}]`);
	return Math.max(...array);
}



const maxValue = maxNumber();
console.log(`O maior número é: ${maxValue}`);