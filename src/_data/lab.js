require('dotenv').config();
const fetch = require('node-fetch');

module.exports = async function() {
  console.log('Fetching LAB');

  return {
    experiences: {
      fr: await getAPI('experiences', 'collections', 'fr'),
      de: await getAPI('experiences', 'collections', 'de'),
      it: await getAPI('experiences', 'collections', 'it'),
      rm: await getAPI('experiences', 'collections', 'rm')
    },
    info: {
      fr: await getAPI('lab', 'singletons', 'fr'),
      de: await getAPI('lab', 'singletons', 'de'),
      it: await getAPI('lab', 'singletons', 'it'),
      rm: await getAPI('lab', 'singletons', 'rm')
    }
  };

  async function getAPI(apiName, apiType, lang) {
    try {
      let res = await fetch(
        `${process.env.API_URL}/${apiType}/get/${apiName}?token=${
          process.env.API_TOKEN
        }`,
        {
          method: 'post',
          body: JSON.stringify({
            simple: 1,
            filter: { published: true },
            lang: lang
          }),
          headers: { 'Content-Type': 'application/json' }
        }
      );
      return res.json();
    } catch (err) {
      console.error(err);
      throw 'Error with the API';
    }
  }
};
