const CRUD = require("../db/db.js");

async function generateKey(phone){
    let db = await new CRUD("dex", "users");
    let key = Math.floor(Math.random() * 999999999999) + 1;
    key = key.toString();
    let res = await db.Update(
        {
            phone: phone
        },
        {
            $set: { key: key }
        }
    );
    return key;
}

module.exports = { generateKey };