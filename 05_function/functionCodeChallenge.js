// Functions Code Challenge:

//1. 
//Write a function that takes in an array of numbers and returns the sum of all the numbers in the array.

function addArray(array) {
    let total = 0;
    for (let num of array){
        total += num;
}
    return total;
}
console.log(addArray ([1, 2, 3, 4, 5]))


// 2. 
//Write a function that takes in a string and returns the string reversed.

function reverseString(string) {
    return string.split('').reverse().join('');

 }
console.log(reverseString('Hello'));

// 3. 
//Write a function that takes in an array of objects representing people, where each object has properties for name, age, and gender, and returns 
//an array of objects representing only the people who are over the age of 18.

let group = [
  { name: 'Alice', age: 22, gender: 'female' },
  { name: 'Bob', age: 17, gender: 'male' },
  { name: 'Charlie', age: 19, gender: 'male' },
  { name: 'Diana', age: 16, gender: 'female' }
];

function filterAdults(people) {
  return people.filter((person) => person.age > 18);
}
let adults = filterAdults(group);

console.log(adults);

//4.
// Write a function that takes in an array of numbers and returns a new array containing only the even numbers from the original array.

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterEvenNumbers(numbers) {
  return numbers.filter((number) => number % 2 === 0);
}
let evenNumbers = filterEvenNumbers(numbersArray);
console.log(evenNumbers);


//5.
// Write a function that takes in an array of strings and returns a new array containing only the strings that start with the letter "A".

let stringsArray = [
  'Apple',
  'Banana',
  'Cucumber',
  'Tomatoes',
  'Strawberries'
];

function filterStringsStartsWithA(strings) {
  return strings.filter((string) => string.startsWith('A'));
}
let stringsStartsWithA = filterStringsStartsWithA(stringsArray);
console.log(stringsStartsWithA);

// 6.
//Write a function that takes in an array of objects representing books, where each object has properties for title, author, 
//and published, and returns an array of strings representing the titles of all the books published in the year 2000 or later.

 let booksArray = [
   { title: 'Book One', author: 'Author A', published: 2001 },
   { title: 'Book Two', author: 'Author B', published: 1999 },
   { title: 'Book Three', author: 'Author C', published: 2003 }
 ];
 function booksByYear(books) {
   return books.filter((book) => 
    book.published >= 2000);
 }
 let titles = booksByYear(booksArray);
 console.log(titles);

//7.
// Write a function that takes in two numbers and returns the larger of the two.
let num1 = 1;
let num2 = 6;

function largerNumber(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

let largerNumberThanTwo = largerNumber(num1, num2);

console.log(largerNumberThanTwo); 

//8.
// Write a function that takes in an array of numbers and returns the smallest number in the array.
let numArray = [4, 9, 3, 8, 4, 10];

function smallestNumber(numbers) {
  return Math.min(...numbers);
}
let findSmallestNumber = smallestNumber(numArray);
console.log(findSmallestNumber);

//9.
// Write a function that takes in an array of strings and returns the longest string in the array.

let stringsOfArray = ['Purple', 'Blue', 'Red', 'Pink', 'White'];

function findLongestString(strings) {
  return strings.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, '');
}

let longestString = findLongestString(stringsOfArray);
console.log(longestString); 


//10. 
// Write a function that takes in an array of objects representing students, where each object has properties for name and grade, and returns an array of objects representing only the students who have a grade of "A".

let studentsArray = [
  { name: 'Alice', grade: 'A' },
  { name: 'Bob', grade: 'B' },
  { name: 'Charlie', grade: 'A' },
  { name: 'Eve', grade: 'C' }
];

function studentsWithGradeA(students) {
    return students.filter(student => student.grade === 'A');
  }
  
  let onlyStudentsWithGradeA = studentsWithGradeA(studentsArray);
  console.log(onlyStudentsWithGradeA);
