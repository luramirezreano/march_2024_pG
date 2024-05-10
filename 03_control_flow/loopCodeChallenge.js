//1.
let products = [
    {name: 'Product A', price: 10, quantity: 5},
    {name: 'Product B', price : 20, quantity: 3},
    {name: 'Product C', price: 15, quantity: 7},
    {name: 'Product D', price : 25, quantity: 2},
    {name: 'Product E', price: 30, quantity: 4}
];
// 2. 
console.log('Products:');
for(let i = 0; i < products.length; i++){
    let product = products[i];
    console.log(`Name ${product.name}, Price: ${product.price}`);
}
//3. 
let lowestPriceProduct = products[0];
let index = 1;
while(index < products.length) {
    if (products[index].price < lowestPriceProduct.price){
        lowestPriceProduct = products[index];
    }
    index++;
}
console.log('Product with the Lowest Price:');
console.log(`Name : ${lowestPriceProduct.name}, Price : $${lowestPriceProduct.price}`);

//4. 
let totalValue = 0;
for (let product of products) {
    totalValue += product.price * product.quantity;
}
console.log('\n Total Value of all Procucts: ');
console.log(`$${totalValue}`);

//5.

console.log('\nProperties of Products:');
for (let product of products) {
    console.log(`Product: ${product.name}`);
    for (let prop in product){
        console.log(`${prop}: ${product[prop]}`);
    }
    console.log ('---');
}

for (let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    }
    else if (i % 3 === 0){
        console.log('Fizz');
    }
    else if (i % 5 === 0){
        console.log ('Buzz');
    }
    else {
        console.log(i);
    }
}