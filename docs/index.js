(function() {
  const opts = {
    autoResize: true
  };

  $('#total-price').text(`£${parseFloat(window.TOTAL_PRICE).toFixed(2)}`);
  $('#items-cloud').jQCloud(Object.keys(window.ITEM_TOKENS).map(key => ({ text: key, weight: window.ITEM_TOKENS[key] })), opts);
  $('#restaurants-cloud').jQCloud(Object.keys(window.RESTAURANT_TOKENS).map(key => ({ text: key, weight: window.RESTAURANT_TOKENS[key] })), opts);

  let itemsTotal = 0;

  for (const key of Object.keys(window.ITEM_TOKENS)) {
    itemsTotal += window.ITEM_TOKENS[key];
  }

  let restaurantsTotal = 0;

  for (const key of Object.keys(window.RESTAURANT_TOKENS)) {
    restaurantsTotal += window.RESTAURANT_TOKENS[key];
  }

  for (const key of Object.keys(window.ITEM_TOKENS).reverse().slice(0, 20)) {
    const count = window.ITEM_TOKENS[key];
    const width = (count / restaurantsTotal) * 100;

    $('#items-bars').append(`
      <div class="bar">
        <span style="width: ${width}%;"></span>
        <h5>${key} (${count}) [${width.toFixed(2)}%]</h5>
      </div>
    `);
  }

  for (const key of Object.keys(window.RESTAURANT_TOKENS).reverse().slice(0, 20)) {
    const count = window.RESTAURANT_TOKENS[key];
    const width = (count / itemsTotal) * 100;

    $('#restaurants-bars').append(`
      <div class="bar">
        <span style="width: ${width}%;"></span>
        <h5>${key} (${count}) [${width.toFixed(2)}%]</h5>
      </div>
    `);
    
  }
})();