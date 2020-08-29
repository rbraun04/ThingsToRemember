const express = require("express");

//using express on this server
const app = express();

const PORT = process.envPORT || 3030;

require("./routes/api")(app);
require("./routes/html")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT; " + PORT);
});

