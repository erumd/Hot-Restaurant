const express = require("express");
const bodyParser = require("body-parser");

// Tells node that we are creating an "express" server
const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});