// Class Concept Code Challenge:
//1.
// Create a class called Animal that has a name property and a speak method. The speak method should log a message to the console saying "Hello, my name is {name}." Create an instance of the Animal class and call the speak method.

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

let animal1 = new Animal('Ted');
animal1.speak();

//2.
// Create a class called Person that has name and age properties, and a greet method that logs a message to the console saying "Hello, my name is {name} and I am {age} years old." Create an instance of the Person class and call the greet method.

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(
//       `Hello, my name is ${this.name} and I am ${this.age} years old`
//     );
//   }
// }

// let person1 = new Person('John', '18');
// person1.greet();

//3.
// Create a class called Car that has make, model, and year properties, and a start method that logs a message to the console saying "The {make} {model} is starting." Create an instance of the Car class and call the start method.

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(
      `The ${this.make} ${this.model} ${this.year} is starting`
    );
  }
}
let car1 = new Car('Tesla', 'CyberTruck', '2024');
car1.start();
//4.
// Create a class called Rectangle that has width and height properties, and a getArea method that returns the area of the rectangle. Create an instance of the Rectangle class and call the getArea method.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

let rectangle1 = new Rectangle(4, 8);
console.log(rectangle1.getArea());

//5.
// Create a class called Square that extends the Rectangle class and has a sideLength property.
// Override the getArea method in the Square class to return the area of the square. 
//Create an instance of the Square class and call the getArea method.

class Square extends Rectangle {
  constructor(sideLength) {
    super(sideLength, sideLength);
    this.sideLength = sideLength;
  }

  getArea() {
    return this.sideLength * this.sideLength;
  }
}

let square1 = new Square(5);
console.log(square1.getArea());

//6.
// Create a class called BankAccount that has accountNumber, accountHolderName, and balance properties, 
//and a deposit method that takes in an amount and adds it to the balance. 
//Create an instance of the BankAccount class and call the deposit method with an amount.

class BankAccount {
  constructor(accountNumber, accountHolderName, balance) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  getDetails() {
    return `Account Holder: ${this.accountHolderName}, Account Number: ${this.accountNumber}, Balance: ${this.balance}`;
  }
}

function createAccount(accountNumber, accountHolderName, balance) {
  return new BankAccount(accountNumber, accountHolderName, balance);
}

let account1 = createAccount('123456789', 'John Doe', 1000);
let account2 = createAccount('987654321', 'Jane Smith', 2000);

account1.deposit(500);
account2.deposit(1000);

console.log(account1.getDetails());
console.log(account2.getDetails());

//7.
// Create a class called Person that has name and email properties, 
//and a sendEmail method that takes in a message and sends an email to the person's email address. 
//Create an instance of the Person class and call the sendEmail method with a message.

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    sendEmail(message) {
        console.log(`Sending email to ${this.email}`);
        console.log(`Subject: Message from ${this.name}`);
        console.log(`Message: ${message}`);
    }
}

let person1 = new Person('Jane', 'jane@example.com');
person1.sendEmail('Hello Jane, this is a test.');


//8.
// Create a class called Product that has name, price, and description properties,
// and a discount method that takes in a percentage and returns the discounted price. 
//Create an instance of the Product class and call the discount method with a percentage.

class Product {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }

  discount(percentage) {
    let discountAmount = (this.price * percentage) / 100;
    let discountedPrice = this.price - discountAmount;
    return discountedPrice;
  }
}

let product1 = new Product('Window', 200, 'A all-weather window');
let discountedPrice = product1.discount(10);

console.log(`Product Name: ${product1.name}`);
console.log(`Original Price: $${product1.price}`);
console.log(`Discounted Price: $${discountedPrice}`);
