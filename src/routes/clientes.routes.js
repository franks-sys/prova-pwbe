const express = require("express");
const router = express.Router();

const ClientesController = require("../controllers/clientes.controller");

router.get("/clientes/:cpf", ClientesController.buscar);
router.post("/cliente",ClientesController.cadastrar);

module.exports = router;
