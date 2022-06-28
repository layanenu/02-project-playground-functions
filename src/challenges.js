// Desafio 1
function compareTrue(param1, param2) {
  return (!!param1 && !!param2);
}
compareTrue(true, true);
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
calcArea(30, 3);
// // Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
// // Desafio 4
function concatName(array) {
  let first = array[0];
  let last = array[array.length - 1];
  let array2 = [last, first];
  return array2.join(', ');
}
// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = wins * 3;
  let empates = ties * 1;
  let calculo = vitorias + empates;
  return calculo;
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = Math.max.apply(null, array);
  function verificaNumero(numero) {
    return numero === maiorNumero;
  }
  return array.filter(verificaNumero).length;
}

// console.log(highestCount([2, 3, 4, 76, 55, 9, 76, 76]));

// // Desafio 7
// function catAndMouse() {
//   // seu código aqui
// }

// // Desafio 8
// function fizzBuzz() {
//   // seu código aqui
// }

// // Desafio 9
// function encode() {
//   // seu código aqui
// }
// function decode() {
//   // seu código aqui
// }

// // Desafio 10
// function techList() {
//   // seu código aqui
// }

module.exports = {
  calcArea,
  // catAndMouse,
  compareTrue,
  concatName,
  // decode,
  // encode,
  // fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  // techList,
};
