/*
 * File Name: main.js
 * Description: Drives dogOrNah
 * Authors: Anthony Tseng, Brandon Tran, Darin Moore, Sandra Luo
 */

var dog = false; // if the picture is actually a dog
var userScore = 0; // keeps track of user's score
var randomIndex = 0; // random index to determine photo
var correct = true; // if the user guessed correctly
var NUM_OF_PICS = 110; // numner of pics
var isSpacePressed = false; // bool to see if spacebar is pressed
var loopOnce = false; // used to clear timer if already looped
var lastPics = []; // keeps track of which pics have been used in the order used
var randomPic = "";

// picture array that stores all the dog and food pictures, less than 44 in array 
// are dog photos
var picArray = ['http://i.imgur.com/EcSfwiD.jpg', 'http://i.imgur.com/Jss0iB9.jpg',
                'http://i.imgur.com/KrRnEO4.jpg', 'http://i.imgur.com/SOacMAb.jpg',
                'http://i.imgur.com/RSCQJ4I.jpg', 'http://i.imgur.com/ROqdxuN.jpg',
                'http://i.imgur.com/5D8tIWz.jpg', 'http://i.imgur.com/vhIjNXk.jpg',
                'http://i.imgur.com/QZsJvTb.jpg', 'http://i.imgur.com/ZbyXHFF.jpg',
                'http://i.imgur.com/wPPgMNw.jpg', 'http://i.imgur.com/J8vOV9x.jpg', 
                'http://i.imgur.com/gmazC7Z.jpg', 'http://i.imgur.com/LDQh5Ym.jpg',
                'http://i.imgur.com/jjZtkWZ.jpg', 'http://i.imgur.com/kBDblra.jpg',
                'http://i.imgur.com/cI1qtpn.jpg', 'http://i.imgur.com/u5D5eXc.jpg',
                'http://i.imgur.com/aws6hV4.jpg', 'http://i.imgur.com/gzDomnJ.jpg',
                'http://i.imgur.com/wdFBNEi.jpg', 'http://i.imgur.com/E1nZdsP.jpg', 
                'http://i.imgur.com/JRDcRNM.jpg', 'http://i.imgur.com/22OISBk.jpg',
                'http://i.imgur.com/Ayv1zBA.jpg', 'http://i.imgur.com/sD2gVSf.jpg',
                'http://i.imgur.com/v8y8YQE.jpg', 'http://i.imgur.com/jVgscTe.jpg', 
                'http://i.imgur.com/nvmeCax.jpg', 'http://i.imgur.com/QsF3Ath.jpg',
                'http://i.imgur.com/lhro2uU.jpg', 'http://i.imgur.com/YDowTBh.jpg',
                'http://i.imgur.com/rzFbvjp.jpg', 'http://i.imgur.com/ROihO4e.jpg',
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
                'http://i.imgur.com/hKTzKyg.jpg', 'http://i.imgur.com/Dw9hyFH.jpg',
                'http://i.imgur.com/4Hr2ccC.jpg', 'http://i.imgur.com/mFV0P2V.jpg',
                'http://i.imgur.com/J4WFFYH.jpg', 'http://i.imgur.com/Kl6AMgu.jpg',
                'http://i.imgur.com/JuKc1fH.jpg', 'http://i.imgur.com/Fxfbauy.jpg',
                'http://i.imgur.com/ip46EtC.jpg', 'http://i.imgur.com/sFRY19u.jpg',
                'http://i.imgur.com/3rRU0RD.jpg', 'http://i.imgur.com/kCjgMR6.jpg',
                'http://i.imgur.com/fAGpRNH.jpg', 'http://i.imgur.com/1yvzReG.jpg',
                'http://i.imgur.com/RGu22Fy.jpg', 'http://i.imgur.com/hjt3mSk.jpg',
                'http://i.imgur.com/VPrW8mW.jpg', 'http://i.imgur.com/L1wIFye.jpg',
                'http://i.imgur.com/GOS70Zr.jpg', 'http://i.imgur.com/u1UN5Ho.jpg',
                'http://i.imgur.com/Bir1LS6.jpg', 'http://i.imgur.com/ns5ceI2.jpg',
                'http://i.imgur.com/yAeOJRi.jpg', 'http://i.imgur.com/udo1Omf.jpg',
                'http://i.imgur.com/PQlJCMv.jpg', 'http://i.imgur.com/iTX1CTC.jpg',
                'http://i.imgur.com/Dvgtafw.jpg', 'http://i.imgur.com/SfzSTou.jpg',
                'http://i.imgur.com/FKqeaN6.jpg', 'http://i.imgur.com/ECC5gAU.jpg',
                'http://i.imgur.com/2eGIjLT.jpg', 'http://i.imgur.com/kfhgGpV.jpg'];

// checks for keyboard events
$(document).keyup(function(event) {
	
	// event listener for space bar
	if (event.which == 32) {
    	userScore = 0;
    	correct = true;
    	isSpacePressed = true;
    	// clears the screen of the instructions
    	$('.Instructions').text('');
    	gameDriver();
  	}

	// left arrowkey pressed (left for is a dog)
	if (event.which == 37 && correct && isSpacePressed) {
    
    	// if guess is incorrect
    	if (!dog) {
    		correct = false;
      		// clears the screen of the instructions
      		$('.Instructions').text('Game Over! Press space bar to play again. Your score is ' + userScore + '!');  
    	}
    
    	// if guess is correct
    	else {
      		// increase the user's score with every correct guess
     		userScore++;
      		gameDriver();
    	}
  	}

  	// right arrowkey pressed (right for is not a dog)
  	else if (event.which == 39 && correct && isSpacePressed) {
    
    	// if guess is correct
    	if (dog) {
      		correct = false;
      		// clears the screen of the instructions
      		$('.Instructions').text('Game Over! Press space bar to play again. Your score is ' + userScore + '!');
    	}
    
    	// if guess is incorrect
    	else {
      		// increase the user's score with every correct guess
      		userScore++;
      		gameDriver();
    	}
  	}
});

/* Runs game events */
function gameDriver() {
    // chooses a random number to determine random picture
    randomIndex = Math.floor(Math.random() * NUM_OF_PICS);
    randomPic = picArray[randomIndex];

    // keeps track of all 
    lastPics.push(randomIndex);
    // resets timer
    if (loopOnce) {
        indexLastPic = lastPics.indexOf(randomIndex);
        // loops until picture was not one of last 5
        while (indexLastPic < (lastPics.length - 5)) {
            // if pic is not in array
            if (indexLastPic == -1) {
                break;
            }
            // assigns new random picb  
            randomIndex = Math.floor(Math.random() * NUM_OF_PICS);
            randomPic = picArray[randomIndex];
            // keeps track of all 
            lastPics.push(randomIndex);
            indexLastPic = lastPics.indexOf(randomIndex);
        }
    	clearTimeout(timer);
    }

    // starts timer
    timer = setTimeout(loseGame, 1000);
    loopOnce = true;

    // Display the picture
    $('#dogOrNah').attr('src', randomPic);

    // if the picture number is below 23, it is a dog
    if (randomIndex < NUM_OF_PICS/2 ) {
    	dog = true;
    }
    // pictures after 23 are food
    else {
    	dog = false;
    }
}

/* Handles lose game scenario for running out of time */
function loseGame() {
  correct = false;
  $('.Instructions').text('Game Over! Press space bar to play again. Your score is ' + userScore + '!');
}