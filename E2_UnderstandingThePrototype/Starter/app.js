var person = {
	firstname:'default',
	lastname:'default',
	getFullName: function() {
		return this.firstname+' '+this.lastname;
	}
}

var vinoth = {
	firstname:'Vinoth Kumar',
	lastname:'Sadagopan'

}
// Never do this kind of coding

vinoth.__proto__= person;
console.log(vinoth.getFullName());