const router = require('express').Router();
const { Register, Login, Edit, dispetcherLogin } = require('./../services/user');
const { getAnsweredDeliveries, MakeDelivery, showDeliveryById, showDeliveries, cancelDelivery, getActiveDeliveries, getNewDelivery, answerDelivery } = require("./../services/delivery");

router.get("/users/add/:name/:pass/:phone/:address/:mail", (req, res) => { Register(req, res) });
router.get("/users/login/:phone/:pass", (req, res) => { Login(req, res) });
router.get("/users/edit/:tochange/:changedata/:phone/:pass", (req, res) => { Edit(req, res) });
router.post("/delivery/make", (req, res) => { MakeDelivery(req, res) });
router.get("/delivery/get/:id", (req, res) => { showDeliveryById(req, res) });
router.get("/delivery/list/:key/:phone", (req, res) => { showDeliveries(req, res) });
router.get("/delivery/remove/:id/:key/:phone", (req, res) => { cancelDelivery(req, res) });
router.get("/delivery/active/:key", (req, res) => { getActiveDeliveries(req, res) });
router.get("/delivery/answered/:key", (req, res) => { getAnsweredDeliveries(req, res) });
router.get("/delivery/new/:id/:key", (req, res) => { getNewDelivery(req, res) });
router.get("/delivery/answer/:id/:time/:accepted/:key", (req, res) => { answerDelivery(req, res) });
router.get("/users/dispatcher/login/:name/:password", (req, res) => { dispetcherLogin(req, res) });

module.exports = router;