const { MeiliSearch } = require("meilisearch");
const movies = require("./movies.json");

(async () => {
  try {
    const config = {
      host: "http://localhost:7700",
      apiKey: "aSampleMasterKey",
    };
    const meili = new MeiliSearch(config);

    const movies = require("./movies.json"); // path to json file

    const index = meili.index("movies");

    await index.addDocuments(movies);
  } catch (e) {
    console.error(e);
    console.log("Meili error: ", e.message);
  }
})();
