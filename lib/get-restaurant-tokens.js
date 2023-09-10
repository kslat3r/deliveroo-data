module.exports = (orders) => {
  const tokens = {};

  orders.forEach(order => {
    const name = order.restaurant.name.split('-')[0].replace(/\(.*\)/, '').replace(/\[.*\]/, '').toLowerCase().capitalize().trim();
      
    if (!tokens[name]) {
      tokens[name] = 1;
    } else {
      tokens[name]++;
    }
  });

  return tokens;
};