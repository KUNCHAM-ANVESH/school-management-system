const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

//Loading the env file.
dotenv.config();

const uri = process.env.MONGO_URI; 
let client;
let db;

/**
 * Connect to MongoDB only once and reuse the connection
 */
async function connectDB() {
    try {
        if (!client) {
            client = new MongoClient(uri);
            await client.connect();
            console.log("✅ Connected to MongoDB");

            // Get database name from URI or set manually
            db = client.db(process.env.DB_NAME);
        }
        return db;
    } catch (error) {
        console.error("❌ Error connecting to MongoDB:", error);
        process.exit(1);  // stop the server if DB fails
    }
};


module.exports = { connectDB };
