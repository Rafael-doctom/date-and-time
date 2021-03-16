var resultado = document.getElementById("resultado")
var myDate = new Date()
var today = myDate.getDate()
var semana = myDate.getDay()
var ano = myDate.getFullYear()






resultado.innerHTML = `Hoje é dia ${today} de ${semana} de ${ano}`



