const express = require("express");
const { validarPostReserva } = require("../middleware/reservas");

function crearRouterReservas(controlador) {
  const router = express.Router();

  router.get("/", controlador.listarReservas);
  router.get("/nueva", controlador.formularioNueva);
  router.get("/:id", controlador.detalleReserva);
  router.post("/", validarPostReserva, controlador.crearReserva);

  return router;
}

module.exports = crearRouterReservas;