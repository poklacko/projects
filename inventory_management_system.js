// *** Inventory Management System ***

/*
  the inventory management system provides the following features:
    - add a new product to the inventory
    - remove a product from the inventory.
    - update the quantity of a product.
    - display the details of a specific product.
    - list all products in the inventory.
    - calculate and display the total value of the inventory (quantity * price) with proper formatting.
    - create statistics about the products, such as the average price and the most expensive and least expensive products.
    - a function to generate a unique product code based on the product name, using a combination of letters and numbers
    - a function to downgrade the letters in the product names to lowercase, and calculate the total count of vowels in all product names.
    - display a formatted report that includes the product code, name, price, and quantity of each product.
*/

// object to contain the inventory management products properties and functions
const inventoryManagement = {

// list for products properties
  products: [],

// method to push new products to the list
  createNewProduct(newProductName, newProductQuantity, newProductPrice){
    if(typeof newProductName === 'string' && typeof newProductQuantity === 'number' && typeof newProductPrice === 'number'){
      const newProduct = {
        productName : newProductName,
        productQuantity : newProductQuantity,
        productPrice : newProductPrice,
        }    
      console.log(newProductName + ' added to the inventory list!');
      this.products.push(newProduct);
    } else {
      console.log('Invalid input in the product properties!');
    }   
  },

// method to remove product from the list
  removeProduct(productRemoveName){
    let index;
    let isTrue = false;
    for(let i = 0; i < this.products.length; i++){
      if(productRemoveName === this.products[i].productName){
        isTrue = true;
        index = i;
      }  
    }
    if(isTrue){
      console.log('This product was removed from the inventory: ' + this.products[index].productName+ '.');
      this.products.splice(index, 1);
    }else{
      console.log('There is no product with this name in the inventory!');
    }
  },

// method to update the quantity of a product
  updateQuantity(quantityName, updateQuantity){
    let index;
    let isTrue = false;
    for(let i = 0; i < this.products.length; i++){
      if(quantityName === this.products[i].productName){
        isTrue = true;
        index = i;
        } 
    }
    if(isTrue){
    this.products[index].productQuantity += updateQuantity;
    console.log(`${quantityName}'s quantity modified to: ${this.products[index].productQuantity}`);
    }else{
      console.log('There is no product with this name in the inventory!');
    }
  },

// method to display the details of a specific product
  displayProduct(displayName){
    let index;
    let isTrue = false;
    for(let i = 0; i < this.products.length; i++){
      if(displayName === this.products[i].productName){
        isTrue = true;
        index = i;
        } 
    }
    if(isTrue){
    console.log(`${this.products[index].productName}'s quantity is: ${this.products[index].productQuantity} and the price is: ${this.products[index].productPrice}`);
    }else{
      console.log('There is no product with this name in the inventory!');
    }
  },

// method to list all products in the inventory
  listInventory(){
    console.log('List of the inventary products name: ');
    const formattedProductsName = this.products.map(getProductsName);
    function getProductsName (element) {
      return ' - ' + element.productName;
    }
    console.log(formattedProductsName);
  },

// method to calculate the total value of the products
  totalValueOfProducts(){
    const totalValue = this.products.reduce((total, currentValue) => {
      return total + currentValue.productPrice;
    }, 0);
    console.log(`The total value of the products in the inventory: ${totalValue} .`);
  },

// method to create statistics about the products, such as the average price and the most expensive and least expensive product
  statisticOfProducts(){ 

// code snippet to calculate the average price of the products
    const statistic = this.products.reduce((total, currentValue) => {
      return total + currentValue.productPrice;  
    }, 0);
    let averagePrice = statistic / this.products.length;
    console.log(`The average price of the products: ${averagePrice.toFixed(2)}.`);

// code snippet to find the most expensive product 
    let mostExpensive = this.products[1].productPrice;
    let index;
    for(let i = 0; i < this.products.length; i++){
      if(mostExpensive < this.products[i].productPrice){
        mostExpensive = this.products[i].productPrice;
        index = i;
      }
    };
    console.log(`The most expensive product is: ${this.products[index].productName} and its price is: ${mostExpensive}.`);

// code snippet to find the least expensive product
    let leastExpensive = this.products[1].productPrice;
    for(let i = 0; i < this.products.length; i++){
      if(leastExpensive > this.products[i].productPrice){
        leastExpensive = this.products[i].productPrice;
        index = i;
      }
    }
    console.log(`The least expensive product is: ${this.products[index].productName} and its price is: ${leastExpensive}.`);
  },

// method to generate a unique product code based on the product name, using a combination of letters and numbers
  createUniqueCode(){
    let code;
    this.products.map(getCodeLetters);
    function getCodeLetters(element){
      let codeLetter = '';
      for(let i = 0; i < 3; i++){
        codeLetter += element.productName[i];
      }
      let finalCode = codeLetter.toUpperCase() + Math.floor(Math.random() * 1000);
      element.productCode = finalCode;
    }
  },

// method to downgrade the letters in the product names to lowercase, and calculate the total count of vowels in all product names
  downgradeNameCalculateVowels(){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    this.products.map(toDowngrade);
    function toDowngrade(element){
      element.productName = element.productName.toLowerCase()
    };

    let counter = 0;
    this.products.map((element) => {
      for(let i = 0; i < element.productName.length; i++){
        for(let j = 0; j < vowels.length; j++){
          if(element.productName[i] === vowels[j]){
            counter++;
          }
        }
      }
    });
    console.log('The total vowels ind the products names: ' + counter + '.');
  },

// method to display a formatted report that includes the product code, name, price, and quantity of each product
  displayReport(){
    console.log(`Summary of the products in the invetory:`);
    this.products.forEach(function(element){
      console.log(`- product code: ${element.productCode}, name: ${element.productName}, price: ${element.productPrice}, quantity: ${element.productQuantity}`);
    });
  }

};

// testing the program functionalities
inventoryManagement.createNewProduct('cola', 149, 2.5);
inventoryManagement.createNewProduct('Cake', 25, 5);
inventoryManagement.createNewProduct('papertissue', 80, 2);
inventoryManagement.createNewProduct('bread', 37, 1.75);
inventoryManagement.createNewProduct('salami', 4, 5);
inventoryManagement.createNewProduct('Beer', 204, 2.5);
inventoryManagement.createNewProduct('shampoo', 55, 4);
inventoryManagement.createNewProduct('tomato', 190, 0.25);
inventoryManagement.createNewProduct('CHEESE', 46, 3);
inventoryManagement.createNewProduct('candy', 133, 0.1);
inventoryManagement.createNewProduct('Cucumber', 70, 1);
inventoryManagement.createNewProduct('rolls', 29, 0.75);
inventoryManagement.createNewProduct('tobaco', 40, 3.5);
inventoryManagement.createNewProduct('Whiskey', 4, 25);
inventoryManagement.createNewProduct('battery', 20, 4);

inventoryManagement.removeProduct('tomato');

inventoryManagement.updateQuantity('rolls', -5);

inventoryManagement.displayProduct('shampoo');

inventoryManagement.listInventory();

inventoryManagement.totalValueOfProducts();

inventoryManagement.statisticOfProducts();

inventoryManagement.createUniqueCode();

inventoryManagement.downgradeNameCalculateVowels();

inventoryManagement.displayReport();

//console.log(inventoryManagement.products);


