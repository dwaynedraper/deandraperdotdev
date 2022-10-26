require("dotenv").config();

const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export async function createRandom(document, callback) {
  try {
    await client.connect();
    const database = client.db("test");
    const collection = database.collection("random");
    const insert = await collection.insertOne(document);
    console.log("inserted", insert);
    callback(null, insert);
  } catch (error) {
    console.log("error", error);
    callback(error, null);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

export async function getRandomById(query, callback) {
  try {
    await client.connect();
    const database = client.db("test");
    const collection = database.collection("random");
    const insert = await collection.find({ That: "should do." });
    console.log("inserted", insert);
    callback(null, insert);
  } catch (error) {
    console.log("error", error);
    callback(error, null);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
