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
var current = "In your cart, you have ";
if(cart.length > 0) {
 for(let i = 0; i < cart.length; i++) {
   if(cart.length < 2) {
     current = current + obj.key(cart[i]) + " at " + obj.value(cart[i]) + "."
   } 
   if(cart.length < 3) {
     current = current + obj.key(cart[i]) + " at " + obj.value(cart[i])
   }
   if(cart.length >= 3) {
     current = current + obj.key(cart[i]) + " at " + obj.value(cart[i])
   } 
 } else {
     console.log("Your shopping cart is empty.")
 }
 return current;
}
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
