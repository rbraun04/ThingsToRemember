const db = require("../db/db.json");
const fs = require("fs");
const { v4: uuidv4} = require("uuid");





module.exports = function(app) {
    

    app.get("/api/notes", (req, res) => {
        res.send(db);

    });

    app.post("/api/notes", (req,res) => {
        let noteId = uuidv4();
        let newNote = {
            id: noteId,
            title: req.body.title,
            text: req.body.text
        };
    
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;

        const allNotes = JSON.parse(data);

        allNotes.push(newNote);

        fs.writeFile("./db/db.json", JSON.stringify(allNotes, null, 2), err => {
            if (err) throw err;
            res.send(true);
            console.log("Created note.")
        
       
        });
    });
});

app.delete("/api/notes/:id", (req, res) => {

    let noteId = req.params.id;

    fs.readFile("./db/db.json", "utf8", (err, data)  => {
    if (err) throw err;

    const allNotes = JSON.parse(data);
    const newAllNotes = allNotes.filter(note => note.id != noteId);

    fs.writeFile("./db/db.json", JSON.stringify(newAllNotes, null, 2), err => {
        if (err) throw err;
        res.send(true);
        console.log("Deleted")
    });
});
});
};
