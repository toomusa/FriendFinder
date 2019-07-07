const express = require("express");
const path = require("path");
const htmlRoutes = require("./app/routing/htmlRoutes.js");
const apiRoutes = require("./app/routing/apiRoutes.js");

const app = express();
const PORT = process.env.PORT || 7777;

app.use(express.urlencoded({extended: true}));
app.use('/assets', express.static(path.join(__dirname, "./assets")));
app.use('/data', express.static(path.join(__dirname, "./app/data")));
app.use(express.json());

app.use(htmlRoutes);
app.use(apiRoutes);

// router.use("/", htmlRoutes);
// router.use("/survey", htmlRoutes);
// router.use("/api/friends", apiRoutes);

app.listen(PORT, () => {console.log("Connected at: " + PORT)})