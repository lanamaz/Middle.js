const express = require("express");
const app = express();
const fetch = require("isomorphic-unfetch");
const multer = require("multer");
const path = require("path");
app.use(express.json());

const PORT = 3000;

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      `Server is Successfully Running,  and App is listening on port + ${PORT}`
    );
  else console.log("Error occurred, server can't start", error);
});
app.post("/sum", (req, res) => {
  const { a, b } = req.body;
  res.status(200).json({ result: a + b });
});

const upload = multer({ dest: "uploads/" });
app.post("/upload", upload.single("uploaded"), (req, res) => {
  // req.file will be the "uploaded" file
  // req.body will have the text fields exist
  res.status(200).json({
    result: "Ok",
    file: req.file,
    body: req.body,
  });
});
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("view.ejs", { app: "view" });
});
