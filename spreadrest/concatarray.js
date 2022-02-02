function concatArrays(a, b) {
	return [...a, ...b];
}

const arrayA = ['a', 'b', 'c', 'd', 'e'];
const arrayB = ['f', 'g', 'h', 'i', 'j'];
console.log(`Os arrays a serem concatenados são [${arrayA}] e [${arrayB}]`);
const newArray = concatArrays(arrayA, arrayB);
console.log(`O resultado da concatenação é: [${newArray}]`);