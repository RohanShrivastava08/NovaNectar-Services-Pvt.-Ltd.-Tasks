const express = require("express");
const { MongoClient } = require("mongodb");
const bcrypt = require("bcryptjs");

const app = express();
const port = 3000;

const database = require("./database");

// MongoDB connection URI
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

// Use JSON middleware
app.use(express.json());

// Connect to MongoDB
client
  .connect()
  .then(() => {
    console.log("Connected to MongoDB");

    // Define MongoDB collections
    const db = client.db("collegeDatabase");
    const studentsCollection = db.collection("students");
    const adminsCollection = db.collection("admins");

    const app = express();

    app.get("/", (req, res) => {
      res.send("Hello, World!");
    });

    // Routes for handling attendance data
    app.post("/attendance", async (req, res) => {
      // Store attendance data in MongoDB
      try {
        // Code to store attendance data
        res.send("Attendance recorded successfully");
      } catch (err) {
        console.error("Error storing attendance:", err);
        res.status(500).send("Internal Server Error");
      }
    });

    // Routes for admin authentication
    app.post("/admin/login", async (req, res) => {
      const { username, password } = req.body;

      try {
        // Check if admin exists in the database
        const admin = await adminsCollection.findOne({ username });

        if (!admin) {
          res.status(401).send("Invalid username or password");
          return;
        }

        // Validate password
        const validPassword = await bcrypt.compare(password, admin.password);

        if (!validPassword) {
          res.status(401).send("Invalid username or password");
          return;
        }

        res.send("Admin logged in successfully");
      } catch (err) {
        console.error("Error authenticating admin:", err);
        res.status(500).send("Internal Server Error");
      }
    });

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
