var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newItem = { itemName: item, itemPrice: Math.floor(Math.random() * 100) + 1}
 cart.push(newItem);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  var itemAndPrice = [];
  if(cart.length === 0){
    return "Your shopping cart is empty."
    }
    
  else if (cart.length === 1){

      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  
  else{
    
    for( let i = 0; i < cart.length - 1; i++){
    itemAndPrice[i] = `${cart[i].itemName} at $${cart[i].itemPrice}`
    }
    itemAndPrice[cart.length - 1] = `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}`
    
    return "In your cart, you have " + itemAndPrice.join(", ") + "." 
  
  }
}

function total() {
  
  var totalPrice = 0;
  for(let i = 0; i < cart.length; i++){
    totalPrice = totalPrice + cart[i].itemPrice 
  }
  
  return totalPrice;
}

function removeFromCart(item) {
  // write your code here
  
  
}

function placeOrder(cardNumber) {
  // write your code here
}
