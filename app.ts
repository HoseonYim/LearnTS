function add(n1: number, n2: number): number {
	return n1 + n2;
}

function printResult(num: number): void {//undefined need return;
	console.log('Result: ' + num);
}

console.log(printResult(add(5, 12)));
