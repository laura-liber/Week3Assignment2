let productName, quantity, price;

productName= prompt("Enter the product name:");
quantity= prompt("Enter the quantity: ");
price= prompt("Enter the price: ");
console.log(`
    Product: ${productName}
    Quantity: ${quantity}
    Price: $${price}
`);
let totalPrice;
totalPrice= (`${quantity*price}`);
console.log(`Total: $${totalPrice}`);

console.log(`Tax(15%): $${totalPrice*.15}`);

console.log(`Final Price: $${totalPrice*1.15}`);
