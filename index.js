var rs = require('readline-sync');

// const readline = require('readline');

// prompt name question
// prompt favorite hobby
// ask if there's more hobbies
// add hobbies to list
// store list of users hobbies
// print user hobby list at the end


// var hobbies = [];
// var areYouSure  = false;
// var moreHobbies = 0;

// function getHobbyCount() {
//   moreHobbies = rs.questionInt('How many other hobbies do you have? ')
// }

// function addHobbies(numHobbies) {
//   var counter = 0;
//   while(counter < numHobbies) {
//   var input = rs.prompt();
//     hobbies.push(input);
//     counter++;

//     if (counter < numHobbies) {
//       console.log('--Awesome! "' + input + '" is cool!  What\'s the other ' + (numHobbies - counter) + '?' );
//     } else {
//       console.log('I wish I could ' + hobbies + '....but I\'m not even real');
//     }
//   }
// }

// var userName = rs.question('What is your name? ');
// var favHobby = rs.question( userName +', what is your favorite hobby? ');

// hobbies.push(favHobby);
//  getHobbyCount();


// if (moreHobbies > 0) {
//   console.log('Cool, what are they?');
//   addHobbies(moreHobbies);
// } else {
//   areYouSure = rs.keyInYN('Are you sure ' + hobbies[0] + ' is all you like to do?')
// }

// if (!areYouSure && hobbies.length <= 1) {
//   getHobbyCount();
//   console.log('Cool, what are they?');
//   addHobbies(moreHobbies);
// } else if (areYouSure) {
//   console.log (hobbies + ' is cool, good for you.');
// }