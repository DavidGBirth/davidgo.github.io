function includeInArray(...elements) {
	const array = [];
	elements.forEach((elem) => {
		array.push(elem);
	});
	return array;
}


let arrayExample = includeInArray("a", "b", "c", "d", "e", "f");
console.log(`Primero exemplo com 6 elementos: [${arrayExample}]`);
arrayExample = includeInArray("a", "b", "c", "d", "e", "f", "g", "h", "i", "j");
console.log(`Segundo exemplo com 10 elementos: [${arrayExample}]`);