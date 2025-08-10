server.jsconst express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// serve everything in the repo folder (index.html, styles.css, etc.)
app.use(express.static(path.join(__dirname)));

// simple health check
app.get("/healthz", (req, res) => res.send("ok"));

app.listen(PORT, () => {
  console.log(`My Set running on port ${PORT}`);
});
