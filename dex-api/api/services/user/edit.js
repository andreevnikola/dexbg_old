const bcrypt = require("bcryptjs");
const CRUD = require("./../../db/db.js");
const { checkLoged } = require('./../../reuseble/checkUserLoged');
const { generateKey } = require('./../../reuseble/generateUserKey');

async function Edit(req, res){
    let db = await new CRUD("dex", "users");

    try {
        var { tochange, changedata, phone, pass } = req.params;
        let [loged, status] = await checkLoged(phone, pass);
        if(!!loged){
            let result;
            switch(tochange){
                case 'mail':
                    result = await db.Update({_id: loged._id},{$set: {mail: changedata}});
                    break;
                case 'name':
                    result = await db.Update({_id: loged._id},{$set: {name: changedata}});
                    break;
                case 'address':
                    result = await db.Update({_id: loged._id},{$set: {address: changedata}});
                    break;
                case 'password':
                    let salt = await bcrypt.genSalt(4);
                    result = await db.Update({_id: loged._id},{$set: {password: await bcrypt.hash(changedata, salt)}});
                    break;
            }
            let key = await generateKey(phone);
            res.status(200).send({
                error: false,
                key: key
            });
        }else{
            let err;
            if(status == 1){err=`Трябва да сте влезли в акаунт за да редактирате!`}
            else{err=`Сгрешена парола. Опитай пак!`}
            res.status(200).send({
                error: err
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            error: "Нещо се обърка!"
        });
    }
}

module.exports = { Edit };