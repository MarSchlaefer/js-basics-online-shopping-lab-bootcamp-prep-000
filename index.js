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
  var currentCart = "In your cart, you have "
    
    if (cart.length === 0) {
      console.log("Your shopping cart is empty.")
    }
  
  for (let i = 0; i < cart.length; i++) {
    let itemObj = cart[i];
    let itemName = Object.keys(itemObj)[0];
    
    if (cart.length === 1) {
      currentCart = `${current}${itemName} at $${cart[0]}.`
      
      console.log(currrentCart);
    }
  
    if (cart.length === 2) {
    
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
