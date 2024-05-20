const express = require("express");
const app = express();

app.get("/get-started", (req, res) => {
  res.json({ user: ["userOne", "userTwo", "userThree"] });
});

app.listen(3000, () => {
  console.log("Server Starterd on Port 3000");
});
