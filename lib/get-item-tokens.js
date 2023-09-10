module.exports = (orders) => {
  const tokens = {};

  orders.forEach(order => {
    order.items.forEach(item => {
      const name = item.name.replace(/\(.*\)/, '').replace(/\[.*\]/, '').toLowerCase().capitalize().trim();
      
      if (!tokens[name]) {
        tokens[name] = 1;
      } else {
        tokens[name]++;
      }
    });
  });

  return tokens;
};