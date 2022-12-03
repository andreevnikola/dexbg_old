const { dispatcher_panel_key } = require("../../variables");

async function dispetcherLogin(req, res){
    let { name, password } = req.params;
    if(name === "Eco Taxi" && password === "password_123"){
        res.status(200).send({
            error: false,
            key: dispatcher_panel_key
        });
    }else{
        res.status(200).send({
            error: true
        });
    }
}

module.exports = { dispetcherLogin };