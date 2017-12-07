var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
itemPrice = Math.floor(Math.random() * 100);
  for(let i = 0; i < item.length; i++) {
    cart.push({[itemName]: itemPrice})
  }
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
