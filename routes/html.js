const path = require("path");


module.exports = function(app) {
    app.get("/notes", (req, res) => {
        res.sendFile(path.join(_dirname, "../public/notes.html"));
    });

    app.get("*", (req, res) => {
        res.sendFile(path.join(_dirname, "../public/index.html"));
    }); 

}