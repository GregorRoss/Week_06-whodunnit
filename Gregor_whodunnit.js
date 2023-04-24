
// Who dunnit homework 
// Episode 1
// const scenario = {                
//     murderer: 'Miss Scarlet',     // Miss Scarlet has been declared as murderer
//     room: 'Library',
//     weapon: 'Rope'
//   };
  
//   const declareMurderer = function() {              // declareMurderer function is returning the murderer scenario
//     return `The murderer is ${scenario.murderer}.`;
//   }
  
//   const verdict = declareMurderer();
//   console.log(verdict);

  // expected result verdict  'The murderer is Miss Scarlet'


// Who dunnit homework *************************************
// Episode 2
// *********************************************************
// const murderer = 'Professor Plum';  // variable of murderer set as Professor Plum

// const changeMurderer = function() { /// function to change the murderer to Mrs Peacock
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {      ///// function to declare the murderer
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();                       // changing the murderer to Mrs Peacock
// const verdict = declareMurderer();      // setting the verdict by calling the declareMurderer
// console.log(verdict);

// expected result verdict ' The murder is Mrs, Professor Plum' it crashed due to trying to reassign the constant variable Murderer.


// Who dunnit homework *************************************
// Episode 3
// *********************************************************
// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);
// // returns 'The murderer is Mrs. Peacock, this is due to firstVerdict variable calling the declareMurder function and local variable being returned

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);
// returns 'The murderer is Professor Plum' as this does not run the function and is using the murderer variable that is not being used inside the function.

// Who dunnit homework *************************************
// Episode 4
// *********************************************************

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// expected result - The suspects are Miss Scarlet, Professor Plum, Colonel Mustard.
// Suspect three is Mrs Peacock as this information is not pulled from the declareAllSuspects function.

// Who dunnit homework *************************************
// Episode 5
// *********************************************************

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
//   };
  
//   const changeWeapon = function(newWeapon) {   // new weapon is passed to function, function changes the weapon inside the scenario object
//     scenario.weapon = newWeapon;
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
//   }
  
//   changeWeapon('Revolver');
//   const verdict = declareWeapon();
//   console.log(verdict);

  // expected result The weapon is the Revolver

// Who dunnit homework *************************************
// Episode 6
// *********************************************************

// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {   // changeMurderer is called, plotTwist function is called inside the function so it overrides the first change.
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// expected result The murderer is Mrs. White


// Who dunnit homework *************************************
// Episode 7
// // *********************************************************

// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';              // variable is a const and not part of an object.

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// Expected result The Murderer is Mr.Green as the variable cannot be changed, as it is not part of an object.

// Who dunnit homework *************************************
// Episode 8
// *********************************************************

// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
//   };
  
//   const changeScenario = function() {               // changeScenario is called.
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';
  
//     const plotTwist = function(room) {              // plotTwist is called and passed 'Dining Room'
//       if (scenario.room === room) {
//         scenario.murderer = 'Colonel Mustard';     // room does equal  dining room so 'Colonel Mustart' is added as murderer
//       }
  
//       const unexpectedOutcome = function(murderer) {  // unexpectedOutcome is called and passed Colonel Mustard
//         if (scenario.murderer === murderer) {
//           scenario.weapon = 'Candle Stick';        // murderer does equal Mustard so weapon is changed to "Candle Stick"
//         }
//       }
  
//       unexpectedOutcome('Colonel Mustard');
//     }
  
//     plotTwist('Dining Room');
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is ${scenario.weapon}.`
//   }
  
//   changeScenario();
//   const verdict = declareWeapon();
//   console.log(verdict);
 
  // Expected result "The weapon is Candle Stick"

// Who dunnit homework *************************************
// Episode 9
// *********************************************************

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// expected result is 'Professor Plum' looks like murderer is declared but not used. not lit up.

