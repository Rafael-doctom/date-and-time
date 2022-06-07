let resultado = document.getElementById("resultado");
let myDate = new Date();
let today = myDate.getDate();
let semana = myDate.getDay();
let ano = myDate.getFullYear();

switch (semana) {
  case 1:
    resultado.innerHTML = `Hoje é Segunda-feira , dia ${today}  de ${ano}.`;
    break;
  case 2:
    resultado.innerHTML = `Hoje é Terça-feira, dia ${today} de   ${ano}.`;
    break;
  case 3:
    resultado.innerHTML = `Hoje é Quarta-feira, dia  ${today} de   ${ano}.`;
    break;
  case 4:
    resultado.innerHTML = `Hoje é  Quinta-feira, dia ${today}  de ${ano}.`;
    break;
  case 5:
    resultado.innerHTML = `Hoje é  Sexta-feira,  dia  ${today}  de ${ano}.`;
    break;
  case 6:
    resultado.innerHTML = `Hoje é  Sábado, dia ${today}  de ${ano}.`;
    break;
  case 7:
    resultado.innerHTML = `Hoje é Domingo, dia ${today}  de ${ano}.`;
    break;
  default:
    console.log(`Sorry, we are out of ${semana}.`);
}
