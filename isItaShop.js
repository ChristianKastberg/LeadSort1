var axios = require("axios").default;
var options = {
  method: 'GET',
  url: 'https://api.builtwith.com/lists8/api.json?KEY=759bf464-8054-4fa3-a9e5-2a7e9c800103&TECH=Shopify',
 
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});