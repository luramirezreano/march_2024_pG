//1. Build Object for Employees: An employee can be represented as an object with attributes such as name, age, salary, and job title.
//It can also have functions like work, take a break, and attend a meeting
//#1
let employee = {
    name: 'Jane',
    age: 31,
    salary: 100000,
    jobTitle: 'SDET',
    work : function(){
        console.log(`${employee.name} is working.`);
    },
    break : function(){
        console.log(`${employee.name} is taking a break.`);
    },
    meeting : function(){
        console.log(`${employee.name} is in a meeting.`);
        }
};
console.log(employee.name);

console.log(employee.age);
console.log(employee.salary);
console.log(employee.jobTitle);
employee.work();
employee.break();
employee.meeting();

//#2

//#2 Build Object for  Bank accounts: A bank account can be represented as an object with attributes such as account number, balance, and account type.
// It can also have functions like deposit, withdraw, and transfer.
let bankAccount = {
    accountNumber : 123456789,
    balance : 123456,
    accountType: 'Checking',
    deposit: function() {
        console.log(`Your deposit of $ 6789 Dollars was made to account number ${this.accountNumber}`)
    },
    withdraw: function(){
        console.log(`Your balance is : ${this.balance} , you are able to withdraw money.`)
    },
    transfer: function(){
        console.log(`Your transfer has been made`)
    }

}
console.log(bankAccount.accountNumber);
bankAccount.deposit();
console.log(bankAccount.accountNumber);
bankAccount.withdraw();
console.log(bankAccount.accountNumber);
bankAccount.transfer();

//#3 Build Object for  Dogs: A dog can be represented as an object with attributes such as breed, age, and color.
// It can also have functions like bark, wag tail, and fetch.

let dog  = {
    breed: 'anyBreed',  
    age: 12,
    color: 'AnyColor',
    bark: function() {
      console.log(`${this.breed} is barking`)
    },
    wagTail: function() {
        console.log(`${this.breed} is waging his tail`)
    },
    fetch: function(){
        console.log(`${this.breed} is waging can fetch`)
    }
   }
console.log(dog.breed)
console.log(dog.age)
console.log(dog.color)
dog.bark();
dog.wagTail();
dog.fetch();

//4.Suppose you are building an e-commerce application and you want to create a new Product object with property name, price, manufacturer, category

newProduct = {
    name: 'insertHereNewName',
    price: 2233,
    manufacturer: 'manufacturerNameHere',
    category:'categoryHere'
};
console.log(newProduct);

//5. Now add a description property to the Product object you created
newProduct.description = {
    description:'hereIsTheDescription'
};
console.log(newProduct.description);

//6.Suppose the price of the Product object you created earlier changes. Now the price increased by $10
console.log(newProduct);
newProduct.price = newProduct.price +10;
console.log(newProduct.price)

//7.Remove the description property from the Product object you created earlier.

delete newProduct.description;
console.log(newProduct.description);

// 8. Suppose you are building a blog application and you want to display a list of all the blog posts.
// You have an array of blog post objects, where each object has properties such as title, author, date, and content. Find out if date field is empty on any object

let  blogPosts = [
{
    title: 'The Importance of Regular Exercise',
    author: 'John Doe',
    date: '2022-02-28',
    content: 'Lorem ipsum dolor sit amet, consectetur'
},
{
    title: 'Tips for Eating Healthy on a budget',
    author: 'Jame Smith',
    date: '2022-02-15',
    content: 'Lorem ipsum dolor sit amet, consectetur'
},
//...
];


let isAnyDateEmpty = blogPosts.some(post => !post.date);

if (isAnyDateEmpty) {
    console.log("There is at least one blog post with an empty date field.");
} else {
    console.log("All blog posts have a date.");
}

