const { nanoid } = require("nanoid")
const fs = require("fs")
const path = require("path")

// function to create Note and save them

function createNote(note, notesArr) {
    note.id = nanoid(36)
    notesArr.push(note)
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(notesArr, null, 2)
    )
}

// function to remove Note

function removeNote(id, notesArr) {
    notesArr.forEach((note, idx) => {
        note.id === id ? notesArr.splice(idx, 1) : ""
    })

    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(notesArr, null, 2)
    )
}

// export functions 

module.exports = {
    createNote,
    removeNote,
}