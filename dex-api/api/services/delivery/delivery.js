const CRUD = require("./../../db/db.js");

async function MakeDelivery(req, res) {
  try {
    let {
        type,
        senderAddress,
        receiverAddress,
        senderPhone,
        receiverPhone,
        key,
        phone,
        name,
        price,
        duration,
        bonusInfo
    } = req.body;

    // let type = "достави";
    // let senderAddress = "ул. Победа 15а";
    // let receiverAddress = "площад Съединение";
    // let senderPhone = "0896604041";
    // let receiverPhone = "0896604245";
    // let bonusInfo = "hay";
    // let phone = "0896604041";`
    // let pass = "nikola_2008";

    let ret;
    let dbUsers;
    if (key !== "undefined") {
      dbUsers = await new CRUD("dex", "users");
      ret = await dbUsers.Read({
        key: key,
        phone: phone,
      });
      if (!ret) {
        res.status(200).send({
          err: "Нямате достъп до този акаунт!",
          bonusInfo: "Влезте в акаунта си отново или изпратете нова поръчка анонимно!",
        });
        return;
      }
    }else{
        phone = "anonymous";
        name = "anonymous";
        key = "anonymous";
    }

    let rawDate = new Date();
    let sortingTime = rawDate.getTime();
    let date = rawDate.getDate() + "." + rawDate.getMonth() + ", " + rawDate.getFullYear() + "г.";
    let time = (rawDate.getHours() < 10 ? "0" + rawDate.getHours() : rawDate.getHours()) + ":" + (rawDate.getMinutes() < 10 ? "0" + rawDate.getMinutes() : rawDate.getMinutes());

    let dbDeliveries = await new CRUD("dex", "deliveries");
    switch (type) {
      case "достави":
        ret = await dbDeliveries.Create({
          status: "Изчаква се отговор",
          type: type,
          senderAddress: senderAddress,
          receiverAddress: receiverAddress,
          senderPhone: senderPhone,
          receiverPhone: receiverPhone,
          sender: phone,
          sortingTime: sortingTime,
          date: date,
          time: time,
          senderName: name,
          price: price,
          duration: duration
        });
        break;
      case "купи":
        ret = await dbDeliveries.Create({
          status: "Изчаква се отговор",
          type: type,
          address: senderAddress,
          buyFrom: receiverAddress,
          phone: senderPhone,
          bonusInfo: bonusInfo,
          sender: phone,
          sortingTime: sortingTime,
          date: date,
          time: time,
          senderName: name,
          price: price,
          duration: duration
        });
        break;
      case "такси":
        ret = await dbDeliveries.Create({
          status: "Изчаква се отговор",
          type: type,
          fromAddress: senderAddress,
          toAddress: receiverAddress,
          phone: senderPhone,
          sender: phone,
          sortingTime: sortingTime,
          date: date,
          time: time,
          senderName: name,
          price: price,
          duration: duration
        });
        break;
    }
    let _id = ret.insertedId.toString();
    if (key !== "anonymous") {
      let _id = ret.insertedId;
      ret = await dbUsers.Update(
        { phone: phone },
        {
          $push: {
            deliveries: _id,
          },
        }
      );
    }
    res.status(200).send({
      err: false,
      _id: _id
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error: "Нещо се обърка!",
    });
  }
}

module.exports = { MakeDelivery };
