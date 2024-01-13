const { MeiliSearch } = require("meilisearch");
(async () => {
  try {
    const config = {
      host: "http://localhost:7700",
      apiKey: "aSampleMasterKey",
    };
    const meili = new MeiliSearch(config);

    const books = require("./books.json"); // path to json file

    const index = meili.index("books");

    await index.addDocuments(books);
  } catch (e) {
    console.error(e);
    console.log("Meili error: ", e.message);
  }
})();
