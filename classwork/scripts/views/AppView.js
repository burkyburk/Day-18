var AppView = Backbone.View.extend({
	el: '#app-view',
	initialize: function() {
		console.log('Hello Backbone! How you be doin?!');
		console.log(this.el);
		console.log(this.$el);

		this.$textBox = $('#text-box');

		this.$textBox.on('keyup', this.onTextBoxKeyUp);
	},

	onTextBoxKeyUp: function(e) {
		console.log(e.which);

	}

});
