const axios = require ('axios');
const { Countries } = require('./src/db.js')
const server = require("./src/app.js");
const { conn } = require("./src/db.js");

// Syncing all the models at once.
conn
  .sync({ force: true })
  .then(() => {
    server.listen(3001, () => {
      console.log("%s listening at 3001"); // eslint-disable-line no-console
    });
  })
  
const populate = async () => {
  try {
    const apiData = await axios.get('https://restcountries.eu/rest/v2/all');
    console.log('Countries MODEL Populated successfuly')

    const responseBody = apiData.data.map((country) => {
      const {
        alpha3Code,
        name,
        flag,
        region,
        subregion,
        capital,
        area,
        population,
      } = country;

      return {
        id: alpha3Code,
        name,
        flag,
        continent: region,
        subRegion: subregion,
        capital,
        area,
        population,
      };
    })

    Countries.bulkCreate(responseBody);

  } catch (error) {
    console.log({ error })
  }
}

populate();

