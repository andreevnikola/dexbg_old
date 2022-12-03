const CRUD = require("./../../db/db.js");
const ObjectId = require('mongodb').ObjectId;

async function cancelDelivery(req, res){
    try {
        let { id, key, phone } = req.params;
        let db = await new CRUD("dex", "deliveries"); 
        let _id = new ObjectId(id);
        let ret = await db.Delete({
            _id: _id,
            status: "Изчаква се отговор"
        });
        if(key !== "undefined"){
            let dbUsers = await new CRUD("dex", "users"); 
            let ret = await dbUsers.Update({
                key: key,
                phone: phone
            }, {
                $pull: {
                    deliveries: _id
                }
            });
        }
        res.status(200).send({
            err: false,
            data: ret,
            id: id
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            err: error,
        });
    }
}

module.exports = { cancelDelivery };