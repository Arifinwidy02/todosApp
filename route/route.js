const router = require('express').Router()
const Controller = require('../controller/controller')

router.get("/", Controller.home)
router.get("/add", Controller.getAdd)
router.post("/add", Controller.postAdd)
router.get("/complete/:id", Controller.complete)
router.get("/uncomplete/:id", Controller.uncomplete)
router.get("/delete/:id", Controller.deleted)


module.exports = router