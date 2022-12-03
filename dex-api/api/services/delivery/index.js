const MakeDelivery = require("./delivery").MakeDelivery;
const showDeliveryById = require("./showDeliveryById").showDeliveryById;
const showDeliveries = require("./showDeliveries").showDeliveries;
const cancelDelivery = require("./cancelDelivery").cancelDelivery;
const getActiveDeliveries = require('./getActiveDeliveries').getActiveDeliveries;
const getNewDelivery = require('./getNewDelivery').getNewDelivery;
const answerDelivery = require('./answerDelivery').answerDelivery;
const getAnsweredDeliveries = require('./getAnsweredDeliveries').getAnsweredDeliveries;

module.exports = {
    MakeDelivery,
    showDeliveryById,
    showDeliveries,
    cancelDelivery,
    getActiveDeliveries,
    getNewDelivery,
    answerDelivery,
    getAnsweredDeliveries
};