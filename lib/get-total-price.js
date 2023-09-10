module.exports = (orders) => {
  let total = 0;

  orders.forEach(order => {
    total += parseFloat(order.total);
  })

  return total.toFixed(2);
};