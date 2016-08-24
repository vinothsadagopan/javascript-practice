function person(firstname, lastname ) {
	this.firstname=firstname;
	this.lastname=lastname;
	console.log(this.firstname + ' ' +this.lastname);
}

var vinoth = new person('Vinoth', 'Kumar');
console.log(vinoth);
