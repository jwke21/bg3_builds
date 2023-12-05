const { MongoClient, ServerApiVersion } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

var _db;

async function connectToServer(callback) {
  // connect to the server
  await client.connect(function (err, db) {
    // Verify we got a good "db" object
    if (db) {
      // _db = db.db("employees");
      console.log("Successfully connected to MongoDB.");
    }
    return callback(err);
  });
}

module.exports = {
  connectToServer,
  getDb: function () {
    return _db;
  },
};
