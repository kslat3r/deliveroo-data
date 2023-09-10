const axios = require('axios');
const url = 'https://api.uk.deliveroo.com/orderapp/v1/users/15528899/orders'
const bearer = process.env.BEARER_TOKEN;

module.exports = async (offset, limit = 26) => {
  let data;

  try {
    data = await axios({
      method: 'get',
      url,
      headers: {
        'Authorization': `Bearer ${bearer}`
      },
      responseType: 'json',
      params: {
        offset,
        limit
      }
    });
  } catch (e) {
    throw e;
  }

  return data.data.orders;
}