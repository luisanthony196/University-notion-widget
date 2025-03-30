// Se obtiene la semana que se desea
let currentdate = new Date();
let mesIni = 2; // Colocar mes comenzando en 0
let oneJan = new Date(2025, mesIni, 24); // Fecha de inicio del semestre
// Calculo de la semana
let numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
let result = Math.floor(numberOfDays / 7) + 1;
// Se imprime el numero de la semana
const semana = document.querySelector("#semana");
semana.innerHTML = `Semana ${result}`;
