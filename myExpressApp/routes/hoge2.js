const router = require("express").Router();

router.get("/", async (req, res, next) => {
  var request = require('request');
  var options ={
     url: "https://iwasa0319func.azurewebsites.net/api/simplehttpreqres",
     headers: {
      "content-type": "application/json"
    },
  };
  request.post(options, function(error, response, body) {
      res.send(body);
  });
});

module.exports = router;