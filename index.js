const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");

// specify on which port app should be running
const port = process.env.JS_PORT;

// custom logging
function log(req, res, next) {
    console.log("Got a request type: " + req.method);
    console.warn("Got: " + req.originalUrl);
    //console.log(req.headers)
    next();
}

app.use(log);
app.use(cors({ origin: ["https://opwngrid.xyz","https://api.opwngrid.xyz"] }));

require("./routes/static_routes.js")(app);

// handle exits
// TODO: Handle this appropriately on other places aswell, ideally also on all the places we make connections (so we can close them)
process.on("SIGINT", function() {
    process.exit(err ? 1 : 0);
});

// start the app
app.listen(port, () => {
    console.log(`grid's frontend listening on port ${port}`);
});