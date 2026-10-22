const express = require("express");
const path = require("path");
const morgan = require("morgan");
const { identificadorSolicitud, medirTiempo } = require("./middleware/solicitudes");
const crearRouterReservas = require("./rutas/reservas");

function crearApp({ controladorReservas, entorno }) {
  const app = express();

  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "../views"));

  const formatoMorgan = entorno === "production" ? "combined" : "dev";
  app.use(morgan(formatoMorgan));

  app.use(express.static(path.join(__dirname, "../public")));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use(identificadorSolicitud);
  app.use(medirTiempo);

  app.get("/", controladorReservas.mostrarInicio);
  app.get("/estado", controladorReservas.obtenerEstado);

  app.use("/reservas", crearRouterReservas(controladorReservas));

  app.use((req, res) => {
    res.status(404).render("no-encontrado");
  });

  return app;
}

module.exports = crearApp;