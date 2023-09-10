module.exports = (orders) => {
  return orders.filter(order => order.status === 'DELIVERED');
}