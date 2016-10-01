/*
 * File Name: main.js
 * Description: Drives dogOrNah
 */

/*
 * Function Name: main()
 */

function main() {
  
  var userScore = 0; // keeps track of user's score
  var randomIndex = 0; // random index to determine photo
  var picture = 'dogOrNahPic'; // start of string for picture's name
  var dog = false; // if the picture is actually a dog
  var correct = true; // if the user guessed correctly

  // Game keeps running as long as mistakes aren't made
  while (correct) {
    
    // chooses a random number to determine random picture
    randomIndex = Math.floor(Math.random() * NUM_OF_PICS);

    var randomPic = picture + randomIndex + '.jpg';

    if (randomIndex < 30) {
    	dog = true;
    }
    else {
    	dog = false;
    }
    // DISPLAY PICTURE
    // MAKE THE CORRECT VARIABLE ACTUALLY
    checkKey();
    // if guess is incorrect, exits loop  
  
    userScore++;
  }

function checkKey() {    // ALLOW ARROW KEY INTERACTION    
    $(document).keydown(function(event) {
	switch(event.which) {
		// left arrowkey 
		case 37:
			if (dog) {
				console.log("CORRECT - IT'S A DOG");
			}
			else {
				console.log("U WRONG - NOT A DOG");
				correct = false;
			}
			break;
		// right arrowkey
		case 39:
			if (!dog) {
				console.log("CORRECT - NOT DOG");
			}
			else {
				console.log("U WRONG - IS DOG);
				correct = false;
			}
			break;
		// exit for other keys pressed
		default:
			return;
	}
	event.preventDefault();
    });
};


}
