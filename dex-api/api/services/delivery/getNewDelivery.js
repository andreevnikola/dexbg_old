const { dispatcher_panel_key } = require("../../variables.js");
const ObjectId = require('mongodb').ObjectId;
const CRUD = require("./../../db/db.js");

async function getNewDelivery(req, res){
    try {
        let { id, key } = req.params;
        if(key != dispatcher_panel_key){
            res.status(200).send({
                err: "Нямате права. Влезте в активен диспечерски акаунт за можете да получавате поръчки!",
                login: true
            });
            return;
        }
        let _id = new ObjectId(id);
        let db = await new CRUD("dex", "deliveries"); 
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

module.exports = { getNewDelivery };