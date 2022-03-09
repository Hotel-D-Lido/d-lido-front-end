const express = require("express");

const app = express();
const PORT = process.env.PORT || 4000;

const publicRoutes = require("./routes");
const adminRoutes = require("./routes.admin");

console.log(__dirname + "/styles");

app.use("/public", express.static(__dirname + "/public"));

app.use("/admin/public", express.static(__dirname + "/admin/public"));

app.use(publicRoutes);
app.use("/admin", adminRoutes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
