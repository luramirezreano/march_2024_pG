// Array Function Code Challenge:
//1. 
//Write a function that takes an array of objects representing books 
//and returns an array containing the titles of those books.
 
let booksArray = [
   { title: 'Book One', author: 'Author A', published: 2001 },
   { title: 'Book Two', author: 'Author B', published: 1999 },
   { title: 'Book Three', author: 'Author C', published: 1998 },
]
let bookTitle = booksArray.map((book) => {
    return book.title;
})

console.log(bookTitle);

//2. 
//Write a function that takes an array of objects representing products and returns 
//an array containing only the products that are currently in stock.

let products = [
    {product: 1, name: 'pencils', inStock: true },
    {product: 1, name: 'erasers', inStock: false},
    {product: 1, name: 'pens', inStock: true },
]

let inStockProducts = products.filter((product) => {
     return product.inStock === (true)
 });

 console.log(inStockProducts)

//3. 
//Write a function that takes an array of objects representing users and 
//returns the first user whose email address matches a given email.

let users = [
    { id: 1, username: 'alice', email: 'alice@example.com'},
    { id: 2, username: 'bob', email: 'bob@example.com'},
    { id: 3, username: 'charlie', email: 'charlie@example.com'},
    { id: 4, username: 'dave', email: 'dave@example.com'},
];

let userEmail = users.find((userEmail) =>{
    return userEmail.email === 'charlie@example.com'
});

console.log(userEmail);

//4. 
//Write a function that takes an array of objects representing tasks and returns true if all
// the tasks are marked as complete, otherwise returns false.

let tasks = [
    {name: 'task 1', description: 'Brooming', completed : true},
    {name: 'task 2', description: 'Mooping', completed : true},
    {name: 'task 3', description: 'Washing', completed : false},  
]

let TaskCompleted = tasks.every((task) => {
    return task.completed === true
});
console.log(TaskCompleted)

//5.
//Write a function that makes an array of objects representing
//purchases and returns the total amount spent on those purchases.

let purchases = [
    {name: 'Phone', price: 1000},
    {name: 'Tablet', price: 2000},
    {name: 'Laptop', price: 3000},
];

 let total = purchases.reduce((amount, purchase) => {
     return amount + purchase.price;
 }, 0)
console.log(total)


//6. 
//Write a function that takes an array of numbers as input and returns the sum of all the numbers in the array.

Array1 = [10, 20, 30, 40, 50];

function addArray(numbers) {
    let total = 0;
    for (let i = 0; i < Array1.length; i++) {
        total += numbers[i];
    }
    return total;
}
console.log(addArray(Array1)) 

// 7. 
//Write a function that takes an array of strings as input and returns a new array with all the strings converted to uppercase.

let strings = [ 'I am', 'a', 'good', 'programmer'];

let newStrings = strings.map((string) => {
    return string.toUpperCase();
});

console.log(newStrings); 

// 8.
//Write a function that takes an array of numbers as input and returns a new array with all the even numbers from the original array.

let numbers =[10, 20, 31, 40, 51];

let evenNumbers = numbers.filter((num) => {
    return num %2 ==0;
});

console.log(evenNumbers);

//9. 
// Write a function that takes an array of strings as input and returns a new array with all the strings that have a length of 4 or less.

let words = ['lays', 'doritos', 'takis', 'fritos'];

let shortString = words.filter((word) => {
    return word.length <= 4   
});

console.log(shortString)
