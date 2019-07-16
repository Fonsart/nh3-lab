require('dotenv').config();

module.exports = {
  url: process.env.API_URL,
  assets_url: process.env.API_ASSETS_URL,
  token: process.env.API_TOKEN
};
