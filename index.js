var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var obj = {[item]: Math.floor(Math.random() * 100)}
  cart.push(obj)
  console.log(item + " has been added to your cart.")
  return cart;
}

function viewCart() {
  var current = "In your cart, you have "
  if (cart.length === 0) {
    current = "Your shopping cart is empty."
    return current;
  }
  return current;
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
