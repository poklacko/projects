// *** BANK ACCOUNTS *** 
/*
  Functions of Bank Accounts program:
  - creating a new bank account with an initial balance
  - deposit money into a bank account
  - withdraw money from a bank account
  - view the account balance
  - calculate and display the total balance of all accounts in the bank
*/

// created an object to contain a list with the accounts and functions to interactive with it
const bankAccounts = {

// array to contain the accounts
  accounts: [],

// method that returns unique and unified account numbers 
  generateAccNumber() {
    let accNumberChecked = '';
    let randomNumber;

// do while loop generates the account numbers and checks the existing ones to avoid duplicates
// using the built in Math.random method and adding the '117733' prefix to unifies the accounts
    do {
     randomNumber = '117733' + Math.floor(Math.random() * 10000000000);
    } while (this.isAccountNumberExists(randomNumber));
    
    accNumberChecked = randomNumber;
    return Math.floor(accNumberChecked);
  },

// callback function which checks the potential duplicates in the accounts array
  isAccountNumberExists(number) {
    for (let i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].accNumber === number) {
        return true;
      }
    }
    return false;
  },


// function for creating the accounts objects
// if conditional statement makes sure that the inputs are in the required format 
  createAccount(newId, newBalance, newAccNumber){
    if(typeof newId === 'number' && typeof newBalance === 'number'){
      const newAccount ={
        id: newId,

// accNumber properties set by calling the generateAccNumber method
        accNumber: this.generateAccNumber(),
        balance: newBalance
      };
      this.accounts.push(newAccount);
    }
  },

// function to deposit money into a bank account object with id (the wanted account id) 
// and number (amount) parameters
  depositToAccount(id, number){
    let deposit;
    let index;
    let isTrue = false;

// for loop to iterate with the received id to find the wanted account
    for(let i = 0; i < this.accounts.length; i++){
      if(id === this.accounts[i].id){
        deposit = number;
        index = i;
        isTrue = true;
      break;
      }
    }

// if the account founded the deposit added to the balance
    if(isTrue){
    this.accounts[index].balance += deposit;
    console.log(`${deposit} dollar placed to the ${this.accounts[index].accNumber} account! The new balance is: ${this.accounts[index].balance}.`);    
    }
    else {
      console.log('Id does not exist in the list!');
    } 
  },

// function to console the account balance with id parameter
  getAccountBalance(id){
    let isTrue = false;
    let index;

// for loop to iterate with the received id to find the wanted account
    for(let i = 0; i < this.accounts.length; i++){
      if(id === this.accounts[i].id){
        index = i;
        isTrue = true;
        break;
      }
    }
    if(isTrue){
      console.log(`The balance is: ${this.accounts[index].balance}.`);
    }
    else{
      console.log('Id does not exist in the list!');
    }
  },

// function to calculate and display the total balance of all accounts in the bank
  get allAccountsBalance(){
   let allBalance = 0; 
   for(let i = 0; i < this.accounts.length; i++){
     allBalance += this.accounts[i].balance;
   }
   console.log('All accounts balance: ' + allBalance + '.');
  }

};

// examples of calling the methods
bankAccounts.createAccount(1, 500000);
bankAccounts.createAccount(2, 250000);
bankAccounts.createAccount(3, 984300);

bankAccounts.depositToAccount(2, 30000);
bankAccounts.getAccountBalance(3);
bankAccounts.allAccountsBalance;
