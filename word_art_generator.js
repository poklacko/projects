// *** WORD ART GENERATOR ***

/*
  - the program takes a word as input and generates "word art" using ASCII characters 
  - the created pattern is unique for every word
  - every pattern has the same size regardless the length of the provided words
  - call the stringArt() function with a random string for example:
                   
       stringArt("sajtburesz") results:

		|/\\ //\|/
		 \//|\_/ \
		 /\\|/_\ /
		|\// \\/|\

  - the createFirstRow and createTopRow functions generate the core of the pattern and the mirrorRow
    function generates the second and the bottom row by mirroring them 
*/



// function to convert the input string to numbers depends on their place in the alphabet
function stringArt(input){
  const numberedString=[]; 
  for(let i = 0; i < input.length; i++){
  numberedString.push(input.charCodeAt(i));
  }

// array to contain the drawing characters
  const characters = [' ', '/','\\', '|', '_'];

// function to generate the first columns first row
  const coreFirstRow = [];  

  function createFirstRow(){
    let letter = '';

// for loop for iterating through every converted letter of the string   
    for(let i = 0; i < numberedString.length; i++){

// nested iteration to pair a 'drawing' character to every converted number on the numberedString list 
// using a division of no remainder with the length of the character's list to make the pairing random
// this generate the pattern of the half of the first row and push it 
      for(let j = 0; j < (numberedString[i] % characters.length)+1; j++){
        letter = characters[j];
      }
     coreFirstRow.push(letter); 
    }

// the second nested iteration for generating the second half of the first row 
// and push the result to the coreFirstRow array,
    for(let k = 0; k < 10 - numberedString.length; k++){
      for(let l = 0; l < (numberedString[k] % characters.length); l++){
        letter = characters[l];
      }
     coreFirstRow.push(letter); 
    }
  }

// calling the createFirstRow function and save the result as a string 
  createFirstRow();
  const firstRow = coreFirstRow.join('')



// mirrorRow function creates the second row by mirroring the first and bottom rows
// using a for loop to iterate through every character and a switch statement which 
// exchange the particular character with the opposite character 
  const firstRowToMirror = firstRow.split('');

  const secondRow = [];
  function mirrorRow(string, list){
    for(const element of string){
      switch(element){
        case '/':
        list.push('\\');
        break;
        case '\\':
        list.push('/');
        break;
        default:
        list.push(element);
      }     
    }
  }

// calling the mirrorRowToSecond function to generate the second row 
  mirrorRow(firstRowToMirror, secondRow);  



// create the top row using the modified createFirstRow function only changes the iteration processing 
// by disolve the result of division of no remainder from 5 to change the pattern remain the same length of the row as the other rows
  const topRow = [];
  function createTopRow(){
    let letter = '';
    for(let i = 0; i < numberedString.length; i++){
      for(let j = 0; j < (5-((numberedString[i] % characters.length)+1)); j++){
        letter = characters[j];
        }
      topRow.push(letter); 
      }
      for(let k = 0; k < 10 - numberedString.length; k++){
        for(let l = 0; l < (5-(numberedString[k] % characters.length)); l++){
        letter = characters[l];
        }
      topRow.push(letter); 
      }
    }
    createTopRow();
    const topRowString = topRow.join('');



// calling the mirrorRow function again to create the bottom row mirroring the top row 
  const topRowToMirror = topRow;
  const bottomRow = [];

  mirrorRow(topRowToMirror, bottomRow);



// console the generated rows to create the unique pattern for every input words
  console.log(topRowString)
  console.log(firstRow);
  console.log(secondRow.join(''));
  console.log(bottomRow.join(''));
};



// examples for calling the stringArt function with different words 
stringArt('sajtburesz');
console.log('')

stringArt('karate');
console.log('')

stringArt('brunch');
console.log('')

stringArt('saslik');
console.log('')



