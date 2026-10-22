function validarPostReserva(req, res, next) {
  const { estudiante, email, sala, fecha, turno, personas } = req.body;
  const errores = [];

  if (!estudiante) errores.push("El nombre de estudiante es requerido.");
  if (!email || !email.includes("@")) errores.push("Email inválido.");
  if (!personas || personas < 1 || personas > 6) errores.push("Personas debe ser entre 1 y 6.");

  if (errores.length > 0) {
    return res.status(400).render("reservas/nueva", { errores, valores: req.body });
  }

  next();
}

module.exports = { validarPostReserva };