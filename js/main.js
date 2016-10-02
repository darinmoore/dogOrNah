/*
 * File Name: main.js
 * Description: Drives dogOrNah
 * Authors: Anthony Tseng, Brandon Tran, Darin Moore, Sandra Luo
 */

/*
 * Function Name: main()
 */

var dog = false; // if the picture is actually a dog
var userScore = 0; // keeps track of user's score
var randomIndex = 0; // random index to determine photo
var correct = true; // if the user guessed correctly
var NUM_OF_PICS = 46;
var isSpacePressed = false;
var loopOnce = false; // used to clear timer if already looped

// picture array that stores all the dog and food pictures, less than 24 is dog
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




$(document).keyup(function(event) {
	console.log("ENTERED KEYDOWN");
	// event listener for space bar
	if (event.which == 32) {
    console.log("ENTERED SPACE");
    userScore = 0;
    correct = true;
    isSpacePressed = true;
    // clears the screen of the instructions
    $('.Instructions').text('');
    gameDriver();
  }

  // left arrowkey pressed (left for is a dog)
  if (event.which == 37 && correct && isSpacePressed) {
    console.log("LEFT ARROWKEY TEST PRINT");
    if (!dog) {
      correct = false;
      // clears the screen of the instructions
      $('.Instructions').text('Game Over! Press space bar to play again. Your score is ' + userScore + '!');  
    }
    else {
      // increase the user's score with every correct guess
      userScore++;
      gameDriver();
    }
  }
  // right arrowkey pressed (right for is not a dog)
  else if (event.which == 39 && correct && isSpacePressed) {
    console.log("RIGHT ARROW KEY TEST PRINT");
    if (dog) {
      correct = false;
      // clears the screen of the instructions
      $('.Instructions').text('Game Over! Press space bar to play again. Your score is ' + userScore + '!');
    }
    else {
      // increase the user's score with every correct guess
      userScore++;
      gameDriver();
    }
  }
});


function gameDriver() {
    // Game keeps running as long as mistakes aren't made
    //while (correct && isSpacePressed) {
      // chooses a random number to determine random picture
      randomIndex = Math.floor(Math.random() * NUM_OF_PICS);

      var randomPic = picArray[randomIndex];

      // resets timer
      if (loopOnce) {
        clearTimeout(timer);
      }

      // starts timer
      timer = setTimeout(loseGame, 2000);
      loopOnce = true;

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

}

function loseGame() {
  correct = false;
  $('.Instructions').text('Game Over! Press space bar to play again. Your score is ' + userScore + '!');
}