(function() {
  const opts = {
    autoResize: true
  };

  $('#total-price').text(`£${parseFloat(window.TOTAL_PRICE).toFixed(2)}`);
  $('#items-cloud').jQCloud(Object.keys(window.ITEM_TOKENS).map(key => ({ text: key, weight: window.ITEM_TOKENS[key] })), opts);
  $('#restaurants-cloud').jQCloud(Object.keys(window.RESTAURANT_TOKENS).map(key => ({ text: key, weight: window.RESTAURANT_TOKENS[key] })), opts);
})();