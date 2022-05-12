// Se obtiene la semana que se desea
let currentdate = new Date();
let oneJan = new Date(currentdate.getFullYear(),0,1);
let numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
let result = Math.ceil(( currentdate.getDay() + 1 + numberOfDays) / 7);
let uniWeek = result - 19;
// Se imprime el numero de la semana
const semana = document.querySelector('#semana');
semana.innerHTML = `Semana ${uniWeek}`;
