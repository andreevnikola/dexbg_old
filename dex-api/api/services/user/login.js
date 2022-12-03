const bcrypt = require("bcryptjs");
const CRUD = require("./../../db/db.js");
const { generateKey } = require('./../../reuseble/generateUserKey');

async function Login(req, res) {
    let db = await new CRUD("dex", "users");
    
    try {
      var { phone, pass } = req.params;
      let result = await db.Read({
        phone: phone
      });
      if (result) {
        const cmp = await bcrypt.compare(pass, result.password);
        if(!cmp){
          res.status(200).send({
            error: "Сгрешен телефонен номер или парола!",
          });
          return
        }
        console.log("User loged in to: " + result.name);
        let key = await generateKey(phone);
        res.status(200).send({
          name: result.name,
          phone: result.phone,
          address: result.address,
          id: result._id.toString(),
          mail: result.mail,
          key: key
        });
      } else {
        res.status(200).send({
          error: "Сгрешен телефонен номер или парола!",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({
        error: "Нещо се обърка!",
      });
    }
}

module.exports = {Login};