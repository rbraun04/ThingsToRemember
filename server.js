const express = require("express");
const path = require("path");

//using express on this server
const app = express();

const PORT = process.env.PORT || 8080;


//set static folder
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT; " + PORT);
});

 