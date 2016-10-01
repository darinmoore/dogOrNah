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

  // Game keeps running as long as mistakes aren't made
  while (true) {
    
    // chooses a random number to determine random picture
    randomIndex = Math.floor(Math.random() * NUM_OF_PICS);

    var randomPic = picture + randomIndex + '.jpg';
    

    // if guess is incorrect, exits loop  
    if (!correct) {
      break;
    }
    userScore++;
  }



}
