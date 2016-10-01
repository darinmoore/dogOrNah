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
  var dog = false;

  // Game keeps running as long as mistakes aren't made
  while (true) {
    
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
    // ALLOW ARROW KEY INTERACTION    
    $(document).keydown(function(event) {
	switch(event.which) {
		// left arrowkey 
		case 37:
			if (dog) {
				console.log("CORRECT - IT'S A DOG");
			}
			else {
				console.log("U WRONG - NOT A DOG");
			}
			break;
		// right arrowkey
		case 39:
			if (!dog) {
				console.log("CORRECT - NOT DOG");
			}
			else {
				console.log("U WRONG - IS DOG);
			}
			break;
		// exit for other keys pressed
		default:
			return;
	}
	event.preventDefault();
    });

    // MAKE THE CORRECT VARIABLE ACTUALLY

    // if guess is incorrect, exits loop  
    if (!correct) {
      break;
    }
    userScore++;
  }



}
