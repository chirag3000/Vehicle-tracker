const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const tripsRouter = require("./routes/trips");

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "10mb" })); // for images as base64

app.use("/api/trips", tripsRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
