var args = process.argv;
var flagsPresent = [];
 args.forEach(function(item) {
 	if (item === '--sum' || item === '--product') {
 		flagsPresent.push(item);
 	}
 });

if (flagsPresent === 1) {
	throw "NOOOOOOOT ENOGUHF ALGSTS"
}


var isNumber = function(x) {
	return !isNaN(parseFloat(x));
}

var numbers = args.filter(isNumber).map(parseFloat);
var result;

if (flagsPresent[0] === '--sum') {
	result = numbers.reduce(function(a,	b) {return a + b});
}

if (flagsPresent[0] === '--present') {
	result = numbers.reduce(function(a,b) {return a*b});
}
console.log("result is ", result);