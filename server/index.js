const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

// Check for dynamic port binding or by default use port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
