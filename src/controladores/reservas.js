function crearControladorReservas(servicio) {
  return {
    mostrarInicio: (req, res) => {
      res.render("inicio");
    },
    obtenerEstado: (req, res) => {
      res.json({
        estado: "OK",
        cantidadReservas: servicio.contar(),
        solicitudId: req.solicitudId,
      });
    },
    listarReservas: (req, res) => {
      res.render("reservas/index", { reservas: servicio.listar() });
    },
    formularioNueva: (req, res) => {
      res.render("reservas/nueva", { errores: [], valores: {} });
    },
    detalleReserva: (req, res) => {
      const reserva = servicio.buscarPorId(req.params.id);
      if (!reserva) {
        return res.status(404).render("no-encontrado");
      }
      res.render("reservas/detalle", { reserva });
    },
    crearReserva: (req, res) => {
      servicio.crear(req.body);
      res.redirect("/reservas");
    },
  };
}

module.exports = crearControladorReservas;