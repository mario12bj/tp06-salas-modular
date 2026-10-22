const configuracion = require("./configuracion");
const crearServicioReservas = require("./servicios/reservas");
const crearControladorReservas = require("./controladores/reservas");
const crearApp = require("./app");

const datosIniciales = [
  { id: "1", estudiante: "Mario Rodriguez", email: "gmail@example.com", sala: "A", fecha: "2026-10-20", turno: "mañana", personas: 2 },
];

const servicioReservas = crearServicioReservas(datosIniciales);
const controladorReservas = crearControladorReservas(servicioReservas);

const app = crearApp({
  controladorReservas,
  entorno: configuracion.entorno,
});

app.listen(configuracion.puerto, () => {
  console.log(`Servidor corriendo en puerto ${configuracion.puerto}`);
});