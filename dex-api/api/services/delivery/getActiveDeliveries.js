const { dispatcher_panel_key } = require("../../variables.js");
const CRUD = require("./../../db/db.js");

async function getActiveDeliveries(req, res){
    try {
        let { key } = req.params;
        if(key != dispatcher_panel_key){
            res.status(200).send({
                err: "Нямате права да отговорите на поръчка. Влезте в активен диспечерски акунт за да можете да отговорите!",
                login: true
            });
            return;
        }
        let db = await new CRUD("dex", "deliveries"); 
        let ret = await db.ReadMany({
            status: "Изчаква се отговор",
            $or:[{answered: false},{answered: {$exists:false}}]
        }, false, {
            sortingTime: 1
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

module.exports = { getActiveDeliveries };