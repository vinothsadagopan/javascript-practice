var person = {
	firstname:'Vinoth',
	lastname:'Kumar',
	getFullName: function() {
		var fullname= this.firstname+' '+this.lastname;
		return fullname;
	}
}

var logName= function(lang1, lang2) {
	console.log('Logged: '+this.getFullName());
	console.log('Arguements: '+lang1+' '+lang2);
	console.log('----------------');

}
var logPersonName = logName.bind(person);
logPersonName('en','es');
logName.call(person,'en','es');
logName.apply(person,['en','es']);
// Instantly Invoked Functions
(function(lang1,lang2){
	console.log('Instantly Invoked and Logged: '+this.getFullName());
	console.log('Arguements: '+lang1+' '+lang2);
	console.log('----------------');

}).apply(person,['en','es']);

// Function borrowing: Using function of other objects to an object you are intending to use.
var person2 = {
	firstname:'Jayalakshmi',
	lastname:'Sadagopan'
};
console.log(person.getFullName.apply(person2));

//Function Currying: creating a copy of a function with some preset parameters.
function multiply(a,b) {
	return a*b;
}
var multiplyByTwo = multiply.bind(this,2);
console.log(multiplyByTwo(4));
var multiplyByThree = multiply.bind(this,3);
console.log(multiplyByThree(4));