const crypto = require("crypto");

function identificadorSolicitud(req, res, next) {
  req.solicitudId = crypto.randomUUID();
  res.setHeader("X-Request-ID", req.solicitudId);
  next();
}

function medirTiempo(req, res, next) {
  const inicio = Date.now();
  res.on("finish", () => {
    const duracion = Date.now() - inicio;
    console.log(`[${req.method}] ${req.url} - ${duracion}ms`);
  });
  next();
}

module.exports = { identificadorSolicitud, medirTiempo };