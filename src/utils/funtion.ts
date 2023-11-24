export const nowDate = () => {
  const fechaActual = new Date();

  const dia = fechaActual.getDate();
  const mes = fechaActual.getMonth() + 1;
  const anio = fechaActual.getFullYear();

  const horas = fechaActual.getHours();
  const minutos = fechaActual.getMinutes();
  const segundos = fechaActual.getSeconds();

  return `${anio}-${mes < 10 ? "0" + mes : mes}-${dia < 10 ? "0" + dia : dia} ${
    horas < 10 ? "0" + horas : horas
  }:${minutos < 10 ? "0" + minutos : minutos}:${
    segundos < 10 ? "0" + segundos : segundos
  }`;
};
