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
 for(let i = 0; i < cart.length; i++) {
   
   if(cart.length < 2) {
     
   } 
   if(cart.length < 3) {
     
   }
   if(cart.length >= 3) {
     
   } else {
     return "Your shopping cart is empty."
   }
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
