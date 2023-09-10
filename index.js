require('dotenv').config();

const getOrders = require('./lib/get-orders');
const filterOrders = require('./lib/filter-orders');
const getRestaurantTokens = require('./lib/get-restaurant-tokens');
const getItemTokens = require('./lib/get-item-tokens');
const getTotalPrice = require('./lib/get-total-price');
const writeFile = require('./lib/write-file');

Object.defineProperty(String.prototype, 'capitalize', {
  value: function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false
});

(async () => {
  const limit = 26;
  let orders = [];
  
  let offset = 0;
  let total = 734;
  
  while (total > 0) {
    try {
      orders = orders.concat(await getOrders(offset, limit));
    } catch (e) {
      console.log(e);
      process.exit(1);
    }

    offset += (limit - 1);
    total -= (limit - 1);
  }

  orders = filterOrders(orders);

  const restaurantTokens = getRestaurantTokens(orders);
  const itemTokens = getItemTokens(orders);
  const totalPrice = getTotalPrice(orders);

  try {
    await writeFile(restaurantTokens, 'docs/restaurant-tokens.js', 'RESTAURANT_TOKENS');
    await writeFile(itemTokens, 'docs/item-tokens.js', 'ITEM_TOKENS');
    await writeFile(totalPrice, 'docs/total-price.js', 'TOTAL_PRICE');
  } catch (e) {
    console.log(e);
    process.exit(1);
  }

  process.exit(0);
})();
