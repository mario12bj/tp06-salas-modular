const puerto = parseInt(process.env.PORT, 10) || 3000;

if (isNaN(puerto) || puerto < 1 || puerto > 65535) {
  throw new Error("El puerto debe ser un número entero entre 1 y 65535");
}

const entorno = process.env.NODE_ENV || "development";

module.exports = {
  puerto,
  entorno,
};