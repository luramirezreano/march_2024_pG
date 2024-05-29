//Copy array using spread operator 

// let originalArray = [1,2,3];
// let newArray =[...originalArray];
// console.log(newArray); //OUTPUT: [1,2,3 ]

// console.log(originalArray); //OUTPUT: [1,2,3 ]
// console.log(newArray); //OUTPUT: [1,2,3 ]
// newArray.push(4); //OUTPUT: [1,2,3 ]
// console.log(newArray); // OUTPUT: [1,2,3,4 ]

//Using the Spread Operator to combine Arrays
// let arrayOne = [1,2,3];
// let arrayTwo = [4,5,6];

// let combinedArray = [...arrayOne, ...arrayTwo];
// console.log(combinedArray); // Output: [ 1, 2, 3, 4, 5, 6 ]

//Using the Spread Operator to create Ojects 
// let orginalObj = {a : 1, b : 2};
// let newObj = {...orginalObj, c :3};
// console.log(newObj); // Output: { a: 1, b: 2, c: 3 }

/***
 * Merging user profile data
 Imagine that you have two objects containing user profile data, 
 one representing the user's basic information and the other representing
 their intrests. You can use the spread operator to merge the two objects into a single user object: 
 */

//  let basicInfo = {
//     firstName : 'John',
//     lastName : 'Doe',
//     age : 30,
//     gender : 'male'
//  }

//  let intrests ={
//     hobbies: ['reading', 'traveling', 'hiking'],
//     favoriteFood : ['sushi']
//  }
//  let userProfile = {...basicInfo,...intrests};
//  console.log(userProfile)  

//  output:   firstName: 'John',
//  lastName: 'Doe',
//  age: 30,
//  gender: 'male',
//  hobbies: [ 'reading', 'traveling', 'hiking' ],
//  favoriteFood: [ 'sushi' ]

 /** Combining mutiple arrays into one 
  
  * Creating an new array with existing data: 
Let's say you have an array of books and you want to create a
new array that includes some of the books from the original array as well as some 
additional books. You can use Spread Operator to create the new array: 
  */
//  const existingBooks = [
//     { title: 'The Great Gatsby', author: 'F. Scoot Fitzgerald' },
//     {title : 'To Kill A MockingBird', author: 'Harper Lee'},
//     {title: 'Pride and Prejudice', author: 'Jane Austen'},
//  ];

//  const additionalBooks = [
//     {title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
//     {title: '1984', author: 'George Orwell' },
//  ];
// let allBooks = [...existingBooks, ...additionalBooks];
//  console.log(allBooks)

//  Output:[
//   { title: 'The Great Gatsby', author: 'F. Scoot Fitzgerald' },
//   { title: 'To Kill A MockingBird', author: 'Harper Lee' },
//   { title: 'Pride and Prejudice', author: 'Jane Austen' },
//   { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
//   { title: '1984', author: 'George Orwell' }
// ]