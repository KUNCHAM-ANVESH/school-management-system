// models/authModel.js
const { connectDB } = require("../config/db");
const bcrypt = require("bcrypt");   // for password hashing

//Method to create new user.
async function createUser(name, email, password, role="student") {
    try {
        const db = await connectDB();
        const usersCollection = db.collection("users");

        // Insert new user document
        const newUser = {
            name,
            email,
            password: password,
            role: role,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        const result = await usersCollection.insertOne(newUser);
        return result.insertedId;
    } catch (error) {
        console.error("Error in createUser:", error);
        throw error;
    }
}

//Method to get the user by email
async function getUserByEmail(email) {
    try {
        const db = await connectDB();
        const usersCollection = db.collection("users");

        const user = await usersCollection.findOne({ email });
        return user;
    } catch (error) {
        console.error("Error in getUserByEmail:", error);
        throw error;
    }
}

module.exports = {
    createUser,
    getUserByEmail
};
