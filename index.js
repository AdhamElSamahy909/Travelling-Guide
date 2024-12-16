const { MongoClient } = require("mongodb");

const app = require("./app");

const url = "mongodb://localhost:27017/myDB";
const client = new MongoClient(url);

async function connectToMongoDb() {
  try {
    await client.connect();
    console.log("Database connected!");
  } catch (error) {
    console.log(error);
    throw error;
  }
}

let db = null;
connectToMongoDb()
  .then((dataBase) => {
    db = dataBase;
    app.listen(3000, () => {
      console.log("App running on port 3000");
    });
  })
  .catch((error) => {
    console.log("Could not connect to DB");
    process.exit(1);
  });

module.exports = db;
