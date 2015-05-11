$(document).ready(function() {

var input = prompt("Guess a number between 1 and 100")

addList();

	function addList() {
	
		for (var i=1; i <= input; i++) {
    
			if (i % 3 == 0 && i % 5 == 0) {
				console.log("FizzBuzz");
				$('.list').append('<p>FizzBuzz</p>');
			}
    
			else if (i % 3 == 0) {
				console.log("Fizz");
				$('.list').append('<p>Fizz</p>');
			}
    
			else if (i % 5 == 0) {
				console.log("Buzz");
				$('.list').append('<p>Buzz</p>');
			}
	
			else {
				console.log(i);
				$('.list').append('<p>' + i + '</p>');
			}
		}
	}	
	

});
