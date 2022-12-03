const CRUD = require("./../../db/db.js");

async function showDeliveries(req, res){
    try {
        let { key, phone } = req.params;
        let userDb = await new CRUD("dex", "users");
        let loged = await userDb.Read({
            key: key,
            phone: phone
        });
        if(!loged){
            res.status(200).send({
                err: "Нямате достъп до този акаунт!",
            });
            return;
        }
        let db = await new CRUD("dex", "deliveries"); 
        let ret = await db.ReadMany({
            sender: phone
        }, false, {
            sortingTime: -1
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

module.exports = { showDeliveries };