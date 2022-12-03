const CRUD = require("./../../db/db.js");
const ObjectId = require('mongodb').ObjectId;

async function showDeliveryById(req, res){
    try {
        let { id } = req.params;
        let db = await new CRUD("dex", "deliveries"); 
        let _id = new ObjectId(id);
        let ret = await db.Read({
            _id: _id
        });
        res.status(200).send({
            err: false,
            data: ret
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            err: error,
        });
    }
}

module.exports = { showDeliveryById };