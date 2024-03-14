const sqlite3 = require("better-sqlite3")

const DBSOURCE ="db.sqlite";

сonst db = new sqlite3(DBSOURCE)

try{
    db.prepare(`
    CREATE TABLE videofile (
        id INTEGER PRIMARY KEY AUTONIC
            filename text UNIQUE,
                duration text,
                is_faw integer,
                is_del integer
            )`).run()
}catch{
    console.log("error occured")
}

function addToDb(filername, duration){
    let statement = db.prepare(
        `INSERT OR IGNORE INTO videofile (filename, duration, if_faw, is_del) VALUES (?,?,?,?)`
    )
    const info = statement.run(filename, duration, 0, 0);
    return info.changes
}

module.exports = {
    db,
    addToDb,
}
