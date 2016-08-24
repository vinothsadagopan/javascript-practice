(function(global, $) {
    
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);   
    }
    var supportedLangs=['en','es'];
	var greetings = 	{
		en:'Hello',
		es:'Hola'
	};
	var formalGreetings = {
		en:'Greetings',
		es:'Saludos'
	};
	var logMessages= {
		en:'Logged into',
		es:'Inició sesión'
		
	};
	
    Greetr.prototype = {
		fullName: function() {
			return this.firstNme+' '+this.lastName;
		},
		validate:function() {
			if(supportedLangs.indexOf(this.language)===-1) {
				throw "Invalid Language";
			}
		},
		greeting:function() {
			return greetings[this.language]+' '+this.firstName+'!';
		},
		formalGreeting:function() {
			return formalGreetings[this.language]+' '+this.fullName();
		},
		greet:function(formal) {
			if(formal) {
				return this.formalGreeting();
			}
			else {
				return this.greeting();
			}
			if(console) {
				console.log(msg);
			}
			return this;
		},
		log: function() {
			if(console) {
				return logMessages[this.language]+' '+this.fullName();
			}
			return this;
		},
		setLang: function(lang) {
			this.language = lang;
			this.validate();
			return this;
		}
	};
    
    Greetr.init = function(firstName, lastName, language) {
        
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
        
    }
    
    Greetr.init.prototype = Greetr.prototype;
    
    global.Greetr = global.G$ = Greetr;
    
}(window, jQuery));