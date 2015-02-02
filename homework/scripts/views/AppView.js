var AppView = Backbone.View.extend({
	el: '#app-view',
	initialize: function() {
	var greeting = confirm('Welcome to the Guess-a-Number game! Press OK to get started.');


if (greeting === false) {
    x = "You pressed OK!";
} else {
    x = "";

var play = "yes";
while (play === "yes" || play === "y" || play === "Yes" || play === "YES") {
    var num = Math.ceil(Math.random() * 10);
    var firstmessageshown = false;
    var answer = false;
	



while (answer !== num)	{

	
	console.log(answer);
	console.log(num);
	console.log(typeof answer);
	console.log(typeof num);
	
	if (firstmessageshown === true) {
		 answer = parseInt(window.prompt('Guess again.'));
	}
	else {
		answer = parseInt(window.prompt('Let\'s play! Guess a number between 1 and 100.'));
		firstmessageshown === true;
	}

    if (answer === num) {
        alert('Correct-a-mundo! Congrats, you win!');
    } 
    else if (answer > num) {
		alert('You guessed too high.');
    }
    else if (answer < num) {
        alert('You guessed too low.');
    }
    else {
        alert('Please enter a number between 1 and 100.');
    }
}
	play = window.prompt('Play Again? Type yes or no.');

}
}
}

});
