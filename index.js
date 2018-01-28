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
  var b = false;
  var index = 0;
  for (var i = 0; i < cart.length; i++) {
    if (Object.keys(cart[i]) == item) {
      index = i;
      b = true;
    }
  }

  if (b == true) {
    cart.splice(index, 1)
  } else if (cart.length == 0 || b == false) {
    console.log('That item is not in your cart');
  }

  // (b == true ? cart.splice(index, 1) : console.log('That item is not in your cart'));
}


function placeOrder(cardNumber) {
  // write your code here
  var bill = 0;
  bill = total();
  if (!cardNumber) {
    console.log('Sorry, we don\'t have a credit card on file for you.');
    return false;
  }

  console.log(`Your total cost is ${bill}, which will be charged to the card ${cardNumber}`);

}

