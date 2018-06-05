var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const itemPrice = Math.floor(Math.random() * 100);
  const itemObj = {[item]: itemPrice};
  cart.push(itemObj);
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  let cartContents = 'In your cart, you have ';
  
    if (cart.length === 0) {
      return console.log("Your shopping cart is empty.")
    }
    
    if (cart.length === 1) {
      cartContents += `${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`
      return console.log(cartContents);
    }
    
    if (cart.length === 2) {
      cartContents += `${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`;
      return console.log(cartContents);
    }
    
    else {
      let cartItems = '';
      
      for (let i = 0; i < cart.length - 1; i++) {
        let currItem = cart[i];
    
        if (cart.length >= 3) {
        
          cartItems += `${Object.keys(currItem)} at $${currItem[Object.keys(currItem)]}, `
        }
      }
      let lastItem = cart.length - 1;
      cartContents += `${cartItems} and ${Object.keys(lastItem)} at ${lastItem[Object.keys(lastIem)]}.`
      
      return console.log(cartContents);
  
    }    
}

function total() {
  let currentTotal = 0;
  
  for (let i = 0; i < cart.length; i++) {
    let currItem = cart[i];
    
    currentTotal += currItem.item;
  }
  return currentTotal;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
