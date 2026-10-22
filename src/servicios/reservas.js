function crearServicioReservas(datosIniciales = []) {
  let reservas = [...datosIniciales];

  return {
    listar: () => reservas,
    buscarPorId: (id) => reservas.find((r) => r.id === id),
    contar: () => reservas.length,
    crear: (nuevaReserva) => {
      const reservaConId = { id: Date.now().toString(), ...nuevaReserva };
      reservas.push(reservaConId);
      return reservaConId;
    },
  };
}

module.exports = crearServicioReservas;