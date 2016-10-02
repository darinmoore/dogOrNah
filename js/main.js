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
  var picture = '/pics/dogOrNawPic'; // start of string for picture's name
  var dog = false; // if the picture is actually a dog
  var correct = true; // if the user guessed correctly
  var NUM_OF_PICS = 46;

  // picture array that stores all the dog and food pictures
  var picArray = [];

  // loop through all pictures and add them to the array
  for (var i = 0; i < NUM_OF_PICS; i++) {
     // want to use correct path name before image
     var pic = picture + i + ".jpg";
     picArray.push(pic);
  }

  // Game keeps running as long as mistakes aren't made
  while (correct) {
    
    // chooses a random number to determine random picture
    randomIndex = Math.floor(Math.random() * NUM_OF_PICS);

    var randomPic = picArray[randomIndex];

    // Display the picture
    $(randomPic).show();

    // if the picture number is below 23, it is a dog
    if (randomIndex < 23) {
    	dog = true;
    }
    // pictures after 23 are food
    else {
    	dog = false;
    }

    // MAKE THE CORRECT VARIABLE ACTUALLY
    checkKey();
    // increase the user's score with every correct guess
    userScore++;
  }
}

function checkKey() {    // ALLOW ARROW KEY INTERACTION    
    $(document).keydown(function(event) {
		switch(event.which) {
			// left arrowkey 
			case 37:
				console.log("LEFT ARROWKEY TEST PRINT");
				if (!dog) {
					correct = false;
				}
				break;
			// right arrowkey
			case 39:
				console.log("RIGHT ARROW KEY TEST PRINT");
				if (dog) {
					correct = false;
				}
				break;
				// exit for other keys pressed
			default:
		}
		event.preventDefault();
    });
};

$(document).keydown(function(event) {
	console.log(event)
	// event listener for space bar
	if (event.which == 32) {
		$(document).empty();
	}
});