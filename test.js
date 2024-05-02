
const express = require("express");
const app = express();
app.use(express.json());
app.post("/sum", (req, res) => {
  const { a, b } = req.body;
  res.status(200).json({ result: a + b });
  
});
app.listen(3000)
