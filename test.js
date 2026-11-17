// Test menu
const menu = [
    { name: "Milk Tea", price: 5.50 },
    { name: "Fruit Tea", price: 6.00 },
    { name: "Taro Milk Tea", price: 6.50 }
];

// Shopping cart
let cart = [];

function addToCart(itemIndex) {
    cart.push(menu[itemIndex]);
    console.log(menu[itemIndex].name + " added to cart!");
}

// Calculate total
function calculateTotal() {
    let total = 0;

    for (let item of cart) {
        total += item.price;
    }

    return total.toFixed(2);
}

// Test the system
addToCart(0);
addToCart(2);

//AI - TEST ONLY//