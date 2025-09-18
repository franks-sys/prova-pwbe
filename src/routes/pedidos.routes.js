const express = require("express");
const router = express.Router();

const PedidosController = require("../controllers/pedidos.controller");

router.get("/pedidos",PedidosController.listar);
router.get("/pedidos/:id",PedidosController.buscar);
router.patch("/pedido/:id",PedidosController.alterar);
router.post("/pedido",PedidosController.cadastrar);


module.exports = router;
