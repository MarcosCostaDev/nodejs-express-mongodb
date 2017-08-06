var express = require("express");
var userControler = require("../controllers/userController");
var accountControler = require("../controllers/accountController");
var auth = require("../security/auth");
var router = express.Router();

//userControler
router.post("/users", auth.authorize, userControler.create);
router.get("/users", auth.authorize, userControler.get);
router.get("/users/:id", auth.authorize, userControler.getById);
router.put("/users/:id", auth.authorize, userControler.update);
router.delete("/users/:id", auth.isAdmin, userControler.remove);

//accountControler
router.post("/login", accountControler.authenticate)


module.exports = router;