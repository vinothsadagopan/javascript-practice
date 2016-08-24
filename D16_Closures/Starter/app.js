function greet(whattosay) {
	return function(name) {
		console.log(whattosay+' '+name);
	}
}
var greetings = greet('Hello');
greetings('Vinoth');