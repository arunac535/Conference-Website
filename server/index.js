const express = require("express");
const colors = require("colors");

const app = express();
app.use(express.json()); // to accept JSON data

app.get("/", (req, res) => {
  res.send("Hello");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`.yellow.bold));
