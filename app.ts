function add(n1: number, n2: number): number {
	return n1 + n2;
}

function printResult(num: number): void {
	//undefined need return;
	console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
	const result = n1 + n2;
	cb(result);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;
//the variable's name doesn't matter
//there is also function type

combineValues = add;
//combineValues = printResult;
//combineValues = 5;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
	console.log(result);
	//return result;
});
