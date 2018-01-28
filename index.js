var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  // write your code here
  var o = {
    [item]: (Math.floor(Math.random() * 100) + 1)
  };
  cart.push(o);
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  const l = cart.length;

  if (!l) {
    return console.log("Your shopping cart is empty.");
  }

  let itemsAndPrices = [];

  for (let i = 0; i < l; i++) {
    let itemAndPrice = cart[i];
    let item = Object.keys(itemAndPrice)[0];
    let price = itemAndPrice[item];

    itemsAndPrices.push(`${item} at \$${price}`);
  }

  switch (itemsAndPrices.length) {
    case 1:
      break;
    case 2:
      itemsAndPrices = itemsAndPrices.join(" and ");
      break;
    default:
      itemsAndPrices[l - 1] = "and ".concat(itemsAndPrices[l - 1]);
      itemsAndPrices = itemsAndPrices.join(", ");
  }

  console.log(`In your cart, you have ${itemsAndPrices}.`);
}

function total() {
  // write your code here
  var bill = 0;
  for (var i = 0; i < cart.length; i++) {
    bill += Number.parseInt(Object.values(cart[i]));
  }
  return bill;
}

function removeFromCart(item) {
  // write your code here
  let itemInCart = false;

  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart = cart.slice(0, i).concat(i + 1));
    l--;
  }
}

if (!itemInCart) {
  console.log("That item in not in your cart.");
}

return cart;
}


function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    console.log('Sorry, we don\'t have a credit card on file for you.');
    return false;
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  cart = [];
}
