const express =  require("express");
const router = express.Router();
const Producer = require("../publisher-service/Producer");
const producer = new Producer();

router.post("/createEvent", async (req, res, next)=>{
    await producer.callPublisher(req, res);
    res.send("Event Published");
});

module.exports = router;