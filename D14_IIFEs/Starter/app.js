
// function statement
function greetFunc(name) {
	console.log('Hello '+name);
}
// function expression
greetFunc('Vinoth');

var greet = function(name) {
	console.log('Hello '+name);
}
greet('vinoth');

// Instantly Invoked Function Expression(IIFE)

var greet2 = function(name) {
	return 'Hello '+name;
}('Vinoth');
console.log(greet2);

(function greetings(name) {
	var greet = 'Inside IIFE : Hello';
	console.log(greet+' '+name);
}()); //IIFE