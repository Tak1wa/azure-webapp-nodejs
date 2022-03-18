const router = require("express").Router();

router.get("/", async (req, res, next) => {
    res.send("hoge1");
});

module.exports = router;