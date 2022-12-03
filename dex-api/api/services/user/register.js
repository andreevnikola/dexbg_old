const bcrypt = require("bcryptjs");
const CRUD = require("./../../db/db.js");

async function Register(req, res) {
  let salt = await bcrypt.genSalt(4);
  let db = await new CRUD("dex", "users");
  await db.connect();

  try {
    let { name, pass, phone, address, mail } = req.params;
    let hashedPass = await bcrypt.hash(pass, salt);
    let result = await db.Read({
      phone: phone,
    });
    if (result) {
      res.status(200).send({
        error: "Телефонният номер е зает!",
      });
    } else {
      let key = Math.floor(Math.random() * 999999999999) + 1;
      key = key.toString();
      let result = await db.Create({
        name: name,
        password: hashedPass,
        phone: phone,
        address: address,
        mail: mail,
        key: key
      });
      console.log(
        "New user is added with _id: " +
          result.insertedId +
          " and name: " +
          name
      );
      //let key = await generateKey(phone);
      res.status(200).send({
        error: false,
        id: result.insertedId,
        key: key
      });
    }
  } catch (error) {
    console.log("Error registering user: " + error);
    res.status(200).send(error);
  }
}

module.exports = {Register};