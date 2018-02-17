// Single line
/*
	Multi line comments
*/
// IIFE - Immediately-Invoked Function Expression
// All our code should exist in the Anonymous Function
(function(){
	"use strict"; // Activates Strict Mode of the browser
	
	// Create JS Objects (Variables) of various HTML Nodes (elements)
	// Plain Old JavaScript way to do it:
	// var elFormSignUp = document.getElementById("formSignUp");
	// The jQuery way to do it:
	var $elFormSignUp = $("#formSignUp"),
		$elPopErrorSignUpMismatch = $("#popErrorSignUpMismatch"),
		$elPopErrorSignUpExists = $("#popErrorSignUpExists");
	/*
		After creating a jQuery-based Variable, you cannot, then,
		use Plain Old JavaScript Methods (commands) on them.
		And vice-versa. So, it's good practice to add $ in front of the var
		to denote this! We use jQ for its ubiquity, and it's compact,
		updated constantly, great standard.
	*/

	// After a person Submits the Sign Up form, perform more actions
	// Create a function that runs after the person clicks Submit
	// No ending ; necessary. Pass in an event Parameter
	function fnSignUp(event) {
		// Prevent the default behavior of refreshing the screen
		event.preventDefault();
		console.log("We clicked Sign Up");
		
		// Create Objects based on HTML Nodes
		var $elInEmailSignUp = $("#inEmailSignUp"),
			$elInPasswordSignUp = $("#inPasswordSignUp"),
			$elInPasswordConfirmSignUp = $("#inPasswordConfirmSignUp");
		// Console output to show what the value of those
		// fields are, using the jQ Method .val()
		console.log("Email: " + $elInEmailSignUp.val());
		console.log("PW: " + $elInPasswordSignUp.val());
		console.log("Confirm PW: " + $elInPasswordConfirmSignUp.val());
		
		// Conditional Statement to check if passwords match, or not
		if($elInPasswordSignUp.val() !== $elInPasswordConfirmSignUp.val()) { 
			// If something is TRUE, execute the code in this block
			console.log("Passwords DON'T MATCH!");
			// Make a jQM popup appear on-screen.
			// First, initialize it, then show it on screen with options
			$elPopErrorSignUpMismatch.popup();
			$elPopErrorSignUpMismatch.popup("open", {"transition":"flip"});
			// Then clear out the fields, but writing NOTHING into them
			// .val() jQ Method can be used to read or write data
			$elInPasswordSignUp.val("");
			$elInPasswordConfirmSignUp.val("");
		} else {
			// Or, else, it's FALSE, so execute code in this block
			console.log("Password DO match!!!");
			// Temporary copies of their emai/pw that have been turned Uppercase
			var tmpValInEmailSignUp = $elInEmailSignUp.val().toUpperCase(),
				tmpValInPasswordSignUp = $elInPasswordSignUp.val().toUpperCase();
				
			// Using HTML5 LocalStorage, we can save data to the user's device
			// in a sort of "Cookie" manner. 
			// localStorage.setItem("username", "janet");
			localStorage.setItem(tmpValInEmailSignUp, tmpValInPasswordSignUp);
		} // END If..Else statement
	} // END fnSignUp()
	
	// Plain old javascript:
	// elFormSignUp.addEventListener("submit");
	// Modern jQuery way:
	$elFormSignUp.submit(function(event){fnSignUp(event)});
})();









