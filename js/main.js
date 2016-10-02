/*
 * File Name: main.js
 * Description: Drives dogOrNah
 */

/*
 * Function Name: main()
 */

var dog = false; // if the picture is actually a dog

function main() {

  var userScore = 0; // keeps track of user's score
  var randomIndex = 0; // random index to determine photo
  var picture = '/pics/dogOrNawPic'; // start of string for picture's name
  var correct = true; // if the user guessed correctly
  var NUM_OF_PICS = 46;

  // picture array that stores all the dog and food pictures
  var picArray = ['http://i.imgur.com/rzFbvjp.jpg', 'http://i.imgur.com/ROihO4e.jpg',
                  'http://i.imgur.com/ZsNa00P.jpg', 'http://i.imgur.com/3Srp3px.jpg',
                  'http://i.imgur.com/HsyTnKP.jpg', 'http://i.imgur.com/p4PQO1i.jpg',
                  'http://i.imgur.com/vumvSPK.jpg', 'http://i.imgur.com/nQ1lmON.jpg',
                  'http://i.imgur.com/T8MMgLW.jpg', 'http://i.imgur.com/gb5EX0m.jpg',
                  'http://i.imgur.com/KcdccHb.jpg', 'http://i.imgur.com/aBrpzH9.jpg',
                  'http://i.imgur.com/4GVgiZp.jpg', 'http://i.imgur.com/8o1JZRk.jpg',
                  'http://i.imgur.com/rCC6TIM.jpg', 'http://i.imgur.com/7cBot0P.jpg',
                  'http://i.imgur.com/Es9GHDD.jpg', 'http://i.imgur.com/RqZNg2t.jpg',
                  'http://i.imgur.com/97fIjZT.jpg', 'http://i.imgur.com/EXxzKMB.jpg',
                  'http://i.imgur.com/w2C3diM.jpg', 'http://i.imgur.com/CKMWcQQ.jpg',
                  'http://i.imgur.com/L9msA4J.jpg', 'http://i.imgur.com/CTTKASY.jpg',
                  'http://i.imgur.com/kiIcEVs.jpg', 'http://i.imgur.com/V8hm4ry.jpg',
                  'http://i.imgur.com/CQjAQZj.jpg', 'http://i.imgur.com/QMbyaeI.jpg',
                  'http://i.imgur.com/yjQ2Ee2.jpg', 'http://i.imgur.com/m0nKtkY.jpg',
                  'http://i.imgur.com/K9gLVC7.jpg', 'http://i.imgur.com/umtmR63.jpg',
                  'http://i.imgur.com/P5Dxe2N.jpg', 'http://i.imgur.com/j1ttq77.jpg',
                  'http://i.imgur.com/l7vd4R1.jpg', 'http://i.imgur.com/GK7i8t4.jpg',
                  'http://i.imgur.com/fifLkz8.jpg', 'http://i.imgur.com/jJFW4Gl.jpg',
                  'http://i.imgur.com/wseBgjO.jpg', 'http://i.imgur.com/WzM2T3X.jpg',
                  'http://i.imgur.com/sekEPsJ.jpg', 'http://i.imgur.com/SDUlsyY.jpg',
                  'http://i.imgur.com/QipfNqI.jpg', 'http://i.imgur.com/IBNjmRP.jpg',
                  'http://i.imgur.com/ReM1YFp.jpg', 'http://i.imgur.com/qvjxeLB.jpg',
                  'http://i.imgur.com/hKTzKyg.jpg'];

  // Game keeps running as long as mistakes aren't made
  while (correct) {
    
    // chooses a random number to determine random picture
    randomIndex = Math.floor(Math.random() * NUM_OF_PICS);

    var randomPic = picArray[randomIndex];

    // Display the picture
    $('#dogOrNah').attr('src', randomPic);

    // if the picture number is below 23, it is a dog
    if (randomIndex < 24) {
    	dog = true;
    }
    // pictures after 23 are food
    else {
    	dog = false;
    }

    // MAKE THE CORRECT VARIABLE ACTUALLY
    checkKey();

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
				else {
               // increase the user's score with every correct guess
               userScore++;
            }
            break;
			// right arrowkey
			case 39:
				console.log("RIGHT ARROW KEY TEST PRINT");
				if (dog) {
					correct = false;
				}
            else {
               // increase the user's score with every correct guess
               userScore++;
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

