const router = require('express').Router(); // objeto de rutas
const filmController = require("../controller/filmController");

router.get("/:title", filmController.getFilm);
router.post("/", filmController.postFilm);


module.exports = router;