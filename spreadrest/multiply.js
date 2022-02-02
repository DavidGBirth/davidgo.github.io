function multiply(w, x, y, z) {
	return w * x * y * z;
}

const numbers = [2, 3, 4, 5];
console.log(`A array a ser multiplicada é: [${numbers}]`)
const result = multiply(...numbers);
console.log(`O produto da multiplicação é: ${result}`);