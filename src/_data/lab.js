require('dotenv').config();
const fetch = require('node-fetch');

module.exports = async function() {
  console.log('Fetching Experiences');

  return {
    experiences: {
      fr: await getExperience('fr'),
      it: await getExperience('it'),
      rm: await getExperience('rm')
    }
  };

  async function getExperience(lang) {
    try {
      let res = await fetch(
        process.env.API_URL +
          '/collections/get/experiences?token=' +
          process.env.API_TOKEN,
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
