// main object that contains functions and other objects of the game
const game = {


// nested object that cotain only one players properties 
  player:{
    time: 10,
    fasterParameter: 1,
  },


// array to contain the steps properties inside objects
  stepsArray:[
    {keyWord: 'Start', stepCode: 0, branch: 1, descripton: '<start">'},
    {keyWord: 'First choice', stepCode: 1, branch: 1, descripton: '<write "hill" or "river">', choiceOne: 'hill', choiceTwo: 'river'},
    {keyWord: 'Hill', stepCode: 2, branch: 1, descripton: '<write "tower" or "staying on the road">', choiceOne: 'tower', choiceTwo: 'staying on the road'},
    {keyWord: 'Valley', stepCode: 2, branch: 2, descripton: '<write "trail" or "boat">', choiceOne: 'trail', choiceTwo: 'boat'},
    {keyWord: 'Tower', stepCode: 3, branch: 1, subBranch: 1, descripton: '<write "dice">', levelOfIncident: 'low', choiceOne: 'dice'},
    {keyWord: 'Tower', stepCode: 3, branch: 1, subBranch: 2, descripton: '<write "shorter path" or "known path">', choiceOne: 'shorter path', choiceTwo: 'known path'},
    {keyWord: 'Longer way on the hill', stepCode: 3, branch: 2, descripton: '<write "continue">', choiceOne: 'continue'},
    {keyWord: 'Longer way in the walley', stepCode: 3, branch: 3, descripton: '<write "dice">', levelOfIncident: 'high', choiceOne: 'dice'},
    {keyWord: 'Boat', stepCode: 3, branch: 4, descripton: '<write "dice">', levelOfIncident: 'high', choiceOne: 'dice'},
    {keyWord: 'Short way from the tower', stepCode: 4, branch: 1, descripton: '<write "dice">', levelOfIncident: 'high', choiceOne: 'dice'},
    {keyWord: 'Middle of the road on the hills', stepCode: 4, branch: 2, descripton: '<write "dice">', levelOfIncident: 'low', choiceOne: 'dice'},
    {keyWord: 'Middle of the road on the walley', stepCode: 4, branch: 3, descripton: '<write "dice">', levelOfIncident: 'low', choiceOne: 'dice'},
    {keyWord: 'Short way from the boat', stepCode: 4, branch: 4, descripton: '<write "dice">', levelOfIncident: 'high', choiceOne: 'dice'},
    {keyWord: 'Near the house of dogs', stepCode: 5, branch: 1, descripton: '<write "continue">', choiceOne: 'continue'},
    {keyWord: 'See the house from distance', stepCode: 5, branch: 2, descripton: '<write "dice">', levelOfIncident: 'low', choiceOne: 'dice'},
    {keyWord: 'Hearing the dogs barking from distance', stepCode: 5, branch: 3, descripton: '<write "dice">', levelOfIncident: 'low', choiceOne: 'dice'},
    {keyWord: 'See the storm from distance', stepCode: 6, branch: 1, descripton: '<write "dice">', levelOfIncident: 'low', choiceOne: 'dice'},
    {keyWord: 'Inside the deep forest', stepCode: 6, branch: 2, descripton: '<write "dice">', levelOfIncident: 'high', choiceOne: 'dice'},
    {keyWord: 'The meadow', stepCode: 6, branch: 3, descripton: '<write "dice">', choiceOne: 'dice'},
    {keyWord: 'Middle of the road after the storm', stepCode: 7, branch: 1, descripton: '<write "continue">', choiceOne: 'continue'},
    {keyWord: 'Wind in the forest', stepCode: 7, branch: 2, descripton: '<write "dice">', levelOfIncident: 'high', choiceOne: 'dice'},
    {keyWord: 'Mud', stepCode: 7, branch: 3, descripton: '<write "dice">', levelOfIncident: 'high', choiceOne: 'dice'},
    {keyWord: 'Finish 1', stepCode: 8, branch: 1, descripton: 'finish 1'},
    {keyWord: 'Finish 2', stepCode: 8, branch: 2, descripton: 'finish 2'},
    {keyWord: 'Finish 3', stepCode: 8, branch: 3, descripton: 'finish 3'},
  ],


/*
const fs = require('fs'); 
const fileName = "myFile.txt"; 
const fileData = fs.readFileSync(fileName, "utf8");
*/


// 'global' properties to follow the steps and branches 
  currentStepCode:0,
  currentStepBranch:1,
  currentSubBranch:1,
  currentStepIndex:0,
  currentInput:'',


// function to get the current index of step
  getStepIndex(){
    let index= -1;
    for(const element of this.stepsArray){
      index++;
      if(element.stepCode === this.currentStepCode && element.branch === this.currentStepBranch){
      break;
      }
    }
    this.currentStepIndex = index;
    if(this.currentSubBranch === 2){
      //console.log('subBranch0')
      index +=1;
      this.currentStepIndex += 1;
    }
    return index;
  },


// function to get the choices of player
  playerInput(input){
    let index = this.getStepIndex();
    let inputValid = '';
    
    if(this.stepsArray[index].choiceOne === input || this.stepsArray[index].choiceTwo === input || input === 'start'){
    //console.log('input0');
      inputValid = input;
      this.currentInput = inputValid;
    
    }else{
    console.log('Invalid input! Please write one of the valid options.}');
    }
    
    switch(inputValid){
      case 'start':
        //console.log('input1');
        this.start();
        break;
      case 'dice':
        //console.log('input2');
        this.dice();
        break;
      default:
        //console.log('input3');
        this.progressSteps();
        break;
    }
  },


  // function to start
  start(){
    //console.log('start1');
    console.log(this.stepsArray[0].descripton);
    this.progressSteps();
  },

// determaning the three possible ends 

  finish(){
    console.log('You have left: ' + Math.floor(this.player.time) + ' hour in the end of the game.');
    if(this.player.time > 3){
      console.log(this.stepsArray[22].descripton); 
    }else if(0 < this.player.time && this.player.time < 3){
      console.log(this.stepsArray[23].descripton);
    }else{
      console.log(this.stepsArray[24].descripton);
    }
  },


// function to imitate throwing a dice
  dice(){
    //console.log('dice0')
    let index = this.currentStepIndex
    let result = Math.floor(Math.random() * 4);
    if(result === 0){
      result += 1;
    }
    if(this.stepsArray[index].subBranch && this.stepsArray[index].subBranch < 2){
      //console.log('dice1')
      this.currentSubBranch += 1;
    }else{
      //console.log('dice2')
      this.currentStepCode += 1;
    };
    if(this.stepsArray[index].levelOfIncident === 'high'){
      //console.log('dice3')
      switch(result){
        case 1: this.player.fasterParameter *= 1.15;
        break;
        case 2: this.player.fasterParameter *= 1.75;
        break;
        case 3: this.player.fasterParameter *= 3;
        break;
      }   
    }else{
      //console.log('dice4')
      switch(result){
        case 1: this.player.fasterParameter *= 1.05;
        break;
        case 2: this.player.fasterParameter *= 1.3;
        break;
        case 3: this.player.fasterParameter *= 2;
        break;
      }
    }
    console.log(`Your throw is: ${result}. Currently your time is decrase ${this.player.fasterParameter.toFixed(2)} per turn.`)
    this.progressSteps();
  },


// function to keep in progress the storyline 
  progressSteps(){
   
    //console.log('progress1');
    let index = this.currentStepIndex;
    let input = this.currentInput;

  // condition to set the branch numbers at step 1
    if(this.currentStepCode === 1){
      //console.log('progress2');
      if(input === this.stepsArray[index].choiceTwo){
        this.currentStepBranch += 1;
      }
    };

  // condition to set the branch numbers after the main branch at step 2 
    if(this.currentStepCode === 2 && this.currentStepBranch === 2){
      //console.log('progress3');
      if(input === this.stepsArray[index].choiceOne){
        this.currentStepBranch = 3;
      }else{
        this.currentStepBranch = 4;
      }
    };

    if(this.currentStepCode === 2 && this.currentStepBranch === 1){
      //console.log('progress4');
      if(input === this.stepsArray[index].choiceTwo){
        this.currentStepBranch += 1;
      }
    };

    if(this.currentStepCode === 4 && this.currentStepBranch === 4){
      //console.log('progress5');
      this.currentStepBranch = 1;
    };


  // take one step after the players choice (when the input is not dice)
    if(input !== 'dice'){
      //console.log('progress6');
      this.currentStepCode += 1;
    }

    if(this.currentStepCode === 8){
      this.finish();
    };

    let indexUpdate = this.getStepIndex();
    if(this.currentStepCode < 8){
      this.player.time -= (0.5 * this.player.fasterParameter);
      console.log(this.stepsArray[indexUpdate].descripton);
    }
  },

// function to display the current main variables  
  displayCurrent(){
    console.log('step code: ' + this.currentStepCode + ' ,' + 'branch: ' + this.currentStepBranch + ' index: ' + this.currentStepIndex + ' current input: ' + this.currentInput + ', subBranch : ' + this.currentSubBranch)
  },

};

//game.displayCurrent();
game.playerInput('start');
//game.displayCurrent();
game.playerInput('hill');
//game.displayCurrent();
game.playerInput('staying on the road');
//game.displayCurrent();
game.playerInput('continue');
//game.displayCurrent();
game.playerInput('dice');
//game.displayCurrent();
game.playerInput('dice');
//game.displayCurrent();
game.playerInput('dice');
//game.displayCurrent();
game.playerInput('dice');
