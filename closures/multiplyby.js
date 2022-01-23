function createMultiplier(num) {
	var x = num;
	return function multiply(y) {
		return x * y;
	}
	return multiply;
}

let multiplyBy5 = createMultiplier(5);

console.log(multiplyBy5(10));
//50

console.log(multiplyBy5(12));
//60

console.log(multiplyBy5(7));
//35