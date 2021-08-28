const dialogRoutes = require("./routes/dialog");
const express = require("express");
const app = express();
// routes
app.use("/api", dialogRoutes);

// assign port
app.listen(process.env.PORT || 3001, () => {
  console.log("Live!!");
});
