const { dispatcher_panel_key } = require("../../variables.js");
const ObjectId = require('mongodb').ObjectId;
const CRUD = require("./../../db/db.js");

async function answerDelivery(req, res){
    try {
        let { id, time, accepted, key } = req.params;
        if(key != dispatcher_panel_key){
            res.status(200).send({
                err: "Нямате права. Влезте в активен диспечерски акаунт за можете да отговорите!",
                login: true
            });
            return;
        }
        let rawDate = new Date();
        let rawTimeAtAddress = rawDate.getTime() + 60000 * parseInt(time);
        let dateAtAddressIDK = new Date(rawTimeAtAddress);
        let timeAtAddress = (dateAtAddressIDK.getHours() < 10 ? "0" + dateAtAddressIDK.getHours() : dateAtAddressIDK.getHours()) + ":" + (dateAtAddressIDK.getMinutes() < 10 ? "0" + dateAtAddressIDK.getMinutes() : dateAtAddressIDK.getMinutes());
        let timeIs = (rawDate.getHours() < 10 ? "0" + rawDate.getHours() : rawDate.getHours()) + ":" + (rawDate.getMinutes() < 10 ? "0" + rawDate.getMinutes() : rawDate.getMinutes());
        let _id = new ObjectId(id);
        let db = await new CRUD("dex", "deliveries"); 
        let ret;
        if(accepted === "yes"){
            ret = await db.Update({
                _id: _id
            },
            {
                $set: {
                    answered: true,
                    status: "Отговорено",
                    timeForDelivery: time,
                    timeAtAddress: timeAtAddress,
                    answeredTime: timeIs
                }
            });
        }else{
            ret = await db.Update({
                _id: _id
            },
            {
                $set: {
                    answered: true,
                    status: "Отказана",
                    reason: time
                }
            });
        }
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

module.exports = { answerDelivery };