// #1 
let number = 10;
if(number % 2 === 0){
    console.log(number + ' is even ');
} else {
    console.log(number + 'is odd');
}

// 2. Age, message, if-else if statement
let age = 24;
if (age <= 18) {
    console.log ('You are a minor')
} else if (age >= 18 && age <= 65) {
    console.log ('You are an adult')
} else if (age > 65) {
    console.log('you are a senior citizen')
}

// 3. Vowel or a consonant using an if-else statement 
let letter = 'e';
if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
    console.log('Letter is a vowel')
} else {
    console.log('Letter is a consonant')
}

//4.  three numbers, largest number using an if-else statement
let numberOne = 30;
let numberTwo = 25;
let numberThree = 45;
if (numberOne >= numberTwo && numberOne >= numberThree) {
    console.log('the largest number is : ' + numberOne)
} else if (numberTwo >= numberOne && numberTwo >= numberThree){
    console.log('the largest number is : ' + numberTwo)
} else if (numberThree >= numberTwo && numberThree >= numberOne){
    console.log('the largest number is : ' + numberThree)
}

// 5. Given password and display a message based on pswd, using if-else statement:
     // > than 8 characters, display 'Password is too short', pswd cotaints both letters and numbers, display 
     //'password accepted', if password does not meet either conditons, display 'password invalid'

let password = 'Test1233';
if (password.length < 8) {
    console.log('Password too short');
} else if (/[a-zA-Z]/.test(password)&&/\d/.test(password)) {
    console.log('Password accepted');
} else { 
    console.log('Password rejected');
}
