// creating object

// let person = {
//     name : 'John',
//     age : 30,
//     isMarried : false,
//     sayHello: function () {
//         //when function property is called, it will execute below code
//         console.log ('hello')
//     }
// };
// accessing Object properties: Dot Notation
// console.log(person.name); // or
// console.log(person['name']);

// accesing funtion from object person
//person.sayHello(); // output : Hello

//if we had a string

// Nested Properties
// let person = {
//   name: 'John',
//   age: 30,
//   isMarried: false,
//   address: {
//     // an object can have other objects // nested objects
//     street: '123 Dime Street',
//     city: 'Any City',
//     state: 'NY',
//     zip: '12345',
//     newObj: {
//       foo: 'bar'
//     }
//   },
//   sayHello: function () {
//     //when function property is called, it will execute below code
//     console.log('hello');
//   }
// };
// access nested object

// Adding and removing Object properties 
// let person = {
//     name: 'John',
//     age: 30,
//     isMarried: false,
//     sayHello: function () {
//         //when function property is called, it will execute below code
//         console.log('hello');
//       }
//     };
//     console.log(person);

// add address object to person 
// person.address = {
//     street : '123 dime street',
//     city: 'any city',
//     state : 'NY',
//     zipCode: '123456'
// }
// console.log(person)
// person.dob = '01/01/1990'
// console.log(person.dob)
// // update age 
// //person.age = 31; // or
// // person.age = person.age + 1;
// // console.log (person.age)

// // Delete an object from a property (delete address from property)
let person = {
    name: 'John',
    age: 30,
    isMarried: false,
    sayHello: function () {
        //when function property is called, it will execute below code
        console.log('hello');
      }
    };
    console.log(person);

person.address = {
    street : '123 dime street',
    city: 'any city',
    state : 'NY',
    zipCode: '123456'
}
console.log(person)

// delete person.address;
// console.log(person);

// Crud is the proper term Crud Operations on your objects is to create, read, update or delete 

// Iterate 
// for (let key in person){
//     console.log(`${key} : ${person[key]}`);
// }

//to be able to nest what is inside of an object  
// for (let key in person){
//     console.log(`${key} : ${person[key]}`);

// if (typeof person [key] === 'object') {
//         for (nestedKey in person[key]) {
//             console.log(`${nestedKey} : ${person[key] [nestedKey]}`);
//         }
//     }
// }
// Real world example : Build Car oject 
let car = {
    make : 'honda',
    model : 'accord',
    color : 'white',
    year : '2023',
    brake : function() {
        console.log('brake pressed')
    },
    accelerate : function () {
        console.log('accelerate pressed')
    },
    turn : function() {
        console.log('turn is made')
    }

}
console.log(car.make);
car.accelerate();