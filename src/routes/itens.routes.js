const express = require("express");
const router = express.Router();

const ItensController = require("../controllers/itens.controller");

//Define os métodos e rotas de aplicação
router.get("/itens/:id",ItensController.buscar);
router.delete("/itens/:id",ItensController.apagar);
router.patch("/item/:id",ItensController.alterar);
router.post("/item",ItensController.cadastrar);

module.exports = router;
