function saludar() {
  console.log("Hola");
  return "adiós";
}
function alPulsar(callback) {
  callback();
}
const sumar = (a, b) => {
  return a + b;
};

//alPulsar(saludar);
alPulsar(saludar());
