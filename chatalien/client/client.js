Template.messages.messages = function (){ //<template name="messages"> Ese messages es el primero. El segundo es el del #each messages.
	return Messages.find({}, {sort: {time:1}}); //Aquí buscamos dentr del models.js el Messages y devolvemos todos los mensajes ordenados por tiempo.
};
Template.input.events = {
	'keydown input#message' : function (event){
		if (event.which == 13) { //Este es el enter
			if (Meteor.user())
				var name = Meteor.user().username;
			else
				var name = 'Anonymous';
			var message = $("#message"); // Este message es el de id="message" en el input type text.
			if (message.val() != ''){ //Aquí comprobamos si el campo messages tiene algo o estñá vacío
				Messages.insert({
					name: name,
					message: message.val(),
					time: Date.now()
				});
				message.val('');
			}
		}
	}
};

Accounts.ui.config({
	passwordSignupFields:
		'USERNAME_AND_OPTIONAL_EMAIL'
});
