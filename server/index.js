const express = require("express");
const cors = require("cors");
const componentRoute = require("./route");
const app = express();
const port = 8080;

// middlewares
app.use(express.json());
app.use(cors());

app.get("/", function (req, res) {
  res.status(200).json({
    msg: "Ok",
  });
});

app.use("/component", componentRoute);

app.listen(port, function () {
  console.log(`Server is running on port number ${port}`);
});
